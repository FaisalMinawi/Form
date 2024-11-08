// src/components/steps/ThankYou.jsx
import thankYouIcon from "../../assets/images/icon-thank-you.svg";

export default function ThankYou() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center">
        <img src={thankYouIcon} alt="Thank you" className="mx-auto mb-8" />
        <h1 className="text-marine-blue text-[32px] font-bold mb-4">
          Thank you!
        </h1>
        <p className="text-cool-gray text-base max-w-[450px]">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
