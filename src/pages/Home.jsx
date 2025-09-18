import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button.jsx";
import Box from "../components/ui/Box.jsx";
import SEO from "../components/SEO.jsx";
import PricingStructuredData from "../components/PricingStructuredData.jsx";
import FAQStructuredData from "../components/FAQStructuredData.jsx";
import LocalBusinessSchema from "../components/LocalBusinessSchema.jsx";
import { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = t("home.faq.items", { returnObjects: true });
  // add this near your imports inside the component (top of Home function)
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
      <section className="container  my-20" role="banner">
        <div className="relative px-6">
          {/* Irregular Blob Background (SVG) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 z-0 opacity-40 pointer-events-none"
            aria-hidden="true"
          >
            <svg
              width="600"
              height="600"
              viewBox="0 0 600 600"
              xmlns="http://www.w3.org/2000/svg"
              className="blur-[100px]"
            >
              <g transform="translate(300,300)">
                <path
                  d="M120,-160C160,-120,200,-80,200,-40C200,0,160,40,120,80C80,120,40,160,0,160C-40,160,-80,120,-120,80C-160,40,-200,0,-200,-40C-200,-80,-160,-120,-120,-160C-80,-200,-40,-240,0,-240C40,-240,80,-200,120,-160Z"
                  fill="#4500A8"
                />
              </g>
            </svg>
          </div>

          {/* Foreground Content */}
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between relative z-10">
            <header>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t("home.title")}
              </h1>
              <p className="mt-3 text-gray-600">{t("home.subtitle")}</p>
              <nav
                className="mt-6 flex justify-center gap-3"
                aria-label="Primary actions"
              >
                <Button variant="outline">{t("common:cta.contactUs")}</Button>
                <Button variant="primary" onClick={openBookingURL}>
                  {t("home.bookaDemo")}
                </Button>
              </nav>
            </header>

            <figure className="rounded-lg overflow-hidden">
              <img
                src={homepageImg}
                alt={t("home.images.heroAlt")}
                loading="eager"
                width="600"
                height="400"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* section 2  */}

      <section className="container  my-20">
        <div className=" text-center px-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("home.solutionsTitle")}
          </h1>
          <p className="mt-3 text-gray-600 px-4">{t("home.solutionsDesc")}</p>
        </div>
      </section>

      {/* section3  */}

      <section className="text-center my-20 py-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl  mb-6">
          {t("home.partnersTitle")}
        </h1>
        <div className="p-10 bg-[#4500A8] flex justify-around flex-wrap gap-4 text-gray-300">
          {logos.map((logo, i) => (
            <img key={i} src={logo} alt={`Partner ${i + 1}`} className="h-8" />
          ))}
        </div>
      </section>

      {/* Pricing Sections - based on image */}

      <section className="container my-20 space-y-24">
        <div
          className="relative flex flex-col-reverse lg:flex-row items-center gap-10 p-10  overflow-hidden min-h-[400px]"
          id="for-companies"
        >
          <div className="absolute rounded-xl top-0 right-0 w-[70%] h-full bg-purple-50 z-0" />

          <img
            src={employessImg}
            alt={t("home.images.employersAlt")}
            className="w-full lg:w-1/2 relative z-10"
            loading="lazy"
            width="500"
            height="400"
          />

          {/* Text content */}
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-2xl font-bold mb-4">
              {t("home.pricing.employers.title")}
            </h2>
            <div className="w-full flex flex-col md:flex-row gap-4">
              {/* Core Plan */}
              <div className="flex-1 rounded-xl border border-gray-200 p-5 shadow-sm relative bg-white">
                <h3 className="text-sm font-semibold mb-0.5">
                  {t("home.pricing.employers.corePlanName")}
                </h3>
                <p className="text-gray-500 mb-1 text-xs">
                  {t("home.pricing.employers.coreplanTitle")}
                </p>
                <p className="text-lg font-bold mb-2">
                  {t("home.pricing.employers.corePrice")}
                  <span className="text-xs font-normal">
                    {t("home.pricing.employers.userMonth")}
                  </span>
                </p>

                <ul className="space-y-2 mb-3 text-xs">
                  {t("home.pricing.employers.coreFeatures", {
                    returnObjects: true,
                  }).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full py-2 text-xs"
                  variant="outline"
                  onClick={openBookingURL}
                >
                  {t("home.bookaDemo")}
                </Button>
              </div>

              {/* Premium Plan */}
              <div className="flex-1 rounded-xl border border-purple-300 p-5 shadow-md relative bg-white">
                <div className="absolute top-0 right-4 -translate-y-1/2 bg-purple-700 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  {t("home.pricing.employers.bestPlan")}
                </div>

                <h3 className="text-sm font-semibold mb-0.5">
                  {t("home.pricing.employers.premiumPlanName")}
                </h3>
                <p className="text-gray-500 mb-1 text-xs">
                  {t("home.pricing.employers.premiumDesc")}
                </p>
                <p className="text-lg font-bold mb-2 text-purple-700">
                  {t("home.pricing.employers.premiumPriceValue")}
                  <span className="text-xs font-normal text-gray-600">
                    {t("home.pricing.employers.fromMonthly")}
                  </span>
                </p>

                <ul className="space-y-2 mb-3 text-xs">
                  {t("home.pricing.employers.premiumFeatures", {
                    returnObjects: true,
                  }).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full py-2 text-xs bg-purple-700 hover:bg-purple-800"
                  onClick={openBookingURL}
                >
                  {t("home.bookaDemo")}
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                {t("home.pricing.employers.commissionBased")} <br />
                <a
                  href="#"
                  className="text-purple-700 font-semibold hover:underline cursor-pointer"
                >
                  {t("home.pricing.employers.contactSales")}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Personalagenturen */}
        <div
          className="relative flex flex-col-reverse lg:flex-row items-center gap-10 p-10  overflow-hidden min-h-[400px]"
          id="for-agencies"
        >
          <div className="absolute rounded-xl top-0 left-0 w-[70%] h-full bg-purple-50 z-0" />
          <div className="lg:w-1/2 z-10">
            <h2 className="text-2xl font-bold mb-4">
              {t("home.pricing.agencies.title")}
            </h2>
            <ul className="text-gray-600 list-disc list-inside mb-6 space-y-2">
              {t("home.pricing.agencies.list", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
            <p className="text-gray-800 font-semibold mb-2">
              {t("home.pricing.agencies.price")}
            </p>
            <Button variant="primary" onClick={openBookingURL}>
              {t("home.bookaDemo")}
            </Button>
          </div>
          <img
            src={recrutImg}
            alt={t("home.images.agenciesAlt")}
            className="w-full lg:w-1/2 relative z-10"
            loading="lazy"
            width="500"
            height="400"
          />
        </div>

        {/* Kandidaten */}
        <div
          className="relative flex flex-col-reverse lg:flex-row items-center gap-10 p-10  overflow-hidden min-h-[400px]"
          id="for-candidates"
        >
          <div className="absolute rounded-xl top-0 right-0 w-[70%] h-full bg-purple-50 z-0" />
          <img
            src={jopsImg}
            alt={t("home.images.candidatesAlt")}
            className="w-full lg:w-1/2 relative z-10"
            loading="lazy"
            width="500"
            height="400"
          />
          <div className="lg:w-1/2  z-10">
            <h2 className="text-2xl font-bold mb-4">
              {t("home.pricing.candidates.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("home.pricing.candidates.desc")}
            </p>
            <p className="text-gray-800 font-semibold mb-6">
              <strong>{t("home.pricing.candidates.price")}</strong>
            </p>
            <Button variant="primary" onClick={openBookingURL}>
              {t("home.bookaDemo")}
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-[#4500A8]  py-16 text-center  text-white ">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex justify-center mx-auto w-full">
          {t("home.plansCTA.title")}
        </h2>
        <Button variant="white">{t("home.plansCTA.button")}</Button>
      </section>
      <section className="container my-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="relative flex flex-col-reverse lg:flex-row items-center gap-10 p-10  overflow-hidden min-h-[400px]">
          <div className="absolute rounded-xl top-0 right-0 w-[40%] h-full bg-purple-50 z-0" />
          <div className="lg:w-1/2 z-10">
            <h2 className="text-2xl font-bold mb-4">
              {t("home.specialties.title")}
            </h2>
            <p className="text-gray-600">{t("home.specialties.desc")}</p>
          </div>
          <div className="lg:w-1/2 space-y-4 relative z-10">
            {t("home.specialties.items", { returnObjects: true }).map(
              (item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white  shadow-xl rounded-lg"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <section className="container my-20 flex flex-col items-center justify-center">
        <FAQStructuredData faqs={faqs} />
        <h2 className="text-2xl font-bold mb-6">{t("home.faq.title")}</h2>
        <div className="space-y-4 w-full max-w-4xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md p-6 cursor-pointer w-full"
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg">{faq.q}</p>
                <span className="text-xl font-bold">
                  {index === activeIndex ? "−" : "+"}
                </span>
              </div>
              {index === activeIndex && (
                <p className="mt-4 text-base text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
