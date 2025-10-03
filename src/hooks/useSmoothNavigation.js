import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { handleSmoothScroll, scrollToTop } from "../utils/navigation.js";

export function useSmoothNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = useCallback((targetPath, sectionId = null) => {
    const isCurrentPage = location.pathname === targetPath;
    
    if (isCurrentPage && sectionId) {
      // Same page, scroll to section
      handleSmoothScroll(null, sectionId);
    } else if (isCurrentPage && !sectionId) {
      // Same page, scroll to top
      scrollToTop();
    } else {
      // Different page, navigate then scroll
      navigate(targetPath);
      
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        if (sectionId) {
          handleSmoothScroll(null, sectionId);
        } else {
          scrollToTop();
        }
      }, 100);
    }
  }, [navigate, location.pathname]);

  return { navigateToSection };
}
