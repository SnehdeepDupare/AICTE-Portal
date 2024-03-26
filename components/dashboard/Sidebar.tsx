import { List } from "./List";
import NewButton from "./NewButton";

function Sidebar() {
  return (
    <div className="h-full fixed z-10 w-[60px] flex flex-col gap-y-4 text-white left-0 bg-blue-950 p-3">
      <List />
      <NewButton />
    </div>
  );
}

export default Sidebar;
