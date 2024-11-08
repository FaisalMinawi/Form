// src/components/steps/AddOns.jsx
import { useForm } from "../../context/FormContext";

// Simple check icon component
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="9"
    viewBox="0 0 12 9"
  >
    <path
      fill="none"
      stroke="#FFF"
      strokeWidth="2"
      d="m1 4 3.433 3.433L10.866 1"
    />
  </svg>
);

const ADDONS = [
  {
    id: "online-service",
    title: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: "larger-storage",
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: "customizable-profile",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

export default function AddOns() {
  const { formData, updateFormData } = useForm();

  const toggleAddon = (addonId) => {
    const currentAddons = formData.addons || {};
    updateFormData({
      addons: {
        ...currentAddons,
        [addonId]: !currentAddons[addonId],
      },
    });
  };

  return (
    <div className="w-full">
      <h1 className="text-marine-blue text-[32px] font-bold mb-2">
        Pick add-ons
      </h1>
      <p className="text-cool-gray text-base mb-8">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="space-y-4">
        {ADDONS.map((addon) => (
          <div
            key={addon.id}
            onClick={() => toggleAddon(addon.id)}
            className={`
              flex items-center p-4 rounded-lg border cursor-pointer
              hover:border-purplish-blue transition-all
              ${
                formData.addons?.[addon.id]
                  ? "border-purplish-blue bg-magnolia"
                  : "border-light-gray"
              }
            `}
          >
            <div
              className={`
                w-5 h-5 rounded border mr-4 flex items-center justify-center
                ${
                  formData.addons?.[addon.id]
                    ? "bg-purplish-blue border-purplish-blue"
                    : "border-light-gray"
                }
              `}
            >
              {formData.addons?.[addon.id] && <CheckIcon />}
            </div>

            <div className="flex-1">
              <h3 className="text-marine-blue font-medium">{addon.title}</h3>
              <p className="text-cool-gray text-sm">{addon.description}</p>
            </div>

            <p className="text-purplish-blue text-sm">
              +$
              {formData.isYearly
                ? `${addon.yearlyPrice}/yr`
                : `${addon.monthlyPrice}/mo`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
