import SEO from "../components/SEO.jsx";

// PrivacyTerms page does not accept props
export default function PrivacyTerms() {
  return (
    <div className="container mx-auto py-16">
      <SEO
        title="Privacy & Terms"
        description="Privacy policy and terms of service."
      />
      <h1 className="text-2xl font-bold mb-4">
        Privacy Policy & Terms of Service
      </h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">Privacy Policy</h2>
      <p className="mb-2">
        [Insert your privacy policy details here. Explain what data you collect,
        how you use it, and users' rights.]
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Terms of Service</h2>
      <p className="mb-2">
        [Insert your terms of service here. Explain the rules for using your
        website or service.]
      </p>
      <p className="mt-6 text-sm text-gray-500">
        This page contains your privacy policy and terms of service. Please
        update with your actual legal content.
      </p>
    </div>
  );
}
