import { HTMLAttributes } from "react";
import { clsx } from "clsx";
import styles from "./Chip.module.css";

export type ChipProps = HTMLAttributes<HTMLDivElement>;

export function Chip({ className, ...props }: ChipProps) {
  return <div {...props} className={clsx(styles.chip, className)} />;
}
