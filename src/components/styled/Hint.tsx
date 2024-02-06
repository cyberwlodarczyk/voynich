import { HTMLAttributes } from "react";
import { clsx } from "clsx";
import styles from "./Hint.module.css";

export function Hint({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={clsx(styles.hint, className)} />;
}
