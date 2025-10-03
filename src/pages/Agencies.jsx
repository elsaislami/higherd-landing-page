import { useTranslation } from "react-i18next";
import { openBookingURL } from "../utils/navigation";
import SEO from "../components/SEO.jsx";
import { recrutImg, agenciesImg } from "../assets/images";
import HeroSection from "../components/sections/HeroSection.jsx";
import SectionHeader from "../components/sections/SectionHeader.jsx";
import EmployerPricingSection from "../components/sections/EmployerPricingSection.jsx";

import CTASection from "../components/sections/CTASection.jsx";
import SpecialtiesSection from "../components/sections/SpecialtiesSection.jsx";
import FAQSection from "../components/sections/FAQSection.jsx";
import PartnersSection from "../components/sections/PartnersSection.jsx";
import { logos } from "../assets/logos";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_URL,
  DEFAULT_APP_NAME,
} from "../utils/seoDefaults";

// Agencies page does not accept props
export default function Agencies() {
  const { t } = useTranslation(["pages", "common"]);
  const faqs = t("agencies.faq.items", { returnObjects: true });
  return (
    <div className="grid gap-8 sm:gap-12 lg:gap-16">
      <SEO
        title={`${t("agencies.title")} - ${DEFAULT_APP_NAME}`}
        description={t("agencies.subtitle")}
        keywords={DEFAULT_KEYWORDS}
        url={DEFAULT_URL + "agencies"}
      />
      {/* Hero Section */}
      <HeroSection
        heroImage={recrutImg}
        heroImageAlt={t("agencies.images.heroAlt")}
        title={t("agencies.title")}
        subtitle={t("agencies.subtitle")}
        buttons={[
          {
            text: t("agencies.bookaDemo"),
            variant: "primary",
            onClick: openBookingURL,
          },
        ]}
      />
      {/* Solutions Header */}
      <SectionHeader
        title={t("agencies.solutionsTitle")}
        description={t("agencies.solutionsDesc")}
      />

      {/* Pricing Sections */}
      <section className="container mx-auto my-12 sm:my-16 lg:my-20 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* Employers Pricing */}
        <EmployerPricingSection
          image={agenciesImg}
          imageAlt={t("agencies.images.employersAlt")}
          onBookDemo={openBookingURL}
        />
      </section>
      {/* Call to Action Section */}
      <CTASection
        title={t("agencies.plansCTA.title")}
        buttonText={t("agencies.plansCTA.button")}
        subtitle={t("agencies.plansCTA.subtitle")}
        variant="white"
      />
      {/* Specialties Section */}
      <SpecialtiesSection
        pageKey="agencies"
        buttonText={t("agencies.specialties.buttonText")}
        buttonLink={() => openBookingURL()}
      />
      {/* Partners Section */}
      <PartnersSection title={t("agencies.partnersTitle")} />
      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </div>
  );
}
