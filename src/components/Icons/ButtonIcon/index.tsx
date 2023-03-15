import { IconProps } from "../IconsProps";

const ButtonIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_7_385)">
        <circle cx="19" cy="15" r="15" fill="white" />
      </g>
      <path
        d="M15.59 19.58L20.17 15L15.59 10.41L17 9L23 15L17 21L15.59 19.58Z"
        fill="#324E9A"
      />
      <defs>
        <filter
          id="filter0_d_7_385"
          x="0"
          y="0"
          width="38"
          height="38"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7_385"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_7_385"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ButtonIcon;
