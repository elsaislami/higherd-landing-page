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
      className={`relative flex flex-col-reverse lg:flex-row items-center gap-10 p-10 overflow-hidden min-h-[400px] ${className}`}
      id="for-companies"
    >
      <div className="absolute rounded-xl top-0 right-0 w-[70%] h-full bg-purple-50 z-0" />

      <img
        src={image}
        alt={imageAlt}
        className="w-full lg:w-1/2 relative z-10"
        loading="lazy"
        width="500"
        height="400"
      />

      {/* Text content */}
      <div className="lg:w-1/2 relative z-10">
        <h2 className="text-2xl font-bold mb-4">
          {t("home.pricing.employers.title")}
        </h2>
        <div className="w-full flex flex-col md:flex-row gap-4">
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

        <div className="mt-6 text-center">
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
