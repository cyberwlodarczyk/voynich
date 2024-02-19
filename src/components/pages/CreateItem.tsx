import { useState } from "react";
import { useStore, getRandomUUID, generatePassword } from "../../lib";
import { Editor, EditorState } from "../controlled";

export function CreateItem() {
  const update = useStore((state) => state.update);
  const [state, setState] = useState<EditorState>({
    category: "personal",
    name: "",
    password: generatePassword(),
  });
  return (
    <Editor
      heading="create item"
      state={state}
      setState={setState}
      onSubmit={async () => {
        const id = getRandomUUID();
        await update((records) => [
          ...records,
          { ...state, id, createdAt: new Date() },
        ]);
        history.replaceState(null, "", `/item/${id}`);
      }}
    />
  );
}
