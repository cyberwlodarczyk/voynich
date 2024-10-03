import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import { Icon } from "./Icon";
import styles from "./IconButton.module.css";

export interface IconButtonBaseProps {
  icon: typeof Icon;
  small?: boolean;
}

export type IconButtonButtonProps = IconButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export interface IconButtonLinkProps
  extends IconButtonBaseProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export type IconButtonProps = IconButtonButtonProps | IconButtonLinkProps;

export function IconButton({ icon: Icon, small, ...props }: IconButtonProps) {
  const icon = <Icon small={small} />;
  const className = clsx(styles.button, small && styles.small, props.className);
  return "href" in props ? (
    <a {...props} className={className}>
      {icon}
    </a>
  ) : (
    <button {...props} className={className}>
      {icon}
    </button>
  );
}
