import { FC } from "react";

interface Props {
  size?: number;
  color?: string;
}

const EmailIcon: FC<Props> = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-mail h-5 w-5"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
};

export default EmailIcon;
