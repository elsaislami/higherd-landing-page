import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./i18n/index.js";
import { initAnalytics, initWebVitals } from "./utils/analytics.js";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import Companies from "./pages/Companies.jsx";
import Agencies from "./pages/Agencies.jsx";
import Candidates from "./pages/Candidates.jsx";
import Students from "./pages/Students.jsx";
import About from "./pages/About.jsx";

// Initialize analytics and performance monitoring
initAnalytics();
initWebVitals();

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
