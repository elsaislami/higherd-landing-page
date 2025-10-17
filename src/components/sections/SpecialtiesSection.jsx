import { useTranslation } from "react-i18next";
import Button from "../ui/Button.jsx";
import { getIconComponent } from "../../utils/iconHelpers.jsx";

export default function SpecialtiesSection({
  className = "",
  pageKey = "home",
  buttonText = "",
  buttonLink = "#",
}) {
  const { t } = useTranslation(["pages"]);

  return (
    <section
      className={`container mx-auto my-12 sm:my-16 lg:my-20 flex flex-col lg:flex-row items-center gap-8 sm:gap-10 ${className}`}
    >
      <div className="relative flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6 lg:p-10 overflow-hidden min-h-[300px] sm:min-h-[400px] w-full">
        <div className="absolute rounded-xl top-0 right-0 w-[50%] sm:w-[45%] lg:w-[40%] h-full bg-purple-50 z-0" />

        <div className="lg:w-1/2 z-10 text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            {t(`${pageKey}.specialties.title`)}
          </h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            {t(`${pageKey}.specialties.desc`)}
          </p>
          {buttonText && (
            <Button variant="primary" onClick={buttonLink}>
              {buttonText}
            </Button>
          )}
        </div>

        <div className="lg:w-1/2 space-y-3 sm:space-y-4 relative z-10 w-full">
          {t(`${pageKey}.specialties.items`, { returnObjects: true }).map(
            (item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 p-6 bg-white shadow-xl rounded-lg"
              >
                <div className="text-2xl sm:text-3xl flex-shrink-0">
                  {getIconComponent(item.icon)}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
