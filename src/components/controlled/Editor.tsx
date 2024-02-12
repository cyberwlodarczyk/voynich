import { Record } from "../../lib";
import { FormField, Form, Button } from "../styled";
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
  const { category, name, username, email, password } = state;
  const createStateHandler =
    <T extends keyof EditorState>(field: T) =>
    (value: Record[T]) => {
      const copy = { ...state };
      if (value === "") {
        delete copy[field];
      } else {
        copy[field] = value;
      }
      setState(copy);
    };
  return (
    <Form onSubmit={onSubmit}>
      <CategoryPicker
        state={category}
        setState={createStateHandler("category")}
      />
      <FormField
        onUpdate={createStateHandler("name")}
        value={name}
        label="name"
        placeholder="google"
        required
      />
      <FormField
        onUpdate={createStateHandler("username")}
        value={username ?? ""}
        label="username"
        placeholder="john"
      />
      <FormField
        onUpdate={createStateHandler("email")}
        value={email ?? ""}
        label="email"
        type="email"
        placeholder="john@example.com"
      />
      <FormField
        onUpdate={createStateHandler("password")}
        value={password}
        label="password"
        placeholder="secret"
        required
      />
      <Button type="submit">confirm</Button>
    </Form>
  );
}
