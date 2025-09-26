import { useTranslation } from "react-i18next";
import Button from "../ui/Button.jsx";

export default function SpecialtiesSection({
  className = "",
  pageKey = "home",
  buttonText = "",
  buttonLink = "#",
}) {
  const { t } = useTranslation(["pages"]);

  return (
    <section
      className={`container my-20 flex flex-col lg:flex-row items-center gap-10 ${className}`}
    >
      <div className="relative flex flex-col-reverse lg:flex-row items-center gap-10 p-10 overflow-hidden min-h-[400px]">
        <div className="absolute rounded-xl top-0 right-0 w-[40%] h-full bg-purple-50 z-0" />

        <div className="lg:w-1/2 z-10">
          <h2 className="text-2xl font-bold mb-4">
            {t(`${pageKey}.specialties.title`)}
          </h2>
          <p className="text-gray-600 mb-4">
            {t(`${pageKey}.specialties.desc`)}
          </p>
          {buttonText && (
            <Button variant="primary" onClick={buttonLink}>
              {buttonText}
            </Button>
          )}
        </div>

        <div className="lg:w-1/2 space-y-4 relative z-10">
          {t(`${pageKey}.specialties.items`, { returnObjects: true }).map(
            (item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white shadow-xl rounded-lg"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
