import PropTypes from "prop-types";
export default function Input({ className = "", ...props }) {
  const base =
    "block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500";
  return <input className={`${base} ${className}`} {...props} />;
}

Input.propTypes = {
  className: PropTypes.string,
};
