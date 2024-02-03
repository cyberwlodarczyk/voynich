import { useState } from "react";
import { Form, Input, Button, Heading } from "../styled";

export function Init() {
  const [masterPassword, setMasterPassword] = useState("");
  return (
    <>
      <Heading gutter>hello!</Heading>
      <Form>
        <Input
          onUpdate={(value) => setMasterPassword(value)}
          value={masterPassword}
          label="master password"
          type="password"
          placeholder="secret"
        />
        <Button type="submit">confirm</Button>
      </Form>
    </>
  );
}
