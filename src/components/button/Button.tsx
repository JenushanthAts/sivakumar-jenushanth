import { FC } from "react";
import "./Button.scss";

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
      onClick={onClick}
      className={`btn btn--${variant} ${active ? "active" : ""}`}
      type={type}
    >
      {icon && <span className="icon-wrapper">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
