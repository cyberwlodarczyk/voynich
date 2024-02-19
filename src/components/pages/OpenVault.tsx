import { useEffect, useState } from "react";
import { useStore } from "../../lib";
import { Logo, Form, Field, Button } from "../styled";

export function OpenVault() {
  const decrypt = useStore((state) => state.decrypt);
  const [masterPassword, setMasterPassword] = useState("");
  const [error, setError] = useState<string>();
  useEffect(() => {
    setError(undefined);
  }, [masterPassword]);
  return (
    <>
      <Logo />
      <main>
        <Form
          heading="open vault"
          small
          onSubmit={async () => {
            if (masterPassword === "") {
              return setError("required");
            }
            const ok = await decrypt(masterPassword);
            if (!ok) {
              setError("incorrect");
            }
          }}
        >
          <Field
            state={masterPassword}
            setState={setMasterPassword}
            label="master password"
            error={error !== undefined}
            description={error}
            type="password"
            aria-required
          />
          <Button type="submit">confirm</Button>
        </Form>
      </main>
    </>
  );
}
