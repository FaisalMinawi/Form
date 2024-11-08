// src/components/steps/SelectPlan.jsx
import { useForm } from "../../context/FormContext";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";

export default function SelectPlan() {
  const { formData, updateFormData } = useForm();

  const plans = [
    {
      id: "arcade",
      icon: arcadeIcon,
      name: "Arcade",
      monthlyPrice: 9,
      yearlyPrice: 90,
    },
    {
      id: "advanced",
      icon: advancedIcon,
      name: "Advanced",
      monthlyPrice: 12,
      yearlyPrice: 120,
    },
    {
      id: "pro",
      icon: proIcon,
      name: "Pro",
      monthlyPrice: 15,
      yearlyPrice: 150,
    },
  ];

  const handlePlanSelection = (planId) => {
    updateFormData({ plan: planId });
  };

  const handleBillingToggle = () => {
    updateFormData({ isYearly: !formData.isYearly });
  };

  return (
    <div className="w-full">
      <h1 className="text-marine-blue text-[32px] font-bold mb-2">
        Select your plan
      </h1>
      <p className="text-cool-gray text-base mb-8">
        You have the option of monthly or yearly billing.
      </p>

      {/* Plan Options */}
      <div className="space-y-3 md:space-y-0 md:flex md:gap-4 mb-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => handlePlanSelection(plan.id)}
            className={`
              flex md:flex-col md:w-1/3 p-4 rounded-lg border cursor-pointer
              hover:border-purplish-blue transition-all
              ${
                formData.plan === plan.id
                  ? "border-purplish-blue bg-magnolia"
                  : "border-light-gray"
              }
            `}
          >
            <img src={plan.icon} alt="" className="w-10 h-10 md:mb-10" />
            <div className="ml-4 md:ml-0">
              <h3 className="text-marine-blue font-medium">{plan.name}</h3>
              <p className="text-cool-gray text-sm">
                $
                {formData.isYearly
                  ? `${plan.yearlyPrice}/yr`
                  : `${plan.monthlyPrice}/mo`}
              </p>
              {formData.isYearly && (
                <p className="text-marine-blue text-sm mt-1">2 months free</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center items-center gap-6 py-3 bg-alabaster rounded-lg">
        <span
          className={`text-sm font-medium transition-colors
      ${!formData.isYearly ? "text-marine-blue" : "text-cool-gray"}
    `}
        >
          Monthly
        </span>
        <button
          type="button"
          onClick={handleBillingToggle}
          className="relative w-[38px] h-[20px] bg-marine-blue rounded-full"
          aria-label="Toggle billing period"
        >
          <div
            className={`
        absolute top-[2px] left-[2px] w-[16px] h-[16px] bg-white rounded-full
        transition-transform duration-200
        ${formData.isYearly ? "translate-x-[18px]" : "translate-x-0"}
      `}
          />
        </button>
        <span
          className={`text-sm font-medium transition-colors
      ${formData.isYearly ? "text-marine-blue" : "text-cool-gray"}
    `}
        >
          Yearly
        </span>
      </div>
    </div>
  );
}
