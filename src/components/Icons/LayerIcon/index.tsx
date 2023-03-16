import { IconProps } from "../IconsProps";

function LayerIcon({ ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 0L0 5.83333L1.81111 6.89167L10 11.6667L18.1778 6.89167L20 5.83333L10 0ZM18.1889 8.94167L10 13.725L1.8 8.95L0 10L10 15.8333L20 10L18.1889 8.94167ZM18.1889 13.1083L10 17.8917L1.8 13.1167L0 14.1667L10 20L20 14.1667L18.1889 13.1083Z"
        fill="white"
      />
    </svg>
  );
}

export default LayerIcon;
