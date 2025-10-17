import { useTranslation } from "react-i18next";
import { openBookingURL } from "../utils/navigation";
import SEO from "../components/SEO.jsx";
import { companiespage, candidatesImg } from "../assets/images";
import HeroSection from "../components/sections/HeroSection.jsx";
import SectionHeader from "../components/sections/SectionHeader.jsx";

import CTASection from "../components/sections/CTASection.jsx";
import PartnersSection from "../components/sections/PartnersSection.jsx";
import { logos } from "../assets/logos";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_URL,
  DEFAULT_APP_NAME,
} from "../utils/seoDefaults";
import JobListingsSection from "../components/sections/JobListingsSection.jsx";
import AdditionalServicesSection from "../components/sections/AdditionalServicesSection.jsx";
import FAQSection from "../components/sections/FAQSection.jsx";
import ServiceSection from "../components/sections/ServiceSection.jsx";

// Candidates page does not accept props
export default function Candidates() {
  const { t } = useTranslation("pages");
  const faqs = t("home.faq.items", { returnObjects: true });

  // Load job listings from translations
  const jobListings = t("candidates.jobListings", { returnObjects: true });
  const additionalServices = t("candidates.additionalServices", {
    returnObjects: true,
  });

  return (
    <div className="w-full overflow-x-hidden">
      <div className="grid gap-8 sm:gap-12 lg:gap-16">
        <SEO
          title={`${t("candidates.title")} - ${DEFAULT_APP_NAME}`}
          description={t("candidates.subtitle")}
          keywords={DEFAULT_KEYWORDS}
          url={DEFAULT_URL + "candidates"}
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

        {/* Pricing Sections */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-16 lg:my-20 space-y-16 sm:space-y-20 lg:space-y-24">
          {/* Candidates Section */}
          <ServiceSection
            id="for-candidates"
            title={t("candidates.pricing.title")}
            description={t("candidates.pricing.desc")}
            price={t("candidates.pricing.price")}
            image={candidatesImg}
            imageAlt={t("candidates.images.candidatesAlt")}
            imagePosition="left"
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
        <AdditionalServicesSection
          services={additionalServices}
          title={t("candidates.additionalServicesTitle")}
          description={t("candidates.additionalServicesDesc")}
        />

        {/* Partners Section */}
        <PartnersSection title={t("candidates.partners.title")} />
        {/* FAQ Section */}
        <FAQSection faqs={faqs} />
      </div>
    </div>
  );
}
