import { useTranslation } from "react-i18next";
import SEO from "../components/SEO.jsx";

// PrivacyTerms page does not accept props
export default function PrivacyTerms() {
  const { t } = useTranslation(["pages"]);
  
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl">
      <SEO
        title={t("privacy.metaTitle")}
        description={t("privacy.metaDescription")}
      />
      
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-6">{t("privacy.title")}</h1>
        
        <div className="text-sm text-gray-600 mb-8">
          <p><strong>{t("privacy.effectiveDate")}</strong> {t("privacy.effectiveDateValue")}</p>
          <p><strong>{t("privacy.lastUpdated")}</strong> {t("privacy.lastUpdatedValue")}</p>
          <p><strong>{t("privacy.website")}</strong> <a href="https://www.higherd.de" className="text-blue-600 hover:underline">https://www.higherd.de</a></p>
          <p><strong>{t("privacy.contact")}</strong> <a href="mailto:support@higherd.de" className="text-blue-600 hover:underline">support@higherd.de</a></p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("privacy.section1.title")}</h2>
          <p className="mb-4">
            {t("privacy.section1.p1")} <strong>{t("privacy.section1.gdpr")}</strong> {t("privacy.section1.p2")} <strong>{t("privacy.section1.euAiAct")}</strong>.
          </p>
          <p className="mb-4">
            {t("privacy.section1.p3")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("privacy.section2.title")}</h2>
          <p className="mb-4">{t("privacy.section2.intro")}</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>{t("privacy.section2.item1")}</strong> {t("privacy.section2.item1Desc")}</li>
            <li className="mb-2"><strong>{t("privacy.section2.item2")}</strong> {t("privacy.section2.item2Desc")}</li>
            <li className="mb-2"><strong>{t("privacy.section2.item3")}</strong> {t("privacy.section2.item3Desc")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("privacy.section3.title")}</h2>
          <p className="mb-4">{t("privacy.section3.intro")}</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>{t("privacy.section3.item1")}</strong>: {t("privacy.section3.item1Desc")}</li>
            <li className="mb-2"><strong>{t("privacy.section3.item2")}</strong>: {t("privacy.section3.item2Desc")}</li>
            <li className="mb-2"><strong>{t("privacy.section3.item3")}</strong>: {t("privacy.section3.item3Desc")}</li>
            <li className="mb-2"><strong>{t("privacy.section3.item4")}</strong>: {t("privacy.section3.item4Desc")}</li>
            <li className="mb-2"><strong>{t("privacy.section3.item5")}</strong>: {t("privacy.section3.item5Desc")}</li>
          </ul>
          <p className="mb-4">
            {t("privacy.section3.note")} <strong>{t("privacy.section3.notBold")}</strong> {t("privacy.section3.noteEnd")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("privacy.section4.title")}</h2>
          <p className="mb-4">{t("privacy.section4.intro")}</p>
          <ul className="list-disc pl-6 mb-4">
            {t("privacy.section4.items", { returnObjects: true }).map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("privacy.section5.title")}</h2>
          <p className="mb-4">{t("privacy.section5.intro")}</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>{t("privacy.section5.item1")}</strong> {t("privacy.section5.item1Desc")}</li>
            <li className="mb-2"><strong>{t("privacy.section5.item2")}</strong> {t("privacy.section5.item2Desc")}</li>
            <li className="mb-2"><strong>{t("privacy.section5.item3")}</strong> {t("privacy.section5.item3Desc")}</li>
            <li className="mb-2"><strong>{t("privacy.section5.item4")}</strong> {t("privacy.section5.item4Desc")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("privacy.section6.title")}</h2>
          <p className="mb-4">
            {t("privacy.section6.p1")} <strong>{t("privacy.section6.culturalFit")}</strong> {t("privacy.section6.p2")} <strong>{t("privacy.section6.rightToExplain")}</strong> {t("privacy.section6.p3")}
          </p>
          <p className="mb-4">{t("privacy.section6.weOffer")}</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>{t("privacy.section6.item1")}</strong></li>
            <li className="mb-2"><strong>{t("privacy.section6.item2")}</strong></li>
            <li className="mb-2"><strong>{t("privacy.section6.item3")}</strong> {t("privacy.section6.item3Desc")}</li>
          </ul>
          <p className="mb-4">
            {t("privacy.section6.note")} <strong>{t("privacy.section6.notBold")}</strong> {t("privacy.section6.noteEnd")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("privacy.section7.title")}</h2>
          <p className="mb-4">
            {t("privacy.section7.p1")} <strong>{t("privacy.section7.automated")}</strong> {t("privacy.section7.p2")}
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">{t("privacy.section7.item1")} <strong>{t("privacy.section7.notFinal")}</strong></li>
            <li className="mb-2">{t("privacy.section7.item2")}</li>
            <li className="mb-2">{t("privacy.section7.item3")} <strong>{t("privacy.section7.objectText")}</strong> {t("privacy.section7.item3End")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("privacy.section8.title")}</h2>
          <p className="mb-4">{t("privacy.section8.intro")}</p>
          <ul className="list-disc pl-6 mb-4">
            {t("privacy.section8.items", { returnObjects: true }).map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
          <p className="mb-4">
            {t("privacy.section8.note")} <strong>{t("privacy.section8.notBold")}</strong> {t("privacy.section8.noteEnd")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("privacy.section9.title")}</h2>
          <p className="mb-4">
            {t("privacy.section9.text")} <strong>{t("privacy.section9.scc")}</strong>{t("privacy.section9.textEnd")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("privacy.section10.title")}</h2>
          <p className="mb-4">{t("privacy.section10.intro")}</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">{t("privacy.section10.item1")} <strong>{t("privacy.section10.months12")}</strong> {t("privacy.section10.item1End")}</li>
            <li className="mb-2">{t("privacy.section10.item2")} <strong>{t("privacy.section10.duration")}</strong> {t("privacy.section10.item2End")}</li>
            <li className="mb-2">{t("privacy.section10.item3")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("privacy.section11.title")}</h2>
          <p className="mb-4">{t("privacy.section11.intro")}</p>
          <ul className="list-disc pl-6 mb-4">
            {t("privacy.section11.items", { returnObjects: true }).map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
          <p className="mb-4">
            {t("privacy.section11.contact")} <a href="mailto:support@higherd.de" className="text-blue-600 hover:underline font-semibold">support@higherd.de</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("privacy.section12.title")}</h2>
          <p className="mb-4">{t("privacy.section12.intro")}</p>
          <ul className="list-disc pl-6 mb-4">
            {t("privacy.section12.items", { returnObjects: true }).map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("privacy.section13.title")}</h2>
          <p className="mb-4">
            {t("privacy.section13.text")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("privacy.section14.title")}</h2>
          <p className="mb-4">
            {t("privacy.section14.text")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("privacy.section15.title")}</h2>
          <p className="mb-4">{t("privacy.section15.intro")}</p>
          <p className="mb-2">
            📧 <a href="mailto:support@higherd.de" className="text-blue-600 hover:underline font-semibold">support@higherd.de</a>
          </p>
          {/* <p className="mb-2">
            🌍 <a href="https://www.higherd.de/contact" className="text-blue-600 hover:underline">https://www.higherd.de/contact</a>
          </p> */}
        </section>
      </div>
    </div>
  );
}
