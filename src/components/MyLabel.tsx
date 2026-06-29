import "./MyLabel.css";

type Size = "normal" | "h1" | "h2" | "h3";
interface Props {
  /**
   *Texto to display
   */

  label: string;

  /** *label size*/
  size?: Size;
  allCaps?: boolean;
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color = "text-primary",
  fontColor,
}: Props) => {
  return (
    <span
      className={`${size} ${color}  `}
      style={{ color: fontColor && fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
