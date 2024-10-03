import { useState } from "react";
import { Link } from "wouter";
import { useRecord } from "../../../lib";
import {
  FlexGrow,
  AtSignIcon,
  Chip,
  EyeIcon,
  EyeOffIcon,
  IconButton,
  KeyIcon,
  UserIcon,
  EditIcon,
  Fab,
  TagIcon,
  Heading,
  TrashIcon,
} from "../../styled";
import { NotFound } from "../../pages";
import { ItemEntry } from "./ItemEntry";
import styles from "./Item.module.css";

export function Item() {
  const record = useRecord();
  const [showPassword, setShowPassword] = useState(false);
  if (!record) {
    return <NotFound />;
  }
  const { id, category, name, email, password, username } = record;
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <Heading className={styles.heading}>{name}</Heading>
        <FlexGrow />
        <Link asChild href={`/item/${id}/edit`}>
          <Fab icon={EditIcon} aria-label="edit" />
        </Link>
        <Link asChild href={`/item/${id}/delete`}>
          <IconButton icon={TrashIcon} aria-label="delete" />
        </Link>
      </div>
      <div>
        <ItemEntry icon={TagIcon} label="category">
          <Chip>{category}</Chip>
        </ItemEntry>
        {username && (
          <ItemEntry
            icon={UserIcon}
            label="username"
            text={username}
            copy={username}
          />
        )}
        {email && (
          <ItemEntry
            icon={AtSignIcon}
            label="email"
            text={email}
            copy={email}
          />
        )}
        <ItemEntry
          icon={KeyIcon}
          label="password"
          text={showPassword ? password : "••••••••••••"}
          copy={password}
        >
          <IconButton
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "hide" : "show"}
            icon={showPassword ? EyeOffIcon : EyeIcon}
          />
        </ItemEntry>
      </div>
    </main>
  );
}
