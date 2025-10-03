import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button.jsx";

export default function PricingCard({
  planName,
  planTitle,
  price,
  features,
  isPremium = false,
  onBookDemo,
  className = "",
}) {
  const { t } = useTranslation(["pages"]);

  return (
    <div
      className={`flex-1 min-w-[280px] sm:min-w-0 rounded-xl border p-4 sm:p-5 shadow-sm relative bg-white ${
        isPremium ? "border-purple-300 shadow-md" : "border-gray-200"
      } ${className}`}
    >
      {isPremium && (
        <div className="absolute top-0 right-4 -translate-y-1/2 bg-purple-700 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
          {t("home.pricing.employers.bestPlan")}
        </div>
      )}

      <h3 className="text-sm sm:text-base font-semibold mb-0.5">{planName}</h3>
      <p className="text-gray-500 mb-1 text-xs sm:text-sm">{planTitle}</p>
      <p
        className={`text-base sm:text-lg font-bold mb-2 ${
          isPremium ? "text-purple-700" : ""
        }`}
      >
        {price}
      </p>

      <ul className="space-y-2 mb-3 text-xs sm:text-sm">
        {features.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full py-2 text-xs sm:text-sm ${
          isPremium ? "bg-purple-700 hover:bg-purple-800" : ""
        }`}
        variant={isPremium ? "primary" : "outline"}
        onClick={onBookDemo}
      >
        {t("home.bookaDemo")}
      </Button>
    </div>
  );
}

PricingCard.propTypes = {
  planName: PropTypes.string.isRequired,
  planTitle: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  features: PropTypes.arrayOf(PropTypes.node).isRequired,
  isPremium: PropTypes.bool,
  onBookDemo: PropTypes.func,
  className: PropTypes.string,
};
