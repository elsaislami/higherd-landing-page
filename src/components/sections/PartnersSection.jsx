export default function PartnersSection({ title, logos, className = "" }) {
  return (
    <section className={`text-center my-20 py-8 ${className}`}>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
        {title}
      </h1>
      <div className="p-10 bg-[#4500A8] flex justify-around flex-wrap gap-4 text-gray-300">
        {logos.map((logo, i) => (
          <img key={i} src={logo} alt={`Partner ${i + 1}`} className="h-8" />
        ))}
      </div>
    </section>
  );
}
