import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./i18n/index.js";
import { initAnalytics, initWebVitals } from "./utils/analytics.js";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import FloatingActionMenu from "./components/ui/FloatingActionMenu.jsx";
import ChatBot from "./components/ChatBot.jsx";
import Home from "./pages/Home.jsx";
import Companies from "./pages/Companies.jsx";
import Agencies from "./pages/Agencies.jsx";
import Candidates from "./pages/Candidates.jsx";
import Students from "./pages/Students.jsx";
import About from "./pages/About.jsx";
import Imprint from "./pages/Imprint.jsx";
import PrivacyTerms from "./pages/PrivacyTerms.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";

// Initialize analytics and performance monitoring
initAnalytics();
initWebVitals();

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <FloatingActionMenu />
      <ChatBot />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/companies",
    element: (
      <Layout>
        <Companies />
      </Layout>
    ),
  },
  {
    path: "/agencies",
    element: (
      <Layout>
        <Agencies />
      </Layout>
    ),
  },
  {
    path: "/candidates",
    element: (
      <Layout>
        <Candidates />
      </Layout>
    ),
  },
  {
    path: "/students",
    element: (
      <Layout>
        <Students />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/imprint",
    element: (
      <Layout>
        <Imprint />
      </Layout>
    ),
  },
  {
    path: "/privacy-terms",
    element: (
      <Layout>
        <PrivacyTerms />
      </Layout>
    ),
  },
  {
    path: "/terms-of-service",
    element: (
      <Layout>
        <TermsOfService />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
