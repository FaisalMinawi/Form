// src/context/FormContext.jsx
import { createContext, useContext, useState } from "react";

const FormContext = createContext(null);

export const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    name: "",
    email: "",
    phone: "",
    // Plan Selection
    plan: "arcade",
    isYearly: false,
    // Add-ons
    addons: {
      "online-service": false,
      "larger-storage": false,
      "customizable-profile": false,
    },
  });

  const validateStep = (step) => {
    switch (step) {
      case 1:
        // Personal Info validation
        if (!formData.name?.trim()) return false;
        if (!formData.email?.trim() || !/\S+@\S+\.\S+/.test(formData.email))
          return false;
        if (!formData.phone?.trim() || !/^\+?[\d\s-]+$/.test(formData.phone))
          return false;
        return true;

      case 2:
        // Plan Selection validation
        return !!formData.plan;

      case 3:
        // Add-ons validation - optional, always valid
        return true;

      case 4:
        // Summary validation - always valid if we got here
        return true;

      default:
        return false;
    }
  };

  const updateFormData = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const goToStep = (step) => {
    if (step >= 1 && step <= 5) {
      setCurrentStep(step);
    }
  };

  return (
    <FormContext.Provider
      value={{
        currentStep,
        formData,
        updateFormData,
        nextStep,
        prevStep,
        goToStep,
        validateStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
