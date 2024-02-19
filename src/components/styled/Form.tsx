import { FormHTMLAttributes } from "react";
import { clsx } from "clsx";
import { Heading } from "./Heading";
import styles from "./Form.module.css";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  small?: boolean;
  heading?: string;
}

export function Form({
  onSubmit,
  autoComplete,
  noValidate,
  children,
  heading,
  small,
  ...props
}: FormProps) {
  return (
    <form
      {...props}
      onSubmit={(e) => {
        onSubmit?.(e);
        e.preventDefault();
      }}
      noValidate={noValidate ?? true}
      autoComplete={autoComplete ?? "off"}
    >
      {heading && <Heading>{heading}</Heading>}
      <div
        className={clsx(
          styles.children,
          heading && styles.heading,
          small && styles.small
        )}
      >
        {children}
      </div>
    </form>
  );
}
