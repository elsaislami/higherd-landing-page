import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/brand-logo.png";

export default function Header() {
  const { t, i18n } = useTranslation("common");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? "text-primary-700" : "text-gray-700 hover:text-primary-700"
    }`;

  const headerBg = scrolled ? "bg-white/70 backdrop-blur-md" : "bg-transparent";

  const closeMobile = () => setMobileOpen(false);

  // Smooth scroll helper
  const handleSmoothScroll = (e, targetId, onNavigate) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      if (onNavigate) onNavigate();
    }
  };

  const NavItems = ({ onNavigate }) => (
    <>
      <NavLink to="/" className={navLink} end onClick={onNavigate}>
        {t("nav.home")}
      </NavLink>
      <NavLink to="/companies" className={navLink} end onClick={onNavigate}>
        {t("nav.forCompanies")}
      </NavLink>

      <NavLink to="/agencies" className={navLink} end onClick={onNavigate}>
        {t("nav.forAgencies")}
      </NavLink>
      <NavLink to="/candidates" className={navLink} end onClick={onNavigate}>
        {t("nav.forCandidates")}
      </NavLink>
    </>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerBg}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex-shrink-0 text-lg font-semibold text-primary-700"
          >
            <img
              src={logo}
              alt={t("brand")}
              className="inline-block h-7 align-middle"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 lg:flex">
            <NavItems />
          </nav>

          {/* Lang selector + hamburger */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <label htmlFor="lang" className="sr-only">
              {t("nav.language")}
            </label>
            <select
              id="lang"
              className="rounded-md border border-gray-300 bg-white/90 px-2 py-1 text-sm backdrop-blur min-w-0"
              value={i18n.language?.split("-")[0] || "en"}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option value="en">EN</option>
              <option value="de">DE</option>
            </select>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-primary-700 lg:hidden flex-shrink-0"
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

      {/* Mobile/tablet full-screen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative flex h-full flex-col items-center justify-center">
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-primary-700"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <nav className="flex flex-col items-center gap-6 text-center text-xl">
              <NavItems onNavigate={closeMobile} />
            </nav>

            <div className="absolute bottom-6 flex items-center gap-2">
              <label htmlFor="lang-mobile" className="sr-only">
                {t("nav.language")}
              </label>
              <select
                id="lang-mobile"
                className="rounded-md border border-gray-300 bg-white/90 px-3 py-2 text-sm"
                value={i18n.language?.split("-")[0] || "en"}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
              >
                <option value="en">EN</option>
                <option value="de">DE</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
