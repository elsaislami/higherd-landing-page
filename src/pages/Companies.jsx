import { useTranslation } from "react-i18next";
import SEO from "../components/SEO.jsx";
import companiespage from "../assets/companiespage.png";
import HeroSection from "../components/sections/HeroSection.jsx";
import SectionHeader from "../components/sections/SectionHeader.jsx";
import EmployerPricingSection from "../components/sections/EmployerPricingSection.jsx";
import employessImg from "../assets/employessImg.png";
import CTASection from "../components/sections/CTASection.jsx";
import SpecialtiesSection from "../components/sections/SpecialtiesSection.jsx";
import FAQSection from "../components/sections/FAQSection.jsx";
import PartnersSection from "../components/sections/PartnersSection.jsx";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";

export default function Companies() {
  const { t } = useTranslation(["pages", "common"]);
  const faqs = t("home.faq.items", { returnObjects: true });
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
  // Helper function for opening booking URL
  const openBookingURL = () => {
    const bookingURL =
      import.meta.env.VITE_BOOKING_URL ||
      "https://outlook.office.com/book/HigherdSolutionsYou@higherd.de/?ismsaljsauthenabled=true";
    window.open(bookingURL);
  };
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
      {/* Hero Section */}
      <HeroSection
        heroImage={companiespage}
        heroImageAlt={t("companies.images.heroAlt")}
        title={t("companies.title")}
        subtitle={t("companies.subtitle")}
        buttons={[
          {
            text: t("companies.bookaDemo"),
            variant: "primary",
            onClick: openBookingURL,
          },
        ]}
      />
      {/* Solutions Header */}
      <SectionHeader
        title={t("companies.solutionsTitle")}
        description={t("companies.solutionsDesc")}
      />
      {/* Partners Section */}
      <PartnersSection logos={logos} />
      {/* Pricing Sections */}
      <section className="container my-20 space-y-24">
        {/* Employers Pricing */}
        <EmployerPricingSection
          image={employessImg}
          imageAlt={t("companies.images.employersAlt")}
          onBookDemo={openBookingURL}
        />
      </section>
      {/* Call to Action Section */}
      <CTASection
        title={t("companies.plansCTA.title")}
        buttonText={t("companies.plansCTA.button")}
        variant="white"
      />
      {/* Specialties Section */}
      <SpecialtiesSection
        pageKey="companies"
        buttonText={t("companies.specialties.buttonText")}
      />
      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </>
  );
}
