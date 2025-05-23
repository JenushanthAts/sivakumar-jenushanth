import { FC } from "react";

interface Props {
  size?: number;
  color?: string;
}

const TimelineIcon: FC<Props> = ({ size = 24, color = "white" }) => {
  return (
    <span className="timeline-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 20 20"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-timeline h-2.5 w-2.5"
      >
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
      </svg>
    </span>
  );
};

export default TimelineIcon;
