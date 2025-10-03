import { useTranslation } from "react-i18next";
import PricingCard from "../ui/PricingCard.jsx";

export default function EmployerPricingSection({
  image,
  imageAlt,
  onBookDemo,
  className = "",
}) {
  const { t } = useTranslation(["pages"]);

  return (
    <div
      className={`relative flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-12 overflow-hidden min-h-[300px] sm:min-h-[400px] ${className}`}
      id="for-companies"
    >
      <div className="absolute rounded-xl top-0 right-0 w-[90%] sm:w-[85%] lg:w-[80%] h-full bg-purple-50 z-0" />

      <img
        src={image}
        alt={imageAlt}
        className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg lg:w-1/2 relative z-10 object-cover rounded-lg shadow-md"
        loading="lazy"
        width="500"
        height="400"
      />

      {/* Text content */}
      <div className="w-full lg:w-1/2 relative z-10 flex flex-col items-center lg:items-start">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center lg:text-left">
          {t("home.pricing.employers.title")}
        </h2>
        <div className="w-full flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
          {/* Core Plan */}
          <PricingCard
            planName={t("home.pricing.employers.corePlanName")}
            planTitle={t("home.pricing.employers.coreplanTitle")}
            price={
              <>
                {t("home.pricing.employers.corePrice")}
                <span className="text-xs font-normal">
                  {t("home.pricing.employers.userMonth")}
                </span>
              </>
            }
            features={t("home.pricing.employers.coreFeatures", {
              returnObjects: true,
            })}
            onBookDemo={onBookDemo}
          />

          {/* Premium Plan */}
          <PricingCard
            planName={t("home.pricing.employers.premiumPlanName")}
            planTitle={t("home.pricing.employers.premiumDesc")}
            price={
              <>
                {t("home.pricing.employers.premiumPriceValue")}
                <span className="text-xs font-normal text-gray-600">
                  {t("home.pricing.employers.fromMonthly")}
                </span>
              </>
            }
            features={t("home.pricing.employers.premiumFeatures", {
              returnObjects: true,
            })}
            isPremium={true}
            onBookDemo={onBookDemo}
          />
        </div>

        <div className="mt-6 text-center w-full">
          <p className="text-xs text-gray-500">
            {t("home.pricing.employers.commissionBased")} <br />
            <a
              href="#"
              className="text-purple-700 font-semibold hover:underline cursor-pointer"
            >
              {t("home.pricing.employers.contactSales")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
