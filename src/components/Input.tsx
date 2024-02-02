import { HTMLInputTypeAttribute, useId } from "react";
import styles from "./Input.module.css";

export interface InputProps {
  onChange(value: string): void;
  type: HTMLInputTypeAttribute;
  label: string;
  value: string;
  placeholder: string;
}

export function Input({ onChange, label, ...props }: InputProps) {
  const id = useId();
  return (
    <div className={styles.div}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    </div>
  );
}
