import { useTranslation } from "react-i18next";
import Button from "../ui/Button.jsx";

export default function ServiceSection({
  id,
  title,
  description,
  price,
  features = [],
  image,
  imageAlt,
  imagePosition = "right", // "left" or "right"
  onBookDemo,
  className = "",
}) {
  const { t } = useTranslation(["pages"]);
  const isImageRight = imagePosition === "right";

  return (
    <div
      className={`relative flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-12 overflow-hidden min-h-[300px] sm:min-h-[400px] ${className}`}
      id={id}
    >
      <div
        className={`absolute rounded-xl top-0 ${
          isImageRight ? "left-0" : "right-0"
        } w-[90%] sm:w-[85%] lg:w-[80%] h-full bg-purple-50 z-0`}
      />

      {/* Content */}
      <div
        className={`w-full lg:w-1/2 relative z-10 flex flex-col items-center lg:items-start ${
          isImageRight ? "order-1" : "order-2"
        }`}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center lg:text-left">
          {title}
        </h2>

        {description && (
          <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg text-center lg:text-left">
            {description}
          </p>
        )}

        {features.length > 0 && (
          <ul className="text-gray-600 list-disc list-inside mb-6 space-y-2 text-sm md:text-base text-left w-full max-w-md mx-auto lg:mx-0">
            {features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {price && (
          <p className="text-gray-800 font-semibold mb-2 text-center lg:text-left">
            {price}
          </p>
        )}

        <Button variant="primary" onClick={onBookDemo}>
          {t("home.bookaDemo")}
        </Button>
      </div>

      {/* Image */}
      <img
        src={image}
        alt={imageAlt}
        className={`w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg lg:w-1/2 relative z-10 object-cover rounded-lg shadow-md ${
          isImageRight ? "order-2" : "order-1"
        }`}
        loading="lazy"
        width="500"
        height="400"
      />
    </div>
  );
}
