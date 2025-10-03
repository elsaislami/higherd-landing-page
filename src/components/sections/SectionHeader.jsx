export default function SectionHeader({ title, description, className = "" }) {
  return (
    <section
      className={`container mx-auto my-12 sm:my-16 lg:my-20 inline-flex flex-col justify-center items-center gap-6 min-h-[180px] sm:min-h-[220px] ${className}`}
    >
      <div className="text-center px-4 sm:px-6 w-full mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-grey-800 drop-shadow mb-2">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed animate-fade-in">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
