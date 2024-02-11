import { useState } from "react";
import { useStore } from "../../lib";
import { Form, FormField, Button } from "../styled";

export function Init() {
  const init = useStore((state) => state.init);
  const [masterPassword, setMasterPassword] = useState("");
  return (
    <Form onSubmit={() => init(masterPassword)}>
      <FormField
        value={masterPassword}
        label="master password"
        onUpdate={(value) => setMasterPassword(value)}
      />
      <Button type="submit">confirm</Button>
    </Form>
  );
}
