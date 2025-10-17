import { logos } from "../../assets/logos";

export default function PartnersSection({ title, className = "" }) {
  return (
    <>
      <section
        className={`text-center flex flex-col justify-end items-center gap-[29px] self-stretch ${className}`}
      >
        <h1 className="title-xl tracking-tight ">{title}</h1>
      </section>
      <div
        className="w-full py-8 md:py-12"
        style={{
          background:
            "linear-gradient(90deg, #4500A8 0%, #6C27D0 28.96%, #6C27D0 73.41%, #4500A8 100%)",
        }}
      >
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-300 px-4 sm:px-6 md:px-10">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Partner ${i + 1}`}
              className="h-7 sm:h-8 md:h-10 max-w-[120px] object-contain mx-auto"
            />
          ))}
        </div>
      </div>
    </>
  );
}
