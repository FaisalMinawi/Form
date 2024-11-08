// src/components/layout/FormLayout.jsx
import { useForm } from "../../context/FormContext";
import bgMobile from "../../assets/images/bg-sidebar-mobile.svg";
import bgDesktop from "../../assets/images/bg-sidebar-desktop.svg";

const steps = [
  { id: 1, title: "YOUR INFO", subtitle: "STEP 1" },
  { id: 2, title: "SELECT PLAN", subtitle: "STEP 2" },
  { id: 3, title: "ADD-ONS", subtitle: "STEP 3" },
  { id: 4, title: "SUMMARY", subtitle: "STEP 4" },
];

export default function FormLayout({ children }) {
  const { currentStep, nextStep, prevStep, validateStep } = useForm();

  const handleNext = () => {
    if (validateStep(currentStep)) {
      nextStep();
    }
  };

  const renderButton = () => {
    if (currentStep === 5) return null;

    return (
      <div
        className={`
        fixed bottom-0 left-0 right-0 bg-white p-4 md:static md:bg-transparent
        ${currentStep === 5 ? "hidden" : ""}
      `}
      >
        <div className="flex justify-between max-w-[450px] mx-auto">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="text-cool-gray font-medium hover:text-marine-blue"
            >
              Go Back
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            className={`
              ml-auto px-6 py-3 rounded-lg text-white font-medium
              transition-opacity hover:opacity-90
              ${currentStep === 4 ? "bg-purplish-blue" : "bg-marine-blue"}
            `}
          >
            {currentStep === 4 ? "Confirm" : "Next Step"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen">
        {/* Background Header */}
        <div className="fixed top-0 left-0 right-0 h-[172px] -z-10">
          <img src={bgMobile} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Step Indicators */}
        <div className="pt-8 px-4 flex justify-center gap-4 mb-[35px]">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`
                w-[33px] h-[33px] rounded-full border border-white
                flex items-center justify-center font-bold text-sm
                ${
                  (currentStep === 5 && step.id === 4) ||
                  currentStep === step.id
                    ? "bg-light-blue text-marine-blue border-light-blue"
                    : "text-white"
                }
              `}
            >
              {step.id}
            </div>
          ))}
        </div>

        {/* Content Card */}
        <div className="px-4 pb-24">
          <div className="bg-white rounded-[10px] p-6 shadow-lg">
            <div
              className={`flex flex-col items-center max-w-[450px] mx-auto ${
                currentStep === 5 ? "justify-center min-h-[400px]" : ""
              }`}
            >
              {children}
            </div>
          </div>
        </div>

        {renderButton()}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex min-h-screen items-center justify-center p-4">
        <div className="bg-white rounded-[15px] p-4 flex shadow-lg max-w-[940px] w-full">
          {/* Sidebar */}
          <aside className="relative w-[274px] shrink-0">
            <img src={bgDesktop} alt="" className="w-full rounded-[10px]" />
            <div className="absolute top-10 left-8">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center mb-8">
                  <div
                    className={`
                      w-[33px] h-[33px] rounded-full border border-white
                      flex items-center justify-center font-bold text-sm mr-4
                      ${
                        (currentStep === 5 && step.id === 4) ||
                        currentStep === step.id
                          ? "bg-light-blue text-marine-blue border-light-blue"
                          : "text-white"
                      }
                    `}
                  >
                    {step.id}
                  </div>
                  <div>
                    <p className="text-pastel-blue text-xs font-normal">
                      {step.subtitle}
                    </p>
                    <p className="text-white text-sm font-bold tracking-wider">
                      {step.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 px-[100px] py-10 relative">
            <div
              className={`h-full ${
                currentStep === 5 ? "flex items-center justify-center" : ""
              }`}
            >
              <div className="max-w-[450px] w-full">{children}</div>
            </div>
            {currentStep !== 5 && (
              <div className="absolute bottom-0 left-[100px] right-[100px]">
                <div className="flex justify-between">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="text-cool-gray font-medium hover:text-marine-blue"
                    >
                      Go Back
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleNext}
                    className={`
                      ml-auto px-6 py-3 rounded-lg text-white font-medium
                      transition-opacity hover:opacity-90
                      ${
                        currentStep === 4
                          ? "bg-purplish-blue"
                          : "bg-marine-blue"
                      }
                    `}
                  >
                    {currentStep === 4 ? "Confirm" : "Next Step"}
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
