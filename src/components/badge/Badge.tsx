import { FC } from "react";

interface BadgeProps {
  label: string;
}
const Badge: FC<BadgeProps> = ({ label }) => {
  return (
    <span className="text-sm font-arial  me-2 px-3 py-1 rounded-sm text-primary dark:bg-[var(--color-gray)]">
      {label}
    </span>
  );
};

export default Badge;
