const FacebookIcon = ({
  width = 24,
  height = 25,
  fill = "#D5D9EB",
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="55"
      viewBox="0 0 54 55"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_507_3838)">
        <path
          d="M24 12.2129C24 5.58547 18.6274 0.212891 12 0.212891C5.37258 0.212891 0 5.58547 0 12.2129C0 18.2023 4.3882 23.1669 10.125 24.0671V15.6816H7.07812V12.2129H10.125V9.56914C10.125 6.56164 11.9166 4.90039 14.6576 4.90039C15.9701 4.90039 17.3438 5.13477 17.3438 5.13477V8.08789H15.8306C14.34 8.08789 13.875 9.01297 13.875 9.96289V12.2129H17.2031L16.6711 15.6816H13.875V24.0671C19.6118 23.1669 24 18.2023 24 12.2129Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_507_3838">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.212891)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
