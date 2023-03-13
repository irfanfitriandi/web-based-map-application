import { IconProps } from "../IconsProps";

const ArrowIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0.5" y="0.5" width="29" height="29" rx="4.5" stroke="white" />
      <path
        d="M18.41 19.58L13.83 15L18.41 10.41L17 9L11 15L17 21L18.41 19.58Z"
        fill="white"
      />
    </svg>
  );
};

export default ArrowIcon;
