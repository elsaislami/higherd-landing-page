export default function SectionHeader({ title, description, className = "" }) {
  return (
    <section className={`container my-20 ${className}`}>
      <div className="text-center px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-gray-600 px-4">{description}</p>
        )}
      </div>
    </section>
  );
}
