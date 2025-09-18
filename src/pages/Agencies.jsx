import { useTranslation } from "react-i18next";
import SEO from "../components/SEO.jsx";

export default function Agencies() {
  const { t } = useTranslation("pages");
  return (
    <>
      <SEO
        title={`${t("agencies.title")} - Higherd Solutions`}
        description={t("agencies.subtitle")}
        keywords={[
          "recruitment agencies",
          "staffing agencies",
          "personalagenturen",
          "Germany recruiting",
          "agency partnerships",
          "talent acquisition",
        ]}
        url="https://higherd.de/agencies"
      />
      <section className="container py-10">
        <h1 className="text-2xl font-bold">{t("agencies.title")}</h1>
        <p className="mt-2 text-gray-600">{t("agencies.subtitle")}</p>
      </section>
    </>
  );
}
