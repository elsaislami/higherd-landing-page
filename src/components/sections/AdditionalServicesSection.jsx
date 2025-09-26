import { useTranslation } from "react-i18next";

export default function AdditionalServicesSection({ services = [] }) {
  const { t } = useTranslation("pages");

  return (
    <section className="container my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg bg-white">
            <h4 className="font-semibold">{service.title}</h4>
            <p className="text-sm text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
