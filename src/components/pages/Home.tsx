import { Link } from "wouter";
import { getRandomUUID } from "../../lib";
import { List } from "../List";
import { Fab } from "../Fab";
import { PlusIcon } from "../styled";

export function Home() {
  return (
    <>
      <Link href="/add">
        <Fab text="New" icon={PlusIcon} />
      </Link>
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
