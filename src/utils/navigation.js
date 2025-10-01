// src/utils/navigation.js

export function openBookingURL() {
  const bookingURL =
    import.meta.env.VITE_BOOKING_URL ||
    "https://outlook.office.com/book/HigherdSolutionsYou@higherd.de/?ismsaljsauthenabled=true";
  window.open(bookingURL);
}
