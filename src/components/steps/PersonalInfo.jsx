// src/components/steps/PersonalInfo.jsx
import { useForm } from "../../context/FormContext";
import { useState } from "react";

export default function PersonalInfo() {
  const { formData, updateFormData } = useForm();
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
  });
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    switch (field) {
      case "name":
        return !value.trim() ? "This field is required" : "";
      case "email":
        if (!value.trim()) return "This field is required";
        if (!/\S+@\S+\.\S+/.test(value)) return "Please enter a valid email";
        return "";
      case "phone":
        if (!value.trim()) return "This field is required";
        if (!/^\+?[\d\s-]+$/.test(value))
          return "Please enter a valid phone number";
        return "";
      default:
        return "";
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validate(field, formData[field] || "");
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
    if (touched[field]) {
      const error = validate(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-marine-blue text-[32px] font-bold mb-2">
        Personal info
      </h1>
      <p className="text-cool-gray text-base mb-8">
        Please provide your name, email address, and phone number.
      </p>

      <div className="space-y-5">
        <div>
          <div className="flex justify-between mb-1">
            <label htmlFor="name" className="text-sm text-marine-blue">
              Name
            </label>
            {touched.name && errors.name && (
              <span className="text-sm text-strawberry-red font-medium">
                {errors.name}
              </span>
            )}
          </div>
          <input
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
            value={formData.name || ""}
            onChange={(e) => handleInputChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            className={`
              w-full px-4 py-3 border rounded-lg text-marine-blue font-medium
              placeholder:text-cool-gray focus:outline-none focus:ring-1 
              transition-colors
              ${
                touched.name && errors.name
                  ? "border-strawberry-red ring-strawberry-red"
                  : "border-light-gray focus:ring-purplish-blue"
              }
            `}
          />
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <label htmlFor="email" className="text-sm text-marine-blue">
              Email Address
            </label>
            {touched.email && errors.email && (
              <span className="text-sm text-strawberry-red font-medium">
                {errors.email}
              </span>
            )}
          </div>
          <input
            type="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            value={formData.email || ""}
            onChange={(e) => handleInputChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            className={`
              w-full px-4 py-3 border rounded-lg text-marine-blue font-medium
              placeholder:text-cool-gray focus:outline-none focus:ring-1 
              transition-colors
              ${
                touched.email && errors.email
                  ? "border-strawberry-red ring-strawberry-red"
                  : "border-light-gray focus:ring-purplish-blue"
              }
            `}
          />
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <label htmlFor="phone" className="text-sm text-marine-blue">
              Phone Number
            </label>
            {touched.phone && errors.phone && (
              <span className="text-sm text-strawberry-red font-medium">
                {errors.phone}
              </span>
            )}
          </div>
          <input
            type="tel"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            value={formData.phone || ""}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
            className={`
              w-full px-4 py-3 border rounded-lg text-marine-blue font-medium
              placeholder:text-cool-gray focus:outline-none focus:ring-1 
              transition-colors
              ${
                touched.phone && errors.phone
                  ? "border-strawberry-red ring-strawberry-red"
                  : "border-light-gray focus:ring-purplish-blue"
              }
            `}
          />
        </div>
      </div>
    </div>
  );
}
