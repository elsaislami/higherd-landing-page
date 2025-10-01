import { useTranslation } from "react-i18next";
import SEO from "../components/SEO.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import companiespage from "../assets/companiespage.png";
import JobListingsSection from "../components/sections/JobListingsSection.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import AdditionalServicesSection from "../components/sections/AdditionalServicesSection.jsx";
import PartnersSection from "../components/sections/PartnersSection.jsx";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import FAQSection from "../components/sections/FAQSection.jsx";

export default function Students() {
  const { t } = useTranslation("pages");
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
  const faqs = t("students.faqs", { returnObjects: true });

  const openBookingURL = () => {
    const bookingURL =
      import.meta.env.VITE_BOOKING_URL ||
      "https://outlook.office.com/book/HigherdSolutionsYou@higherd.de/?ismsaljsauthenabled=true";
    window.open(bookingURL);
  };

  // Load job listings from translations
  const jobListings = t("students.jobListings", { returnObjects: true });

  // Use new students.services array for AdditionalServicesSection
  const additionalServices = t("students.services", { returnObjects: true });

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
      {/* Hero Section */}
      <HeroSection
        heroImage={companiespage}
        heroImageAlt={t("students.hero.imageAlt")}
        title={t("students.hero.title")}
        subtitle={t("students.hero.subtitle")}
        buttons={[
          {
            text: t("students.hero.bookaDemo"),
            variant: "primary",
            onClick: openBookingURL,
          },
        ]}
      />

      {/* Job Listings Section */}
      <JobListingsSection jobListings={jobListings} />

      {/* Call to Action Section */}
      <CTASection
        title={t("students.cta.title")}
        buttonText={t("students.cta.button")}
        variant="white"
      />

      {/* Additional Services Section */}
      <AdditionalServicesSection
        services={additionalServices}
        title={t("students.additionalServicesTitle")}
        description={t("students.additionalServicesDesc")}
      />

      {/* Partners Section */}
      <PartnersSection title={t("students.partnersTitle")} logos={logos} />
      {/* FAQ Section */}
      <FAQSection faqs={faqs} title={t("students.faqTitle")} />
    </>
  );
}
