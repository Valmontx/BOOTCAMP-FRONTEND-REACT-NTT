import { renderHook , act } from '@testing-library/react';
import { useCheckoutForm } from '../useCheckForm';

describe('useCheckoutForm', () => {
    it('should initialize formData and errors correctly', () => {
      const { result } = renderHook(() => useCheckoutForm());
  
      expect(result.current.formData).toEqual({
        fullname: '',
        district: '',
        adress: '',
        phone: ''
      });
      expect(result.current.errors).toEqual({});
    });
  
    it('should update formData when handleInputChange is called', () => {
      const { result } = renderHook(() => useCheckoutForm());
  
    
      act(() => {
        result.current.handleInputChange('fullname', 'John Doe');
      });
  
     
      expect(result.current.formData.fullname).toBe('John Doe');
    });
  
    it('should validate form data and set errors correctly', () => {
      const { result } = renderHook(() => useCheckoutForm());
  
      
      act(() => {
        result.current.handleInputChange('fullname', ''); 
        result.current.handleInputChange('district', ''); 
        result.current.handleInputChange('adress', ''); 
        result.current.handleInputChange('phone', '123abc');
      });
  
      
      expect(result.current.errors).toEqual({
        fullname: 'You must enter a valid value',
        district: 'Required field',
        adress: 'Required field',
        phone: 'You must enter a valid number'
      });
  
     
      act(() => {
        expect(result.current.validateForm()).toBe(false);
      });
    });
  
    it('should reset formData and errors when resetForm is called', () => {
      const { result } = renderHook(() => useCheckoutForm());
  
      
      act(() => {
        result.current.handleInputChange('fullname', 'Jane Doe');
      });
  
    
      expect(result.current.formData.fullname).toBe('Jane Doe');
  
    
      act(() => {
        result.current.resetForm();
      });
  
      
      expect(result.current.formData).toEqual({
        fullname: '',
        district: '',
        adress: '',
        phone: ''
      });
      expect(result.current.errors).toEqual({});
    });
  });