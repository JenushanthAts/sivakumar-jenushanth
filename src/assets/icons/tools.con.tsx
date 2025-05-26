import { FC } from "react";

interface Props {
  size?: number;
  color?: string;
}

const ToolsIcon: FC<Props> = ({ size, color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-cpu h-5 w-5"
    >
      <rect width="16" height="16" x="4" y="4" rx="2"></rect>
      <rect width="6" height="6" x="9" y="9" rx="1"></rect>
      <path d="M15 2v2"></path>
      <path d="M15 20v2"></path>
      <path d="M2 15h2"></path>
      <path d="M2 9h2"></path>
      <path d="M20 15h2"></path>
      <path d="M20 9h2"></path>
      <path d="M9 2v2"></path>
      <path d="M9 20v2"></path>
    </svg>
  );
};

export default ToolsIcon;
