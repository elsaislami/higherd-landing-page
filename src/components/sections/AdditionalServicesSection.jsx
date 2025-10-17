import Button from "../ui/Button";
import { getIconComponent } from "../../utils/iconHelpers.jsx";

export default function AdditionalServicesSection({
  services = [],
  title,
  description,
  ctaText,
  ctaButtonText,
}) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-16 lg:my-20 flex flex-col items-center">
      {title && (
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-center text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-3xl">
          {description}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 border border-gray-100 rounded-lg shadow-lg bg-white"
          >
            {service.icon && (
              <div className="flex justify-left mb-2 text-4xl h-12">
                {getIconComponent(service.icon)}
              </div>
            )}
            {service.image && !service.icon && (
              <div className="flex justify-center mb-2">
                <img
                  src={service.image}
                  alt=""
                  className="rounded-lg object-cover max-h-60 w-full"
                />
              </div>
            )}
            <h4 className="font-semibold text-sm sm:text-base my-4">
              {service.title}
            </h4>
            <p className="text-xs sm:text-sm text-gray-500">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      {(ctaText || ctaButtonText) && (
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between bg-gray-100 p-4 rounded-lg w-full max-w-2xl gap-3 sm:gap-0">
          {ctaText && (
            <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
              {ctaText}
            </p>
          )}
          {ctaButtonText && <Button variant="primary">{ctaButtonText}</Button>}
        </div>
      )}
    </section>
  );
}
