// src/components/steps/Summary.jsx
import { useForm } from "../../context/FormContext";

const ADDONS = {
  "online-service": {
    name: "Online service",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  "larger-storage": {
    name: "Larger storage",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  "customizable-profile": {
    name: "Customizable profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
};

const PLANS = {
  arcade: {
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  advanced: {
    name: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
  },
  pro: {
    name: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
  },
};

export default function Summary() {
  const { formData, goToStep } = useForm();
  const { plan, isYearly, addons } = formData;

  const selectedPlan = PLANS[plan];
  const planPrice = isYearly
    ? selectedPlan.yearlyPrice
    : selectedPlan.monthlyPrice;
  const period = isYearly ? "yr" : "mo";

  // Calculate total
  const addonsTotal = Object.entries(addons || {}).reduce(
    (total, [addonId, isSelected]) => {
      if (!isSelected) return total;
      const addon = ADDONS[addonId];
      return total + (isYearly ? addon.yearlyPrice : addon.monthlyPrice);
    },
    0
  );

  const total = planPrice + addonsTotal;

  return (
    <div className="w-full">
      <h1 className="text-marine-blue text-[32px] font-bold mb-2">
        Finishing up
      </h1>
      <p className="text-cool-gray text-base mb-8">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-alabaster rounded-lg p-6">
        {/* Selected Plan */}
        <div className="flex justify-between items-center pb-6 border-b border-light-gray">
          <div>
            <h2 className="text-marine-blue font-medium">
              {selectedPlan.name} ({isYearly ? "Yearly" : "Monthly"})
            </h2>
            <button
              type="button"
              onClick={() => goToStep(2)}
              className="text-cool-gray text-sm underline hover:text-purplish-blue"
            >
              Change
            </button>
          </div>
          <span className="text-marine-blue font-bold">
            ${planPrice}/{period}
          </span>
        </div>

        {/* Add-ons */}
        {Object.entries(addons || {}).map(([addonId, isSelected]) => {
          if (!isSelected) return null;
          const addon = ADDONS[addonId];
          const addonPrice = isYearly ? addon.yearlyPrice : addon.monthlyPrice;

          return (
            <div
              key={addonId}
              className="flex justify-between items-center mt-4"
            >
              <span className="text-cool-gray text-sm">{addon.name}</span>
              <span className="text-marine-blue text-sm">
                +${addonPrice}/{period}
              </span>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center p-6">
        <span className="text-cool-gray text-sm">
          Total (per {isYearly ? "year" : "month"})
        </span>
        <span className="text-purplish-blue text-xl font-bold">
          +${total}/{period}
        </span>
      </div>
    </div>
  );
}
