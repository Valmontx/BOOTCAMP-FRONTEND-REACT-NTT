// permite registrar con valores vac'ios
import { useState } from "react";
import {FormData, FormErrors} from "../domain/cart-types"



export const useCheckoutForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    district: "",
    adress: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  //Validacio completa de formulario

  const validateForm = () => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // los regex deben estar en otro archivo
    if (!formData.fullname || !/^[a-zA-Z\s]+$/.test(formData.fullname)) {
      newErrors.fullname = "You must enter a valid value";
      isValid = false;
    }

    if (!formData.district) {
      newErrors.district = "Required field";
      isValid = false;
    }

    if (!formData.adress) {
      newErrors.adress  = "Required field";
      isValid = false;
    }

    // los regex deben estar en otro archivo
    if (!formData.phone || !/^\d+$/.test(formData.phone)) {
      newErrors.phone = "You must enter a valid number";
      isValid = false;
  
    }

    setErrors(newErrors);
    return isValid;
  };

 // Validacion en tiempo real

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
   
    setErrors((prev) => {
      const newErrors = { ...prev };
      // los regex deben estar en otro archivo
      if (name === "fullname" && (!value || !/^[a-zA-Z\s]+$/.test(value))) {
        newErrors.fullname = "You must enter a valid value";
      } else if (name === "fullname") {
        delete newErrors.fullname; 
      }
  
      if (name === "district" && !value) {
        newErrors.district = "Required field";
      } else if (name === "district") {
        delete newErrors.district;
      }
  
      if (name === "adress" && !value) {
        newErrors.adress = "Required field";
      } else if (name === "adress") {
        delete newErrors.adress;
      }
      // los regex deben estar en otro archivo
      if (name === "phone" && (!value || !/^\d+$/.test(value))) {
        newErrors.phone = "You must enter a valid number";
      } else if (name === "phone") {
        delete newErrors.phone;
      }
  
      return newErrors; 
    });
  
   

  };

  const resetForm = () => {
    setFormData({
        fullname: "",
        district: "",
        adress: "",
        phone: "",
    });
    setErrors({});
  };

  return {
    formData,
    errors,
    handleInputChange,
    validateForm,
    resetForm,
  
    
  };
};
