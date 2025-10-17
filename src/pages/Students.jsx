import { useTranslation } from "react-i18next";
import { openBookingURL } from "../utils/navigation";
import SEO from "../components/SEO.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import { companiespage } from "../assets/images";
import JobListingsSection from "../components/sections/JobListingsSection.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import AdditionalServicesSection from "../components/sections/AdditionalServicesSection.jsx";
import PartnersSection from "../components/sections/PartnersSection.jsx";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_URL,
  DEFAULT_APP_NAME,
} from "../utils/seoDefaults";
import FAQSection from "../components/sections/FAQSection.jsx";

// Students page does not accept props
export default function Students() {
  const { t } = useTranslation("pages");
  const faqs = t("students.faqs", { returnObjects: true });

  // Load job listings from translations
  const jobListings = t("students.jobListings", { returnObjects: true });

  // Use new students.services array for AdditionalServicesSection
  const additionalServices = t("students.services", { returnObjects: true });

  return (
    <div className="w-full overflow-x-hidden">
      <div className="grid gap-8 sm:gap-12 lg:gap-16">
        <SEO
          title={`${t("students.title")} - ${DEFAULT_APP_NAME}`}
          description={t("students.subtitle")}
          keywords={DEFAULT_KEYWORDS}
          url={DEFAULT_URL + "students"}
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
          subtitle={t("students.cta.subtitle")}
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
        <PartnersSection title={t("students.partnersTitle")} />
        {/* FAQ Section */}
        <FAQSection faqs={faqs} title={t("students.faqTitle")} />
      </div>
    </div>
  );
}
