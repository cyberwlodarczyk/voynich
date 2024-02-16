import { InputHTMLAttributes, useId, useState } from "react";
import { clsx } from "clsx";
import styles from "./Field.module.css";

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  state?: string;
  setState?(state: string): void;
  label?: string;
  description?: string;
  error?: boolean;
}

export function Field({
  "aria-invalid": ariaInvalid,
  "aria-describedby": ariaDescribedBy,
  children,
  id,
  value,
  className,
  label,
  description,
  error,
  state,
  setState,
  onFocus,
  onBlur,
  onChange,
  ...props
}: FieldProps) {
  const inputId = useId();
  const descriptionId = useId();
  const [focus, setFocus] = useState(false);
  return (
    <div className={styles.field}>
      {label && (
        <label
          htmlFor={id ?? inputId}
          className={clsx(
            styles.label,
            focus && styles.focus,
            error && styles.error
          )}
        >
          {label}
        </label>
      )}
      <div
        className={clsx(
          styles.border,
          focus && styles.focus,
          error && styles.error
        )}
      >
        <input
          {...props}
          aria-invalid={ariaInvalid ?? error}
          aria-describedby={clsx(ariaDescribedBy, description && descriptionId)}
          id={id ?? inputId}
          value={state ?? value}
          onFocus={(e) => {
            onFocus?.(e);
            setFocus(true);
          }}
          onBlur={(e) => {
            onBlur?.(e);
            setFocus(false);
          }}
          onChange={(e) => {
            onChange?.(e);
            setState?.(e.target.value);
          }}
          className={clsx(styles.input, className)}
        />
        {children}
      </div>
      {description && (
        <p
          id={descriptionId}
          className={clsx(styles.description, error && styles.error)}
        >
          {description}
        </p>
      )}
    </div>
  );
}
