import { useTranslation } from "react-i18next";
import logo from "../../assets/brand-logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation(["pages", "common"]);

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
                className="bg-white text-black font-semibold px-5 py-3 rounded-r-md hover:bg-gray-200 cursor-pointer"
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
                <a
                  href="https://www.linkedin.com/company/higherding"
                  aria-label="LinkedIn (opens in new tab)"
                  title="Visit our LinkedIn (opens in new tab)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 hover:text-purple-500" />
                </a>
                <a
                  href="https://www.facebook.com/p/Higherd-Solutions-61559645822112/"
                  aria-label="Facebook (opens in new tab)"
                  title="Visit our Facebook (opens in new tab)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-6 h-6 hover:text-purple-500" />
                </a>
                <a
                  href="https://www.instagram.com/higherd_solutions"
                  aria-label="Instagram (opens in new tab)"
                  title="Visit our Instagram (opens in new tab)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                  <button
                    onClick={() => {
                      window.location.href = "/";
                    }}
                    className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                  >
                    {t("home.newsletter.productLinks.homepage")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      window.location.href = "/about";
                    }}
                    className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                  >
                    {t("home.newsletter.productLinks.about")}
                  </button>
                </li>
                {/* <li>
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
                  <button
                    onClick={() => {
                      window.location.href = "/companies";
                    }}
                    className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                  >
                    {t("home.newsletter.solutionsLinks.companies")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      window.location.href = "/agencies";
                    }}
                    className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                  >
                    {t("home.newsletter.solutionsLinks.agencies")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      window.location.href = "/candidates";
                    }}
                    className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                  >
                    {t("home.newsletter.solutionsLinks.candidates")}
                  </button>
                </li>
                <li>
                  {/* <Link
                    to="/students"
                    className="hover:text-gray-300 transition-colors duration-200"
                  >
                    {t("home.newsletter.solutionsLinks.students")}
                  </Link> */}

                  <button
                    onClick={() => {
                      window.location.href = "/students";
                    }}
                    className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                  >
                    {t("home.newsletter.solutionsLinks.students")}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Legal links */}
      <div className="mt-8 text-center text-xs text-white/70 space-x-4">
        <button
          onClick={() => {
            window.location.href = "/imprint";
          }}
          className="hover:underline cursor-pointer"
        >
          Imprint
        </button>
        <span>|</span>
        <button
          onClick={() => {
            window.location.href = "/privacy-terms";
          }}
          className="hover:underline cursor-pointer"
        >
          Privacy & Terms
        </button>
      </div>

      {/* Hidden signature */}
      <div className="text-right mt-2 mr-44">
        <p className="text-[10px] text-[#4500A8] opacity-20">
          Crafted by{" "}
          <a
            href="http://linkedin.com/in/elsaislami"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4500A8] opacity-20 hover:opacity-40 transition-opacity"
          >
            ELSA ISLAMI
          </a>
        </p>
      </div>
    </footer>
  );
}
