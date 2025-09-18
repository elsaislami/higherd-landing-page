import { useTranslation } from "react-i18next";
import SEO from "../components/SEO.jsx";

export default function About() {
  const { t } = useTranslation("pages");
  return (
    <>
      <SEO
        title={`${t("about.title")} - Higherd Solutions`}
        description={t("about.subtitle")}
        keywords={[
          "about Higherd",
          "company information",
          "recruiting platform",
          "über uns",
          "unternehmen",
          "mission",
        ]}
        url="https://higherd.de/about"
      />
      <section className="container py-10">
        <h1 className="text-2xl font-bold">{t("about.title")}</h1>
        <p className="mt-2 text-gray-600">{t("about.subtitle")}</p>
      </section>
    </>
  );
}
