import { useState } from "react";
import { Form, FormField, Button } from "../styled";
import { useStore } from "../../lib";

export function Decrypt() {
  const decrypt = useStore((state) => state.decrypt);
  const [masterPassword, setMasterPassword] = useState("");
  return (
    <Form
      onSubmit={async () => {
        const ok = await decrypt(masterPassword);
        if (!ok) {
          setMasterPassword("");
        }
      }}
    >
      <FormField
        value={masterPassword}
        label="master password"
        onUpdate={(value) => setMasterPassword(value)}
      />
      <Button type="submit">confirm</Button>
    </Form>
  );
}
