import { useTranslation } from "react-i18next";
import SEO from "../components/SEO.jsx";
import companiespage from "../assets/companiespage.png";
import HeroSection from "../components/sections/HeroSection.jsx";
import SectionHeader from "../components/sections/SectionHeader.jsx";
import EmployerPricingSection from "../components/sections/EmployerPricingSection.jsx";
import employessImg from "../assets/employessImg.png";
import CTASection from "../components/sections/CTASection.jsx";
import PartnersSection from "../components/sections/PartnersSection.jsx";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import JobListingsSection from "../components/sections/JobListingsSection.jsx";
import AdditionalServicesSection from "../components/sections/AdditionalServicesSection.jsx";

export default function Candidates() {
  const { t } = useTranslation("pages");
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
  const openBookingURL = () => {
    const bookingURL =
      import.meta.env.VITE_BOOKING_URL ||
      "https://outlook.office.com/book/HigherdSolutionsYou@higherd.de/?ismsaljsauthenabled=true";
    window.open(bookingURL);
  };

  const jobListings = [
    {
      title: "UX-UI-Designer",
      description:
        "Die Sicherung eines Vorstellungsgesprächs ist nur der Anfang. Unser Service zur Vorbereitung auf Vorstellungsgespräche vermittelt Ihnen die Fähigkeiten und das Selbstvertrauen, die Sie benötigen, um in Vorstellungsgesprächen hervorragende Leistungen zu erbringen. ",
      type: "Vollzeit",
      mode: "Fernbedienung",
    },
    {
      title: "Produktdesigner",
      description:
        "Die Sicherung eines Vorstellungsgesprächs ist nur der Anfang. Unser Service zur Vorbereitung auf Vorstellungsgespräche vermittelt Ihnen die Fähigkeiten und das Selbstvertrauen, die Sie benötigen, um in Vorstellungsgesprächen hervorragende Leistungen zu erbringen. ",
      type: "Vollzeit",
      mode: "Fernbedienung",
    },
    {
      title: "Software-Ingenieur",
      description:
        "Die Sicherung eines Vorstellungsgesprächs ist nur der Anfang. Unser Service zur Vorbereitung auf Vorstellungsgespräche vermittelt Ihnen die Fähigkeiten und das Selbstvertrauen, die Sie benötigen, um in Vorstellungsgesprächen hervorragende Leistungen zu erbringen. ",
      type: "Vollzeit",
      mode: "Fernbedienung",
    },
    {
      title: "Grafikdesigner",
      description:
        "Die Sicherung eines Vorstellungsgesprächs ist nur der Anfang. Unser Service zur Vorbereitung auf Vorstellungsgespräche vermittelt Ihnen die Fähigkeiten und das Selbstvertrauen, die Sie benötigen, um in Vorstellungsgesprächen hervorragende Leistungen zu erbringen. ",
      type: "Vollzeit",
      mode: "Fernbedienung",
    },
    {
      title: "Biotechnik",
      description:
        "Die Sicherung eines Vorstellungsgesprächs ist nur der Anfang. Unser Service zur Vorbereitung auf Vorstellungsgespräche vermittelt Ihnen die Fähigkeiten und das Selbstvertrauen, die Sie benötigen, um in Vorstellungsgesprächen hervorragende Leistungen zu erbringen. ",
      type: "Vollzeit",
      mode: "Fernbedienung",
    },
    {
      title: "QS-Ingenieur",
      description:
        "Die Sicherung eines Vorstellungsgesprächs ist nur der Anfang. Unser Service zur Vorbereitung auf Vorstellungsgespräche vermittelt Ihnen die Fähigkeiten und das Selbstvertrauen, die Sie benötigen, um in Vorstellungsgesprächen hervorragende Leistungen zu erbringen. ",
      type: "Vollzeit",
      mode: "Fernbedienung",
    },
  ];

  const additionalServices = [
    {
      title: t("candidates.preparationTitle"),
      description: t("candidates.preparationDescription"),
    },
    {
      title: t("candidates.visaTitle"),
      description: t("candidates.visaSupportDescription"),
    },
    {
      title: t("candidates.languageCoursesTitle"),
      description: t("candidates.languageCoursesDescription"),
    },
    {
      title: t("candidates.continuousSupportTitle"),
      description: t("candidates.continuousSupportDescription"),
    },
  ];

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
      {/* Hero Section */}
      <HeroSection
        heroImage={companiespage}
        heroImageAlt={t("candidates.images.heroAlt")}
        title={t("candidates.title")}
        subtitle={t("candidates.subtitle")}
        buttons={[
          {
            text: t("candidates.bookaDemo"),
            variant: "primary",
            onClick: openBookingURL,
          },
        ]}
      />
      {/* Solutions Header */}
      <SectionHeader
        title={t("candidates.solutionsTitle")}
        description={t("candidates.solutionsDesc")}
      />
      {/* Partners Section */}
      <PartnersSection logos={logos} />
      {/* Pricing Sections */}
      <section className="container my-20 space-y-24">
        {/* Employers Pricing */}
        <EmployerPricingSection
          image={employessImg}
          imageAlt={t("candidates.images.employersAlt")}
          onBookDemo={openBookingURL}
        />
      </section>
      {/* Call to Action Section */}
      <CTASection
        title={t("candidates.plansCTA.title")}
        buttonText={t("candidates.plansCTA.button")}
        variant="white"
      />
      {/* Job Listings Section */}
      <JobListingsSection jobListings={jobListings} />
      {/* Additional Services Section */}
      <AdditionalServicesSection services={additionalServices} />
    </>
  );
}
