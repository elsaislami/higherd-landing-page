import { useTranslation } from "react-i18next";
import { openBookingURL } from "../utils/navigation";
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
import {
  employessImg,
  recrutImg,
  jopsImg,
  homepageImg,
} from "../assets/images";
import { logos } from "../assets/logos";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_IMAGE,
  DEFAULT_URL,
  DEFAULT_APP_NAME,
} from "../utils/seoDefaults";

// Home page does not accept props
export default function Home() {
  const { t } = useTranslation(["pages", "common"]);

  const faqs = t("home.faq.items", { returnObjects: true });

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

  return (
    <div className="grid gap-8 sm:gap-12 lg:gap-16">
      <SEO
        title={`${t("home.title")} - ${
          import.meta.env.VITE_APP_NAME || DEFAULT_APP_NAME
        }`}
        description={t("home.subtitle")}
        keywords={DEFAULT_KEYWORDS}
        url={import.meta.env.VITE_APP_URL || DEFAULT_URL}
        image={DEFAULT_IMAGE}
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
      <PartnersSection title={t("home.partnersTitle")} />

      {/* Pricing Sections */}
      <section className="container mx-auto my-12 sm:my-16 lg:my-20 space-y-16 sm:space-y-20 lg:space-y-24">
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
