import { useTranslation } from "react-i18next";
import SEO from "../components/SEO.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import SpecialtiesSection from "../components/sections/SpecialtiesSection.jsx";
import AdditionalServicesSection from "../components/sections/AdditionalServicesSection.jsx";
import PartnersSection from "../components/sections/PartnersSection.jsx";
import teamImg from "../assets/teamImg.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import aboutPhoto1 from "../assets/aboutPhoto1.jpg";
import aboutPhoto2 from "../assets/aboutPhoto2.jpg";
import aboutPhoto3 from "../assets/aboutPhoto3.jpg";

export default function About() {
  const { t } = useTranslation("pages");
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  const openBookingURL = () => {
    const bookingURL =
      import.meta.env.VITE_BOOKING_URL ||
      "https://outlook.office.com/book/HigherdSolutionsYou@higherd.de/?ismsaljsauthenabled=true";
    window.open(bookingURL);
  };

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
      image: aboutPhoto3,
      title: t("about.additionalServices.3.title"),
      description: t("about.additionalServices.3.description"),
    },
  ];

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
      {/* Hero Section */}
      <HeroSection
        heroImage={teamImg}
        heroImageAlt={t("about.hero.imageAlt")}
        title={t("about.hero.title")}
        subtitle={t("about.hero.subtitle")}
        buttons={[
          {
            text: t("about.hero.bookaDemo"),
            variant: "primary",
            onClick: openBookingURL,
          },
        ]}
      />
      {/* Specialties Section */}
      <SpecialtiesSection
        title={t("about.specialties.title")}
        description={t("about.specialties.desc")}
        specialties={t("about.specialties.items", { returnObjects: true })}
      />

      {/* Additional Services Section */}
      <AdditionalServicesSection
        services={services}
        title={t("about.additionalServicesTitle")}
        description={t("about.additionalServicesDesc")}
      />

      {/* Partners Section */}
      <PartnersSection title={t("about.partnersTitle")} logos={logos} />
    </>
  );
}
