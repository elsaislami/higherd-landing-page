import { useTranslation } from "react-i18next";
import SEO from "../components/SEO.jsx";

// TermsOfService page does not accept props
export default function TermsOfService() {
  const { t } = useTranslation(["pages"]);
  
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl">
      <SEO
        title={t("terms.metaTitle")}
        description={t("terms.metaDescription")}
      />
      
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-6">{t("terms.heading")}</h1>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("terms.section1.title")}</h2>
          <p className="mb-4">{t("terms.section1.p1")}</p>
          <p className="mb-4">{t("terms.section1.p2")}</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">{t("terms.section1.userType1")}</li>
            <li className="mb-2">{t("terms.section1.userType2")}</li>
            <li className="mb-2">{t("terms.section1.userType3")}</li>
          </ul>
          <p className="mb-4">{t("terms.section1.p3")}</p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("terms.section2.title")}</h2>
          <p className="mb-4">{t("terms.section2.intro")}</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">{t("terms.section2.service1")}</li>
            <li className="mb-2">{t("terms.section2.service2")}</li>
            <li className="mb-2">{t("terms.section2.service3")}</li>
          </ul>
          <p className="mb-2"><strong>{t("terms.section2.note")}</strong> {t("terms.section2.noteText")}</p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("terms.section3.title")}</h2>
          <h3 className="text-lg font-semibold mb-2">{t("terms.section3.subtitle1")}</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">{t("terms.section3.item1")}</li>
            <li className="mb-2">{t("terms.section3.item2")}</li>
            <li className="mb-2">{t("terms.section3.item3")}</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">{t("terms.section3.subtitle2")}</h3>
          <p className="mb-4">{t("terms.section3.ageText")}</p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("terms.section4.title")}</h2>
          <h3 className="text-lg font-semibold mb-2">{t("terms.section4.subtitle1")}</h3>
          <p className="mb-4">{t("terms.section4.permittedText")}</p>
          <h3 className="text-lg font-semibold mb-2">{t("terms.section4.subtitle2")}</h3>
          <p className="mb-2">{t("terms.section4.prohibitedIntro")}</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">{t("terms.section4.prohibited1")}</li>
            <li className="mb-2">{t("terms.section4.prohibited2")}</li>
            <li className="mb-2">{t("terms.section4.prohibited3")}</li>
            <li className="mb-2">{t("terms.section4.prohibited4")}</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("terms.section5.title")}</h2>
          <h3 className="text-lg font-semibold mb-2">{t("terms.section5.subtitle1")}</h3>
          <p className="mb-4">{t("terms.section5.p1")}</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">{t("terms.section5.item1")}</li>
            <li className="mb-2">{t("terms.section5.item2")}</li>
            <li className="mb-2">{t("terms.section5.item3")}</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">{t("terms.section5.subtitle2")}</h3>
          <p className="mb-4">{t("terms.section5.oversightText")}</p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("terms.section6.title")}</h2>
          <h3 className="text-lg font-semibold mb-2">{t("terms.section6.subtitle1")}</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">{t("terms.section6.employer1")}</li>
            <li className="mb-2">{t("terms.section6.employer2")}</li>
            <li className="mb-2">{t("terms.section6.employer3")}</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">{t("terms.section6.subtitle2")}</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">{t("terms.section6.candidate1")}</li>
            <li className="mb-2">{t("terms.section6.candidate2")}</li>
            <li className="mb-2">{t("terms.section6.candidate3")}</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("terms.section7.title")}</h2>
          <p className="mb-4">{t("terms.section7.intro")}</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">{t("terms.section7.point1")}</li>
            <li className="mb-2">{t("terms.section7.point2")}</li>
            <li className="mb-2">{t("terms.section7.point3")}</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("terms.section8.title")}</h2>
          <p className="mb-4">{t("terms.section8.text")}</p>
          <p className="mb-2">
            📧 <strong>{t("terms.section8.support")}</strong>{" "}
            <a href="mailto:support@higherd.de" className="text-blue-600 hover:underline">
              support@higherd.de
            </a>
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("terms.section9.title")}</h2>
          <h3 className="text-lg font-semibold mb-2">{t("terms.section9.subtitle1")}</h3>
          <p className="mb-4">{t("terms.section9.candidatesText")}</p>
          <h3 className="text-lg font-semibold mb-2">{t("terms.section9.subtitle2")}</h3>
          <p className="mb-4">{t("terms.section9.employersText")}</p>
          <h3 className="text-lg font-semibold mb-2">{t("terms.section9.subtitle3")}</h3>
          <p className="mb-4">{t("terms.section9.generalText")}</p>
        </section>

        {/* Section 10 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("terms.section10.title")}</h2>
          <p className="mb-4">{t("terms.section10.text")}</p>
        </section>

        {/* Section 11 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("terms.section11.title")}</h2>
          <h3 className="text-lg font-semibold mb-2">{t("terms.section11.subtitle1")}</h3>
          <p className="mb-4">{t("terms.section11.employersText")}</p>
          <h3 className="text-lg font-semibold mb-2">{t("terms.section11.subtitle2")}</h3>
          <p className="mb-4">{t("terms.section11.candidatesText")}</p>
        </section>

        {/* Section 12 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("terms.section12.title")}</h2>
          <p className="mb-4">{t("terms.section12.text")}</p>
        </section>

        {/* Section 13 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("terms.section13.title")}</h2>
          <p className="mb-4">{t("terms.section13.text")}</p>
        </section>

        {/* Section 14 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("terms.section14.title")}</h2>
          <p className="mb-2">
            📧{" "}
            <a href={`mailto:${t("terms.section14.email")}`} className="text-blue-600 hover:underline font-semibold">
              {t("terms.section14.email")}
            </a>
          </p>
          {/* <p className="mb-2">
            🌍{" "}
            <a href={t("terms.section14.website")} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              {t("terms.section14.website")}
            </a>
          </p> */}
        </section>
      </div>
    </div>
  );
}
