import { HTMLAttributes } from "react";
import { clsx } from "clsx";
import styles from "./Heading.module.css";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  gutter?: boolean;
}

export function Heading({ gutter, className, ...props }: HeadingProps) {
  return (
    <h1
      {...props}
      className={clsx(styles.h1, gutter && styles.gutter, className)}
    />
  );
}
