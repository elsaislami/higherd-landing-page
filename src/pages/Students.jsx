import { useTranslation } from "react-i18next";
import SEO from "../components/SEO.jsx";

export default function Students() {
  const { t } = useTranslation("pages");
  return (
    <>
      <SEO
        title={`${t("students.title")} - Higherd Solutions`}
        description={t("students.subtitle")}
        keywords={[
          "student jobs",
          "internships",
          "graduate programs",
          "entry level",
          "studenten",
          "praktikum",
          "berufseinsteiger",
        ]}
        url="https://higherd.de/students"
      />
      <section className="container py-10">
        <h1 className="text-2xl font-bold">{t("students.title")}</h1>
        <p className="mt-2 text-gray-600">{t("students.subtitle")}</p>
      </section>
    </>
  );
}
