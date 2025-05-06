import { FC } from "react";
import "./Chip.scss";

interface ChipProps {
  label: string;
}
const Chip: FC<ChipProps> = ({ label }) => {
  return <span className="tag">{label}</span>;
};

export default Chip;
