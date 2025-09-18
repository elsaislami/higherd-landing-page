import { useTranslation } from "react-i18next";
import SEO from "../components/SEO.jsx";

export default function Companies() {
  const { t } = useTranslation("pages");
  return (
    <>
      <SEO
        title={`${t("companies.title")} - Higherd Solutions`}
        description={t("companies.subtitle")}
        keywords={[
          "company recruiting",
          "enterprise hiring",
          "SME recruitment",
          "business talent acquisition",
          "Germany",
          "unternehmen personalvermittlung",
        ]}
        url="https://higherd.de/companies"
      />
      <section className="container py-10">
        <h1 className="text-2xl font-bold">{t("companies.title")}</h1>
        <p className="mt-2 text-gray-600">{t("companies.subtitle")}</p>
      </section>
    </>
  );
}
