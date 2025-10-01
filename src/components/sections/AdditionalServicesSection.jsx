import Button from "../ui/Button";

export default function AdditionalServicesSection({
  services = [],
  title,
  description,
  ctaText,
  ctaButtonText,
}) {
  return (
    <section className="container ml-40 my-20 flex flex-col items-center ">
      {title && (
        <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      )}
      {description && (
        <p className="text-center text-gray-600 mb-10">{description}</p>
      )}
      <div className="flex overflow-x-auto gap-6  ">
        {services.map((service, index) => (
          <div
            key={index}
            className="min-w-1/4 max-w-1/4 my-4  p-6 border border-gray-100 rounded-lg shadow-lg bg-white "
          >
            {service.icon && (
              <div className="flex justify-center mb-2 text-4xl">
                {service.icon}
              </div>
            )}
            {service.image && !service.icon && (
              <div className="flex justify-center mb-2">
                <img
                  src={service.image}
                  alt=""
                  className="rounded-lg object-cover max-h-48 w-full
                  "
                />
              </div>
            )}
            <h4 className="font-semibold">{service.title}</h4>
            <p className="text-sm text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
      {(ctaText || ctaButtonText) && (
        <div className="mt-8 flex items-center justify-between bg-gray-100 p-4 rounded-lg">
          {ctaText && <p className="text-sm text-gray-600 mr-2">{ctaText}</p>}
          {ctaButtonText && <Button variant="primary">{ctaButtonText}</Button>}
        </div>
      )}
    </section>
  );
}
