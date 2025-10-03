import SEO from "../components/SEO.jsx";

// Imprint page does not accept props
export default function Imprint() {
  return (
    <div className="container mx-auto py-16">
      <SEO
        title="Imprint"
        description="Legal disclosure and company information."
      />
      <h1 className="text-2xl font-bold mb-4">Imprint</h1>
      <p className="mb-2">Company Name: [Your Company Name]</p>
      <p className="mb-2">Address: [Your Company Address]</p>
      <p className="mb-2">Phone: [Your Company Phone]</p>
      <p className="mb-2">Email: [Your Company Email]</p>
      <p className="mb-2">Managing Director: [Name]</p>
      <p className="mb-2">VAT ID: [VAT Number]</p>
      <p className="mb-2">Commercial Register: [Register Info]</p>
      <p className="mt-6 text-sm text-gray-500">
        This page contains the legally required information about the company.
      </p>
    </div>
  );
}
