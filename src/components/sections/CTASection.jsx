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
      className={`bg-[#4500A8] py-16 text-center text-white ${className}`}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex justify-center mx-auto w-full">
        {title}
      </h2>
      <p className="my-3 ">{subtitle}</p>
      <Button variant={variant} onClick={onButtonClick}>
        {buttonText}
      </Button>
    </section>
  );
}
