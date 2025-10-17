import { useTranslation } from "react-i18next";
import SEO from "../components/SEO.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import SpecialtiesSection from "../components/sections/SpecialtiesSection.jsx";
import AdditionalServicesSection from "../components/sections/AdditionalServicesSection.jsx";
import PartnersSection from "../components/sections/PartnersSection.jsx";
import {
  teamImg,
  aboutPhoto1,
  aboutPhoto2,
  aboutPhoto3,
  aboutPhoto4,
} from "../assets/images";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_URL,
  DEFAULT_APP_NAME,
} from "../utils/seoDefaults";

// About page does not accept props
export default function About() {
  const { t } = useTranslation("pages");

  // Define services array with images and translation keys
  const services = [
    {
      image: aboutPhoto1,
      title: t("about.additionalServices.0.title"),
      description: t("about.additionalServices.0.description"),
    },
    {
      image: aboutPhoto2,
      title: t("about.additionalServices.1.title"),
      description: t("about.additionalServices.1.description"),
    },
    {
      image: aboutPhoto3,
      title: t("about.additionalServices.2.title"),
      description: t("about.additionalServices.2.description"),
    },
    {
      image: aboutPhoto4,
      title: t("about.additionalServices.3.title"),
      description: t("about.additionalServices.3.description"),
    },
  ];

  return (
    <div className="grid gap-8 sm:gap-12 lg:gap-16">
      <SEO
        title={`${t("about.title")} - ${DEFAULT_APP_NAME}`}
        description={t("about.subtitle")}
        keywords={DEFAULT_KEYWORDS}
        url={DEFAULT_URL + "about"}
      />
      {/* Hero Section */}
      <HeroSection
        heroImage={teamImg}
        heroImageAlt={t("about.hero.imageAlt")}
        title={t("about.hero.title")}
        subtitle={t("about.hero.subtitle")}
      />
      {/* Specialties Section */}
      <SpecialtiesSection
        pageKey="about"
        title={t("about.specialties.title")}
        description={t("about.specialties.desc")}
      />

      {/* Partners Section */}
      <PartnersSection title={t("about.partnersTitle")} />

      {/* Additional Services Section */}
      <AdditionalServicesSection
        services={services}
        title={t("about.teamTitle")}
        description={t("about.teamDesc")}
      />
    </div>
  );
}
