import { getRandomUUID } from "../../lib";
import { List } from "../List";
import { Fab } from "../Fab";

export function Home() {
  return (
    <>
      <Fab />
      <List
        records={Array.from({ length: 10 }, () => ({
          id: getRandomUUID(),
          category: "personal",
          name: "Google",
          createdAt: new Date(),
        }))}
      />
    </>
  );
}
