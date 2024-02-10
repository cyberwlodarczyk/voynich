import styles from "./Item.module.css";
import {
  AtSignIcon,
  Chip,
  EyeIcon,
  EyeOffIcon,
  Icon,
  IconButton,
  KeyIcon,
  UserIcon,
} from "./styled";
import { Fab } from "./Fab";
import { EditIcon, CopyIcon } from "./styled";
import { PropsWithChildren, useState } from "react";

export interface FieldProps extends PropsWithChildren {
  icon: typeof Icon;
  label: string;
  text: string;
}

export function Field({ icon: Icon, label, text, children }: FieldProps) {
  return (
    <div className={styles.field}>
      <Icon size={24} className={styles.icon} />
      <div>
        <div className={styles.label}>{label}</div>
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.space} />
      <div className={styles.icons}>
        {children}
        <IconButton aria-label="copy" icon={CopyIcon} />
      </div>
    </div>
  );
}

export function Item() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>google</h1>
      <Chip>personal</Chip>
      <div className={styles.fields}>
        <Field icon={UserIcon} label="username" text="lwlodarczyk" />
        <Field
          icon={AtSignIcon}
          label="email"
          text="lwlodarczyk@student.agh.edu.pl"
        />
        <Field
          icon={KeyIcon}
          label="password"
          text={showPassword ? "pa$$word123!" : "••••••••••••"}
        >
          <IconButton
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "hide" : "show"}
            icon={showPassword ? EyeOffIcon : EyeIcon}
          />
        </Field>
      </div>
      <Fab icon={EditIcon} text="edit" />
    </div>
  );
}
