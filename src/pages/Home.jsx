import { useTranslation } from "react-i18next";
import SEO from "../components/SEO.jsx";
import PricingStructuredData from "../components/PricingStructuredData.jsx";
import LocalBusinessSchema from "../components/LocalBusinessSchema.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import SectionHeader from "../components/sections/SectionHeader.jsx";
import PartnersSection from "../components/sections/PartnersSection.jsx";
import EmployerPricingSection from "../components/sections/EmployerPricingSection.jsx";
import ServiceSection from "../components/sections/ServiceSection.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import SpecialtiesSection from "../components/sections/SpecialtiesSection.jsx";
import FAQSection from "../components/sections/FAQSection.jsx";
import employessImg from "../assets/employessImg.png";
import recrutImg from "../assets/recrutImg.png";
import jopsImg from "../assets/jobs.png";
import homepageImg from "../assets/homepage.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";

export default function Home() {
  const { t } = useTranslation(["pages", "common"]);

  const faqs = t("home.faq.items", { returnObjects: true });
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  // Pricing data for structured data
  const pricingPlans = [
    {
      name: t("home.pricing.employers.corePlanName"),
      description: t("home.pricing.employers.coreplanTitle"),
      price: "249",
      billingPeriod: "monthly",
    },
    {
      name: t("home.pricing.employers.premiumPlanName"),
      description: t("home.pricing.employers.premiumDesc"),
      price: "1500",
      billingPeriod: "monthly",
    },
  ];

  // Helper function for opening booking URL
  const openBookingURL = () => {
    const bookingURL =
      import.meta.env.VITE_BOOKING_URL ||
      "https://outlook.office.com/book/HigherdSolutionsYou@higherd.de/?ismsaljsauthenabled=true";
    window.open(bookingURL);
  };
  return (
    <div>
      <SEO
        title={`${t("home.title")} - ${
          import.meta.env.VITE_APP_NAME || "Higherd Solutions"
        }`}
        description={t("home.subtitle")}
        keywords={[
          "recruiting",
          "hiring",
          "talent acquisition",
          "SME recruiting",
          "enterprise hiring",
          "Germany recruitment",
          "job matching",
          "candidates",
          "personalvermittlung",
          "stellenvermittlung",
          "fachkräfte",
        ]}
        url={import.meta.env.VITE_APP_URL || "https://higherd.de/"}
        image="/assets/homepage.png"
      />
      <PricingStructuredData plans={pricingPlans} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <HeroSection
        heroImage={homepageImg}
        heroImageAlt={t("home.images.heroAlt")}
        title={t("home.title")}
        subtitle={t("home.subtitle")}
        buttons={[
          { text: t("common:cta.contactUs"), variant: "outline" },
          {
            text: t("home.bookaDemo"),
            variant: "primary",
            onClick: openBookingURL,
          },
        ]}
      />

      {/* Solutions Header */}
      <SectionHeader
        title={t("home.solutionsTitle")}
        description={t("home.solutionsDesc")}
      />

      {/* Partners Section */}
      <PartnersSection title={t("home.partnersTitle")} logos={logos} />

      {/* Pricing Sections */}
      <section className="container my-20 space-y-24">
        {/* Employers Pricing */}
        <EmployerPricingSection
          image={employessImg}
          imageAlt={t("home.images.employersAlt")}
          onBookDemo={openBookingURL}
        />

        {/* Agencies Section */}
        <ServiceSection
          id="for-agencies"
          title={t("home.pricing.agencies.title")}
          features={t("home.pricing.agencies.list", { returnObjects: true })}
          price={t("home.pricing.agencies.price")}
          image={recrutImg}
          imageAlt={t("home.images.agenciesAlt")}
          imagePosition="right"
          onBookDemo={openBookingURL}
        />

        {/* Candidates Section */}
        <ServiceSection
          id="for-candidates"
          title={t("home.pricing.candidates.title")}
          description={t("home.pricing.candidates.desc")}
          price={t("home.pricing.candidates.price")}
          image={jopsImg}
          imageAlt={t("home.images.candidatesAlt")}
          imagePosition="left"
          onBookDemo={openBookingURL}
        />
      </section>

      {/* Call to Action Section */}
      <CTASection
        title={t("home.plansCTA.title")}
        buttonText={t("home.plansCTA.button")}
        variant="white"
      />

      {/* Specialties Section */}
      <SpecialtiesSection
        title={t("home.specialties.title")}
        description={t("home.specialties.desc")}
        specialties={t("home.specialties.items", { returnObjects: true })}
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </div>
  );
}
