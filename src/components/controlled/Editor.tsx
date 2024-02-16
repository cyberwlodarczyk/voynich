import { useState } from "react";
import { Record, generatePassword } from "../../lib";
import { Field, Form, Button, IconButton, RefreshIcon } from "../styled";
import { CategoryPicker } from "./CategoryPicker";

export type EditorState = Pick<
  Record,
  "category" | "name" | "username" | "email" | "password"
>;

export interface EditorProps {
  state: EditorState;
  setState(state: EditorState): void;
  onSubmit(): void;
}

export function Editor({ onSubmit, setState, state }: EditorProps) {
  const [error, setError] = useState<"name" | "password">();
  const { category, name, username, email, password } = state;
  const createSetState =
    <T extends keyof EditorState>(field: T, deleteEmpty = true) =>
    (value: Record[T]) => {
      const copy = { ...state };
      if (field === error) {
        setError(undefined);
      }
      if (value === "" && deleteEmpty) {
        delete copy[field];
      } else {
        copy[field] = value;
      }
      setState(copy);
    };
  const setPassword = createSetState("password", false);
  return (
    <Form
      heading="new item"
      onSubmit={() => {
        if (name === "") {
          setError("name");
        } else if (password === "") {
          setError("password");
        } else {
          onSubmit();
        }
      }}
    >
      <CategoryPicker state={category} setState={createSetState("category")} />
      <Field
        setState={createSetState("name", false)}
        state={name}
        label="name"
        aria-required
        error={error === "name"}
        description={error === "name" ? "required" : undefined}
      />
      <Field
        setState={createSetState("username")}
        state={username ?? ""}
        label="username"
      />
      <Field
        setState={createSetState("email")}
        state={email ?? ""}
        label="email"
        type="email"
      />
      <Field
        setState={setPassword}
        state={password}
        label="password"
        aria-required
        error={error === "password"}
        description={error === "password" ? "required" : undefined}
      >
        <IconButton
          small
          type="button"
          icon={RefreshIcon}
          aria-label="generate password"
          onClick={() => setPassword(generatePassword())}
        />
      </Field>
      <Button type="submit">confirm</Button>
    </Form>
  );
}
