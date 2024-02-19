import { useEffect, useState } from "react";
import { Link, Redirect } from "wouter";
import { useRecord, useStore } from "../../../lib";
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
  const update = useStore((state) => state.update);
  const [deleting, setDeleting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (record && deleting) {
      update((records) => records.filter(({ id }) => id !== record.id));
    }
  }, [update, record, deleting]);
  if (!record) {
    if (deleting) {
      return <Redirect to="/" />;
    } else {
      return <NotFound />;
    }
  }
  const { id, category, name, email, password, username } = record;
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <Heading>{name}</Heading>
        <FlexGrow />
        <Link href={`/item/${id}/edit`}>
          <Fab icon={EditIcon} aria-label="edit" />
        </Link>
        <IconButton
          icon={TrashIcon}
          aria-label="delete"
          onClick={() => setDeleting(true)}
        />
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
