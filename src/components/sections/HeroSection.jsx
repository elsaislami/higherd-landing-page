import Button from "../ui/Button.jsx";

export default function HeroSection({
  heroImage,
  heroImageAlt,
  title,
  subtitle,
  buttons = [], // Array of button objects { text, variant, onClick }
  className = "",
}) {
  return (
    <section className={`container my-20 ${className}`} role="banner">
      <div className="relative">
        {/* Irregular Blob Background (SVG) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 z-0 opacity-40 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            className="blur-[100px]"
          >
            <g transform="translate(300,300)">
              <path
                d="M120,-160C160,-120,200,-80,200,-40C200,0,160,40,120,80C80,120,40,160,0,160C-40,160,-80,120,-120,80C-160,40,-200,0,-200,-40C-200,-80,-160,-120,-120,-160C-80,-200,-40,-240,0,-240C40,-240,80,-200,120,-160Z"
                fill="#4500A8"
              />
            </g>
          </svg>
        </div>

        {/* Foreground Content */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between relative z-10">
          <header className="md:max-w-1/2">
            <h1 className="title-xxl ">{title}</h1>
            <p className="mt-3 text-gray-600">{subtitle}</p>
            {buttons.length > 0 && (
              <nav className="mt-6 flex  gap-3" aria-label="Primary actions">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || "primary"}
                    onClick={button.onClick}
                  >
                    {button.text}
                  </Button>
                ))}
              </nav>
            )}
          </header>

          <figure className="rounded-lg overflow-hidden">
            <img
              src={heroImage}
              alt={heroImageAlt}
              loading="eager"
              width="600"
              height="400"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
