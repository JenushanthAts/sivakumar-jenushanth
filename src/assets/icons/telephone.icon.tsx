import { FC } from "react";

interface Props {
  size?: number;
  color?: string;
}

const TelephoneIcon: FC<Props> = ({ size }) => {
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
      className="h-5 w-5 text-current"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.14 1.21.5 2.39 1.07 3.47a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.61-1.61a2 2 0 0 1 2.11-.45c1.08.57 2.26.93 3.47 1.07a2 2 0 0 1 1.72 2z" />
    </svg>
  );
};

export default TelephoneIcon;
