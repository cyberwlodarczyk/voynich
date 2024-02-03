import { FormHTMLAttributes } from "react";
import { clsx } from "clsx";
import styles from "./Form.module.css";

export function Form({
  onSubmit,
  className,
  ...props
}: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form
      {...props}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(e);
      }}
      className={clsx(styles.form, className)}
    />
  );
}
