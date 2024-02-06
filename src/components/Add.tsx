import { useState } from "react";
import { Categories } from "./Categories";
import { Input, Form, Button, Hint } from "./styled";
import { Category } from "../lib";

export function Add() {
  const [category, setCategory] = useState<Category>("personal");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form>
      <Hint>all fields except the name are optional</Hint>
      <Categories state={category} onUpdate={(value) => setCategory(value)} />
      <Input
        onUpdate={(value) => setName(value)}
        value={name}
        label="name"
        placeholder="google"
        required
      />
      <Input
        onUpdate={(value) => setUsername(value)}
        value={username}
        label="username"
        placeholder="john"
      />
      <Input
        onUpdate={(value) => setEmail(value)}
        value={email}
        label="email"
        type="email"
        placeholder="john@example.com"
      />
      <Input
        onUpdate={(value) => setPassword(value)}
        value={password}
        label="password"
        placeholder="secret"
      />
      <Button type="submit">confirm</Button>
    </Form>
  );
}
