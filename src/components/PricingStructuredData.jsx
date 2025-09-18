import { useEffect } from "react";

export default function PricingStructuredData({ plans }) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Higherd Recruiting Solutions",
      description:
        "Smart recruiting platform for SMEs, enterprises, agencies and candidates",
      brand: {
        "@type": "Brand",
        name: "Higherd Solutions",
      },
      offers: plans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        description: plan.description,
        price: plan.price,
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: plan.price,
          priceCurrency: "EUR",
          billingIncrement: plan.billingPeriod || "monthly",
        },
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "Higherd Solutions",
        },
      })),
    };

    // Remove existing structured data for pricing
    const existingScript = document.querySelector(
      'script[data-schema="pricing"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema", "pricing");
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector(
        'script[data-schema="pricing"]'
      );
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [plans]);

  return null;
}
