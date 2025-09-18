import { useTranslation } from "react-i18next";
import logo from "../../assets/brand-logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation(["pages", "common"]);

  // Helper function for smooth scrolling
  const handleSmoothScroll = (e, targetSelector = null) => {
    e.preventDefault();

    if (targetSelector) {
      // Scroll to specific element
      const element = document.querySelector(targetSelector);
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#4500A8] to-purple-950 text-white py-14 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
          {/* Left section */}
          <div className="max-w-lg">
            <h3 className="text-3xl font-bold mb-4 leading-snug">
              {t("home.newsletter.heading")}
            </h3>
            <p className="text-base mb-6 leading-relaxed">
              {t("home.newsletter.description")}
            </p>

            {/* Newsletter form */}
            <form
              className="flex"
              onSubmit={(e) => {
                e.preventDefault();
              }}
              aria-label={t("home.newsletter.heading")}
            >
              <input
                type="email"
                required
                placeholder={t("home.newsletter.emailPlaceholder")}
                className="w-full rounded-l-md px-4 py-3 bg-white/10 border border-white/40 text-white placeholder-white/60 focus:outline-none focus:border-white/80 focus:bg-white/15 transition"
                aria-label={t("home.newsletter.emailPlaceholder")}
              />
              <button
                className="bg-white text-black font-semibold px-5 py-3 rounded-r-md hover:bg-gray-200"
                type="submit"
              >
                {t("home.newsletter.subscribeButton")}
              </button>
            </form>

            {/* Logo & Social icons */}
            <div className="mt-10  items-center gap-5">
              <img
                src={logo}
                alt={t("brand", { ns: "common" })}
                className="h-8"
              />

              <div className="flex gap-4 text-2xl mt-5">
                <a href="#" aria-label="linkedIn">
                  <Linkedin className="w-6 h-6 hover:text-purple-500" />
                </a>
                <a href="#" aria-label="Facebook">
                  <Facebook className="w-6 h-6 hover:text-purple-500" />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram className="w-6 h-6 hover:text-purple-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="grid grid-cols-2 gap-10 sm:gap-14 text-sm mt-8 lg:mt-0 text-center lg:text-left">
            <div>
              <h4 className="font-semibold mb-3 uppercase tracking-wide">
                {t("home.newsletter.productHeading")}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 transition-colors duration-200"
                    onClick={(e) => handleSmoothScroll(e)}
                  >
                    {t("home.newsletter.productLinks.homepage")}
                  </a>
                </li>
                {/* <li>
                  <a href="#">{t("home.newsletter.productLinks.about")}</a>
                </li>
                <li>
                  <a href="#">{t("home.newsletter.productLinks.blog")}</a>
                </li>
                <li>
                  <a href="#">{t("home.newsletter.productLinks.contact")}</a>
                </li> */}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 uppercase tracking-wide">
                {t("home.newsletter.solutionsHeading")}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#for-companies"
                    className="hover:text-gray-300 transition-colors duration-200"
                    onClick={(e) => handleSmoothScroll(e, "#for-companies")}
                  >
                    {t("home.newsletter.solutionsLinks.companies")}
                  </a>
                </li>
                <li>
                  <a
                    href="#for-agencies"
                    className="hover:text-gray-300 transition-colors duration-200"
                    onClick={(e) => handleSmoothScroll(e, "#for-agencies")}
                  >
                    {t("home.newsletter.solutionsLinks.agencies")}
                  </a>
                </li>
                <li>
                  <a
                    href="#for-candidates"
                    className="hover:text-gray-300 transition-colors duration-200"
                    onClick={(e) => handleSmoothScroll(e, "#for-candidates")}
                  >
                    {t("home.newsletter.solutionsLinks.candidates")}
                  </a>
                </li>
                {/* <li>
                  <a href="#">{t("home.newsletter.solutionsLinks.students")}</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
