import { FC } from "react";
import SpinnerIcon from "../../assets/icons/spinner.icon";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline";
type ButtonType = "button" | "submit" | "reset";
interface ButtonProps {
  onClick?: () => void;
  label: string;
  type?: ButtonType;
  variant?: ButtonVariant;
  diasbled?: boolean;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  onClick,
  label,
  variant = "primary",
  type = "button",
  loading = false,
  diasbled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex justify-center items-center rounded-lg bg-primary ${
        diasbled ? "opacity-60" : ""
      } px-4 py-2 text-white w-full cursor-pointer transition delay-75 ease-in-out transform hover:-translate-y-1 hover:scale-105`}
      disabled={diasbled}
    >
      {loading && <SpinnerIcon />}
      {!loading && <span>{label}</span>}
    </button>
  );
};

export default Button;
