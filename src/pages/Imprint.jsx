import { useTranslation } from "react-i18next";
import SEO from "../components/SEO.jsx";

// Imprint page does not accept props
export default function Imprint() {
  const { t } = useTranslation(["pages"]);
  
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl">
      <SEO
        title={t("imprint.metaTitle")}
        description={t("imprint.metaDescription")}
      />
      
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-6">{t("imprint.heading")}</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{t("imprint.legalInfo")}</h2>
          <p className="mb-2 text-lg font-bold">{t("imprint.companyName")}</p>
          <p className="mb-1">{t("imprint.address.street")}</p>
          <p className="mb-1">{t("imprint.address.postal")}</p>
          <p className="mb-4">{t("imprint.address.country")}</p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-2">{t("imprint.represented")}</h3>
          <p className="mb-4">{t("imprint.owner")}</p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-2">{t("imprint.contact")}</h3>
          <p className="mb-2">
            <strong>{t("imprint.phone")}</strong> {t("imprint.phoneValue")}
          </p>
          <p className="mb-2">
            <strong>{t("imprint.email")}</strong>{" "}
            <a href={`mailto:${t("imprint.emailValue")}`} className="text-blue-600 hover:underline">
              {t("imprint.emailValue")}
            </a>
          </p>
          <p className="mb-2">
            <strong>{t("imprint.website")}</strong>{" "}
            <a href={`https://${t("imprint.websiteValue")}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              {t("imprint.websiteValue")}
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-2">{t("imprint.registerEntry")}</h3>
          <p className="mb-2">
            <strong>{t("imprint.registerCourt")}</strong> {t("imprint.registerCourtValue")}
          </p>
          <p className="mb-2">
            <strong>{t("imprint.registerNumber")}</strong> {t("imprint.registerNumberValue")}
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-2">{t("imprint.vatId")}</h3>
          <p className="mb-2">{t("imprint.vatIdDesc")}</p>
          <p className="mb-2 font-semibold">{t("imprint.vatIdValue")}</p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-2">{t("imprint.authority")}</h3>
          <p className="mb-2">{t("imprint.authorityDesc")}</p>
        </section>
      </div>
    </div>
  );
}
