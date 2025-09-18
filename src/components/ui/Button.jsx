export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  const variants = {
    primary:
      "bg-primary-600  bg-[#4500A8] p-4 text-white hover:bg-primary-900 focus:ring-primary-600",
    secondary:
      "bg-gray-100 text-gray-900  p-4  hover:bg-gray-200 focus:ring-gray-300",
    outline:
      "border border-[#4500A8] text-[#4500A8] hover:bg-gray-50 focus:ring-gray-300  p-4 ",
    white: " bg-white text-black  focus:ring-gray-300  p-4 ",
  };
  const cls = `${base} ${variants[variant] || variants.primary} ${className}`;
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
