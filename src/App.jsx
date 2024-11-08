// src/App.jsx
import { FormProvider } from "./context/FormContext";
import FormLayout from "./components/layout/FormLayout";
import PersonalInfo from "./components/steps/PersonalInfo";
import SelectPlan from "./components/steps/SelectPlan";
import AddOns from "./components/steps/AddOns";
import Summary from "./components/steps/Summary";
import ThankYou from "./components/steps/ThankYou";
import { useForm } from "./context/FormContext";

function FormSteps() {
  const { currentStep } = useForm();

  switch (currentStep) {
    case 1:
      return <PersonalInfo />;
    case 2:
      return <SelectPlan />;
    case 3:
      return <AddOns />;
    case 4:
      return <Summary />;
    case 5:
      return <ThankYou />;
    default:
      return <PersonalInfo />;
  }
}

export default function App() {
  return (
    <FormProvider>
      <FormLayout>
        <FormSteps />
      </FormLayout>
    </FormProvider>
  );
}
