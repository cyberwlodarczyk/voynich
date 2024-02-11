import { useState } from "react";
import { useLocation } from "wouter";
import {
  Category,
  CATEGORIES,
  useStore,
  getRandomUUID,
  Record,
} from "../../lib";
import { FormField, Form, Button, Chip, Hint } from "../styled";
import styles from "./Add.module.css";

export function Add() {
  const update = useStore((state) => state.update);
  const [, setLocation] = useLocation();
  const [category, setCategory] = useState<Category>("personal");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form
      onSubmit={() => {
        const record: Record = {
          id: getRandomUUID(),
          category,
          name,
          createdAt: new Date(),
        };
        if (username) {
          record.username = username;
        }
        if (email) {
          record.email = email;
        }
        if (password) {
          record.password = password;
        }
        update((records) => [...records, record]).then(() =>
          setLocation(`/${record.id}`)
        );
      }}
    >
      <Hint>all fields except the name are optional</Hint>
      <div
        role="listbox"
        aria-label="category"
        aria-orientation="horizontal"
        className={styles.categories}
      >
        {CATEGORIES.map((value, index) => (
          <Chip
            role="option"
            tabIndex={0}
            key={index}
            aria-selected={value === category}
            onClick={() => setCategory(value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setCategory(value);
              }
            }}
          >
            {value}
          </Chip>
        ))}
      </div>
      <FormField
        onUpdate={(value) => setName(value)}
        value={name}
        label="name"
        placeholder="google"
        required
      />
      <FormField
        onUpdate={(value) => setUsername(value)}
        value={username}
        label="username"
        placeholder="john"
      />
      <FormField
        onUpdate={(value) => setEmail(value)}
        value={email}
        label="email"
        type="email"
        placeholder="john@example.com"
      />
      <FormField
        onUpdate={(value) => setPassword(value)}
        value={password}
        label="password"
        placeholder="secret"
      />
      <Button type="submit">confirm</Button>
    </Form>
  );
}
