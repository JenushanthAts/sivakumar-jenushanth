import { FC } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline";
type ButtonType = "button" | "submit" | "reset";
interface ButtonProps {
  onClick?: () => void;
  label: string;
  icon?: React.ReactNode;
  type?: ButtonType;
  variant?: ButtonVariant; // Optional variant pro
  active?: boolean;
}

const Button: FC<ButtonProps> = ({
  onClick,
  icon,
  label,
  variant = "primary",
  type = "button",
  active = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="font-mono text-white bg-primary hover:bg-primary-600 rounded-md text-[15px] font-medium px-4 py-2 w-full cursor-pointer transition-transform transform hover:scale-105"
    >
      {/* {icon && <span className="flex items-center">{icon}</span>} */}
      <span>{label}</span>
    </button>
  );
};

export default Button;
