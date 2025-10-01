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
      className={`relative flex flex-col-reverse lg:flex-row items-center gap-10 p-10 overflow-hidden min-h-[400px] ${className}`}
      id={id}
    >
      <div
        className={`absolute rounded-xl top-0 ${
          isImageRight ? "left-0" : "right-0"
        } w-[70%] h-full bg-purple-50 z-0`}
      />

      {/* Content */}
      <div
        className={`lg:w-1/2 relative z-10 ${
          isImageRight ? "order-1" : "order-2"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        {description && <p className="text-gray-600 mb-4">{description}</p>}

        {features.length > 0 && (
          <ul className="text-gray-600 list-disc list-inside mb-6 space-y-2">
            {features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {price && <p className="text-gray-800 font-semibold mb-2">{price}</p>}

        <Button variant="primary" onClick={onBookDemo}>
          {t("home.bookaDemo")}
        </Button>
      </div>

      {/* Image */}
      <img
        src={image}
        alt={imageAlt}
        className={`w-full lg:w-1/2 relative z-10 ${
          isImageRight ? "order-2" : "order-1"
        }`}
        loading="lazy"
        width="500"
        height="400"
      />
    </div>
  );
}
