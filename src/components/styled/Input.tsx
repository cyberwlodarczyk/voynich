import { InputHTMLAttributes, useId } from "react";
import { clsx } from "clsx";
import styles from "./Input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onUpdate(value: string): void;
  value: string;
  label: string;
}

export function Input({
  onUpdate,
  onChange,
  className,
  label,
  ...props
}: InputProps) {
  const id = useId();
  return (
    <div className={styles.div}>
      <input
        id={id}
        className={clsx(styles.input, className)}
        onChange={(e) => {
          onUpdate(e.target.value);
          onChange?.(e);
        }}
        {...props}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
}
