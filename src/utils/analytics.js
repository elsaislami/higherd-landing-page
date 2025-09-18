// Google Analytics and Core Web Vitals monitoring
export const initAnalytics = () => {
  // Get GA4 measurement ID from environment variables
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const enableAnalytics = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';
  
  // Only initialize analytics if enabled and ID is provided
  if (!enableAnalytics || !GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    console.log('Analytics disabled or no measurement ID provided');
    return;
  }
  
  // Load Google Analytics
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);

  // Make gtag globally available
  window.gtag = gtag;
  
  console.log('Google Analytics initialized with ID:', GA_MEASUREMENT_ID);
};

// Core Web Vitals monitoring
export const initWebVitals = () => {
  const enableWebVitals = import.meta.env.VITE_ENABLE_WEB_VITALS === 'true';
  
  // Only run in production and if enabled
  if (import.meta.env.DEV || !enableWebVitals) {
    console.log('Web Vitals monitoring disabled');
    return;
  }

  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    function sendToAnalytics(metric) {
      // Send to Google Analytics
      if (window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Send to console for debugging
      console.log('Web Vital:', metric);
    }

    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  }).catch(err => {
    console.warn('Failed to load web-vitals:', err);
  });
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track page views
export const trackPageView = (page_title, page_location) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_title,
      page_location,
    });
  }
};
