import { useState } from "react";
import { useTranslation } from "react-i18next";
import FAQStructuredData from "../FAQStructuredData.jsx";

export default function FAQSection({ faqs, className = "" }) {
  const { t } = useTranslation(["pages"]);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      className={`container my-20 flex flex-col items-center justify-center ${className}`}
    >
      <FAQStructuredData faqs={faqs} />
      <h2 className="text-2xl font-bold mb-6">{t("home.faq.title")}</h2>
      <div className="space-y-4 w-full max-w-4xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md p-6 cursor-pointer w-full"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">{faq.q}</p>
              <span className="text-xl font-bold">
                {index === activeIndex ? "−" : "+"}
              </span>
            </div>
            {index === activeIndex && (
              <p className="mt-4 text-base text-gray-600">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
