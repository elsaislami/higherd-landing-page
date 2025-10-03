import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/brand-logo.png";

export default function Header() {
  const { t, i18n } = useTranslation("common");
  const [mobileOpen, setMobileOpen] = useState(false);

  const headerBg = "bg-white/70 backdrop-blur-md";

  const closeMobile = () => setMobileOpen(false);

  // Get current pathname to determine active state
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  // Helper function to get button classes based on active state
  const getNavButtonClass = (path) => {
    const isActive = currentPath === path;
    return `px-3 py-2 rounded-md text-sm cursor-pointer ${
      isActive
        ? "text-theme-primary font-medium"
        : "text-gray-700 hover:text-primary-700 font-normal"
    }`;
  };

  // Helper function for mobile navigation active states
  const getMobileNavButtonClass = (path) => {
    const isActive = currentPath === path;
    return `text-3xl font-semibold text-center py-3 px-6 rounded-lg transition-colors cursor-pointer ${
      isActive
        ? "text-white bg-white/10"
        : "text-white/90 hover:text-white hover:bg-white/5"
    }`;
  };

  const getMobileAboutButtonClass = (path) => {
    const isActive = currentPath === path;
    return `text-2xl font-medium text-center py-2 px-4 rounded-lg transition-colors mt-4 cursor-pointer ${
      isActive
        ? "text-white bg-white/10"
        : "text-white/80 hover:text-white hover:bg-white/5"
    }`;
  };

  const NavItems = () => (
    <>
      <button
        onClick={() => {
          window.location.href = "/companies";
        }}
        className={getNavButtonClass("/companies")}
      >
        {t("nav.forCompanies")}
      </button>
      <button
        onClick={() => {
          window.location.href = "/agencies";
        }}
        className={getNavButtonClass("/agencies")}
      >
        {t("nav.forAgencies")}
      </button>
      <button
        onClick={() => {
          window.location.href = "/candidates";
        }}
        className={getNavButtonClass("/candidates")}
      >
        {t("nav.forCandidates")}
      </button>
      <button
        onClick={() => {
          window.location.href = "/students";
        }}
        className={getNavButtonClass("/students")}
      >
        {t("nav.forStudents")}
      </button>
    </>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerBg}`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="flex-shrink-0 text-lg font-semibold text-primary-700 cursor-pointer"
          >
            <img
              src={logo}
              alt={t("brand")}
              className="inline-block h-7 align-middle"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 lg:flex">
            <NavItems />
          </nav>
          <div className="flex items-center gap-4">
            {/* About Us - hidden on mobile/tablet, shown on desktop only */}
            <button
              onClick={() => {
                window.location.href = "/about";
              }}
              className={`${getNavButtonClass("/about")} hidden lg:block`}
            >
              {t("nav.about")}
            </button>

            {/* Lang selector + hamburger */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Language selector - hidden on mobile/tablet, shown on desktop only */}
              <div className="hidden lg:flex items-center">
                <label htmlFor="lang" className="sr-only">
                  {t("nav.language")}
                </label>
                <select
                  id="lang"
                  className="rounded-md border border-gray-300 bg-white/90 px-2 py-1 text-sm backdrop-blur min-w-0 cursor-pointer"
                  value={i18n.language?.split("-")[0] || "en"}
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                >
                  <option value="en">EN</option>
                  <option value="de">DE</option>
                </select>
              </div>

              {/* Mobile hamburger menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-primary-700 lg:hidden flex-shrink-0 cursor-pointer"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-theme-primary flex flex-col h-screen w-screen">
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white/80 cursor-pointer"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Navigation - centered content */}
          <div className="flex-1 flex flex-col justify-center items-center px-8">
            <nav className="flex flex-col items-center justify-center space-y-8">
              <button
                onClick={() => {
                  window.location.href = "/companies";
                  closeMobile();
                }}
                className={getMobileNavButtonClass("/companies")}
              >
                {t("nav.forCompanies")}
              </button>

              <button
                onClick={() => {
                  window.location.href = "/agencies";
                  closeMobile();
                }}
                className={getMobileNavButtonClass("/agencies")}
              >
                {t("nav.forAgencies")}
              </button>

              <button
                onClick={() => {
                  window.location.href = "/candidates";
                  closeMobile();
                }}
                className={getMobileNavButtonClass("/candidates")}
              >
                {t("nav.forCandidates")}
              </button>

              <button
                onClick={() => {
                  window.location.href = "/students";
                  closeMobile();
                }}
                className={getMobileNavButtonClass("/students")}
              >
                {t("nav.forStudents")}
              </button>

              <button
                onClick={() => {
                  window.location.href = "/about";
                  closeMobile();
                }}
                className={getMobileAboutButtonClass("/about")}
              >
                {t("nav.about")}
              </button>
            </nav>
          </div>

          {/* Language selector at bottom */}
          <div className="flex justify-center pb-8">
            <select
              id="lang-mobile"
              className="rounded-lg border border-white/20 bg-white/10 backdrop-blur text-white px-6 py-3 text-lg cursor-pointer"
              value={i18n.language?.split("-")[0] || "en"}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option value="en" className="text-gray-900 bg-white">
                EN
              </option>
              <option value="de" className="text-gray-900 bg-white">
                DE
              </option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}
