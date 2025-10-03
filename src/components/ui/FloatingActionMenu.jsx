import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSmoothNavigation } from "../../hooks/useSmoothNavigation.js";
import { openBookingURL } from "../../utils/navigation.js";
import {
  ChevronUp,
  Calendar,
  Users,
  Building2,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";

export default function FloatingActionMenu({ className = "" }) {
  const { t } = useTranslation(["pages", "common"]);
  const { navigateToSection } = useSmoothNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.location.reload();
  };

  const menuItems = [
    {
      icon: Calendar,
      label: t("common:cta.contactUs"),
      onClick: openBookingURL,
      className: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Building2,
      label: t("home.newsletter.solutionsLinks.companies"),
      onClick: () => navigateToSection("/", "#for-companies"),
      className: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Users,
      label: t("home.newsletter.solutionsLinks.agencies"),
      onClick: () => navigateToSection("/", "#for-agencies"),
      className: "bg-purple-600 hover:bg-purple-700",
    },
    {
      icon: GraduationCap,
      label: t("home.newsletter.solutionsLinks.candidates"),
      onClick: () => navigateToSection("/", "#for-candidates"),
      className: "bg-indigo-600 hover:bg-indigo-700",
    },
  ];

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Menu Items */}
      {isOpen && (
        <div className="mb-4 space-y-3">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-end animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="mr-3 bg-black/80 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                {item.label}
              </span>
              <button
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                className={`p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 text-white cursor-pointer ${item.className}`}
                aria-label={item.label}
                title={item.label}
              >
                <item.icon className="w-5 h-5" />
              </button>
            </div>
          ))}
          {/* Scroll to Top */}
          <div
            className="flex items-center justify-end animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <span className="mr-3 bg-black/80 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
              Scroll to top
            </span>
            <button
              onClick={() => {
                scrollToTop();
                setIsOpen(false);
              }}
              className="p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 bg-[#4500A8] hover:bg-purple-800 text-white cursor-pointer"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 bg-[#4500A8] hover:bg-purple-800 text-white cursor-pointer`}
        aria-label={isOpen ? "Close menu" : "Open quick actions menu"}
        title={isOpen ? "Close menu" : "Quick actions"}
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-300 ease-in-out" />
        ) : (
          <Menu className="w-6 h-6 transition-transform duration-300 ease-in-out" />
        )}
      </button>
    </div>
  );
}
