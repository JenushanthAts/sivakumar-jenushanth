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
}

const Button: FC<ButtonProps> = ({
  onClick,
  icon,
  label,
  variant = "primary",
  type = "button",
}) => {
  return (
    <button onClick={onClick} className={`btn btn--${variant}`} type={type}>
      {icon && <span className="icon-wrapper">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
