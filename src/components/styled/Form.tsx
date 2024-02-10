import { FormHTMLAttributes, InputHTMLAttributes, useId } from "react";
import { clsx } from "clsx";
import styles from "./Form.module.css";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export function Form({ onSubmit, className, ...props }: FormProps) {
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

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  onUpdate(value: string): void;
  value: string;
  label: string;
}

export function FormField({
  onUpdate,
  onChange,
  className,
  label,
  ...props
}: FormFieldProps) {
  const id = useId();
  return (
    <div className={styles.formField}>
      <input
        id={id}
        className={clsx(styles.formFieldInput, className)}
        onChange={(e) => {
          onUpdate(e.target.value);
          onChange?.(e);
        }}
        {...props}
      />
      <label htmlFor={id} className={styles.formFieldLabel}>
        {label}
      </label>
    </div>
  );
}
