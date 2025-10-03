import { useTranslation } from "react-i18next";
import Button from "../ui/Button.jsx";

export default function CTASection({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  variant = "primary",
  className = "",
}) {
  const { t } = useTranslation(["pages"]);

  return (
    <section
      className={`bg-[#4500A8] justify-items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-white ${className}`}
    >
      <h1 className="title-xl-white mx-auto w-full text-center text-xl sm:text-2xl lg:text-3xl font-bold">
        {title}
      </h1>
      <p className="my-3 text-center text-sm sm:text-base max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="flex justify-center">
        <Button variant={variant} onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
