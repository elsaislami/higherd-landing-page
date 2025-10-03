// src/utils/navigation.js

export function openBookingURL() {
  const bookingURL =
    import.meta.env.VITE_BOOKING_URL ||
    "https://outlook.office.com/book/HigherdSolutionsYou@higherd.de/?ismsaljsauthenabled=true";
  window.open(bookingURL);
}

// Helper function for smooth scrolling
export function handleSmoothScroll(e, targetSelector = null) {
  if (e) {
    e.preventDefault();
  }

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
}

// Scroll to top function
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
