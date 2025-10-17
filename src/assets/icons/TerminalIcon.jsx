import React from "react";

const TerminalIcon = ({ size = 50, color = "#4500A8", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 0.9}
    viewBox="0 0 50 45"
    fill="none"
    {...props}
  >
    <path
      d="M14.3333 14.3333L22.3333 22.3333L14.3333 30.3333M27.6667 30.3333H35.6667M6.33333 43.6667H43.6667C45.0812 43.6667 46.4377 43.1048 47.4379 42.1046C48.4381 41.1044 49 39.7478 49 38.3333V6.33333C49 4.91885 48.4381 3.56229 47.4379 2.5621C46.4377 1.5619 45.0812 1 43.6667 1H6.33333C4.91885 1 3.56229 1.5619 2.5621 2.5621C1.5619 3.56229 1 4.91885 1 6.33333V38.3333C1 39.7478 1.5619 41.1044 2.5621 42.1046C3.56229 43.1048 4.91885 43.6667 6.33333 43.6667Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TerminalIcon;
