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
      className={`bg-[#4500A8] justify-items-center px-8 py-16  text-white ${className}`}
    >
      <h1 className="title-xl-white mx-auto w-full">{title}</h1>
      <p className="my-3 text-center ">{subtitle}</p>
      <Button variant={variant} onClick={onButtonClick}>
        {buttonText}
      </Button>
    </section>
  );
}
