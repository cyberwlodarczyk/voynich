import { PropsWithChildren, useState } from "react";
import { Link } from "wouter";
import { useRecord } from "../../lib";
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
import { NotFound } from "./NotFound";
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

export function Details() {
  const record = useRecord();
  const [showPassword, setShowPassword] = useState(false);
  if (!record) {
    return <NotFound />;
  }
  const { id, category, name, email, password, username } = record;
  return (
    <div className={styles.details}>
      <h1 className={styles.name}>{name}</h1>
      <Chip>{category}</Chip>
      <div>
        {username && <Field icon={UserIcon} label="username" text={username} />}
        {email && <Field icon={AtSignIcon} label="email" text={email} />}
        {password && (
          <Field
            icon={KeyIcon}
            label="password"
            text={showPassword ? password : "••••••••••••"}
          >
            <IconButton
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "hide" : "show"}
              icon={showPassword ? EyeOffIcon : EyeIcon}
            />
          </Field>
        )}
      </div>
      <Link href={`/${id}/edit`}>
        <Fab icon={EditIcon} text="edit" />
      </Link>
    </div>
  );
}
