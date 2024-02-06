import { HTMLAttributes } from "react";
import { clsx } from "clsx";
import styles from "./Chip.module.css";

export function Chip({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={clsx(styles.chip, className)} />;
}
