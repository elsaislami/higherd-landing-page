import { useTranslation } from "react-i18next";
import SEO from "../components/SEO.jsx";

export default function Candidates() {
  const { t } = useTranslation("pages");
  return (
    <>
      <SEO
        title={`${t("candidates.title")} - Higherd Solutions`}
        description={t("candidates.subtitle")}
        keywords={[
          "job seekers",
          "candidates",
          "career opportunities",
          "jobs Germany",
          "fachkräfte",
          "stellensuche",
          "karriere",
        ]}
        url="https://higherd.de/candidates"
      />
      <section className="container py-10">
        <h1 className="text-2xl font-bold">{t("candidates.title")}</h1>
        <p className="mt-2 text-gray-600">{t("candidates.subtitle")}</p>
      </section>
    </>
  );
}
