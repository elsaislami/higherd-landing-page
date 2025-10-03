import { useState } from "react";
import { useTranslation } from "react-i18next";
import FAQStructuredData from "../FAQStructuredData.jsx";

export default function FAQSection({ faqs, className = "" }) {
  const { t } = useTranslation(["pages"]);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      className={`container mx-auto my-12 sm:my-16 lg:my-20 flex flex-col items-center justify-center px-4 sm:px-6 ${className}`}
    >
      <FAQStructuredData faqs={faqs} />
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center">
        {t("home.faq.title")}
      </h2>
      <div className="space-y-4 w-full max-w-4xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md p-4 sm:p-6 cursor-pointer w-full"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-sm sm:text-base lg:text-lg pr-4">
                {faq.q}
              </p>
              <span className="text-lg sm:text-xl font-bold flex-shrink-0">
                {index === activeIndex ? "−" : "+"}
              </span>
            </div>
            {index === activeIndex && (
              <p className="mt-4 text-sm sm:text-base text-gray-600">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
