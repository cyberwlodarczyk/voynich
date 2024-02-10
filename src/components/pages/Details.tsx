import { PropsWithChildren, useState } from "react";
import { useParams, DefaultParams } from "wouter";
import {
  AtSignIcon,
  Chip,
  EyeIcon,
  EyeOffIcon,
  Icon,
  IconButton,
  KeyIcon,
  UserIcon,
  EditIcon,
  CopyIcon,
  Fab,
} from "../styled";
import styles from "./Details.module.css";

interface FieldProps extends PropsWithChildren {
  icon: typeof Icon;
  label: string;
  text: string;
}

function Field({ icon: Icon, label, text, children }: FieldProps) {
  return (
    <div className={styles.field}>
      <Icon size={24} className={styles.fieldLeftIcon} />
      <div>
        <div className={styles.fieldLabel}>{label}</div>
        <div className={styles.fieldText}>{text}</div>
      </div>
      <div className={styles.fieldSpace} />
      <div className={styles.fieldRightIcons}>
        {children}
        <IconButton aria-label="copy" icon={CopyIcon} />
      </div>
    </div>
  );
}

export interface DetailsParams extends DefaultParams {
  id: string;
}

export function Details() {
  const { id } = useParams<DetailsParams>();
  const [showPassword, setShowPassword] = useState(false);
  console.log(id);
  return (
    <div className={styles.details}>
      <h1 className={styles.name}>google</h1>
      <Chip>personal</Chip>
      <div>
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
