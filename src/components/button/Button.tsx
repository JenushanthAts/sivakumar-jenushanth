import { FC } from "react";
import "./Button.scss";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline";

interface ButtonProps {
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
  variant?: ButtonVariant; // Optional variant pro
}

const Button: FC<ButtonProps> = ({
  onClick,
  icon,
  label,
  variant = "primary",
}) => {
  return (
    <button onClick={onClick} className={`btn btn--${variant}`}>
      {icon && <span className="icon-wrapper">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
