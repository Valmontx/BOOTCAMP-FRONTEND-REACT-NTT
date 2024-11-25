
import { useState } from "react";

interface FormData {
  fullname: string;
  district: string;
  adress: string;
  phone: string;
}

interface FormErrors {
  [key: string]: string;
}

export const useCheckoutForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    district: "",
    adress: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.fullname || !/^[a-zA-Z\s]+$/.test(formData.fullname)) {
      newErrors.fullname = "Debe ingresar un valor válido";
      isValid = false;
    }

    if (!formData.district) {
      newErrors.district = "Campo obligatorio";
      isValid = false;
    }

    if (!formData.adress) {
      newErrors.adress = "Campo obligatorio";
      isValid = false;
    }

    if (!formData.phone || !/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Debe ingresar un número válido";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
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
