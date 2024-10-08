import { useState } from "react";
import { useRecord, useStore } from "../../lib";
import { Editor, EditorState } from "../controlled";
import { NotFound } from "./NotFound";

export function EditItem() {
  const record = useRecord();
  const update = useStore((state) => state.update);
  const [state, setState] = useState<EditorState | null>(record);
  if (!record || !state) {
    return <NotFound />;
  }
  return (
    <Editor
      heading="edit item"
      state={state}
      setState={setState}
      onSubmit={async () => {
        const { id, createdAt } = record;
        await update((records) => [
          ...records.filter((record) => id !== record.id),
          { ...state, id, createdAt, editedAt: new Date() },
        ]);
        history.go(-1);
      }}
    />
  );
}
