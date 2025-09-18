import { useEffect } from "react";

export default function LocalBusinessSchema() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://higherd.de/#organization",
      name: "Higherd Solutions",
      url: "https://higherd.de",
      logo: "https://higherd.de/logo.svg",
      image: "https://higherd.de/assets/homepage.png",
      description:
        "Smart recruiting platform for SMEs, enterprises, agencies and candidates in Germany. Specialized in IT, Engineering, and Life Sciences recruitment.",
      priceRange: "€249-€1500",
      telephone: "+49",
      email: "HigherdSolutionsYou@higherd.de",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressCountry: "DE",
        addressLocality: "Germany",
      },
      areaServed: {
        "@type": "Country",
        name: "Germany",
      },
      serviceArea: {
        "@type": "Country",
        name: "Germany",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Recruiting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Core Recruiting Package",
              description: "For smaller teams and basic needs",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Premium Recruiting Package",
              description: "For larger teams with advanced needs",
            },
          },
        ],
      },
      knowsAbout: [
        "IT Recruiting",
        "Engineering Recruitment",
        "Life Sciences Hiring",
        "SME Recruiting",
        "Enterprise Hiring",
        "Germany Recruitment",
      ],
      sameAs: ["https://linkedin.com/company/higherd-solutions"],
    };

    // Remove existing local business structured data
    const existingScript = document.querySelector(
      'script[data-schema="localbusiness"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema", "localbusiness");
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector(
        'script[data-schema="localbusiness"]'
      );
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}
