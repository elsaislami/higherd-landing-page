import { useTranslation } from "react-i18next";
import { openBookingURL } from "../utils/navigation";
import SEO from "../components/SEO.jsx";
import { companiespage, employessImg } from "../assets/images";
import HeroSection from "../components/sections/HeroSection.jsx";
import SectionHeader from "../components/sections/SectionHeader.jsx";
import EmployerPricingSection from "../components/sections/EmployerPricingSection.jsx";

import CTASection from "../components/sections/CTASection.jsx";
import SpecialtiesSection from "../components/sections/SpecialtiesSection.jsx";
import FAQSection from "../components/sections/FAQSection.jsx";
import PartnersSection from "../components/sections/PartnersSection.jsx";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_URL,
  DEFAULT_APP_NAME,
} from "../utils/seoDefaults";

// Companies page does not accept props
export default function Companies() {
  const { t } = useTranslation(["pages", "common"]);
  const faqs = t("companies.faq.items", { returnObjects: true });
  return (
    <div className="grid gap-8 sm:gap-12 lg:gap-16">
      <SEO
        title={`${t("companies.title")} - ${DEFAULT_APP_NAME}`}
        description={t("companies.subtitle")}
        keywords={DEFAULT_KEYWORDS}
        url={DEFAULT_URL + "companies"}
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

      {/* Pricing Sections */}
      <section className="container mx-auto my-12 sm:my-16 lg:my-20 space-y-16 sm:space-y-20 lg:space-y-24">
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
      {/* Partners Section */}
      <PartnersSection title={t("companies.partnersTitle")} />
      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </div>
  );
}
