"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { Hint } from "../Hint";
import { useRenameModal } from "@/store/useRenameModal";
import { Actions } from "../Actions";
import { Menu } from "lucide-react";

interface Props {
  boardId: string;
}

const TabSeperator = () => {
  return <div className="text-neutral-300 px-1.5">|</div>;
};

export default function Info({ boardId }: Props) {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Hint label="Go to Dashboard" sideOffset={10} side="bottom">
        <Button asChild variant="board" className="px-2">
          <Link href="/dashboard">
            <Image
              src="/assets/images/aicteLogo.png"
              alt="logo"
              height={40}
              width={40}
            />
            <span className={cn("font-semibold text-xl ml-2 text-black")}>
              AICTE Portal
            </span>
          </Link>
        </Button>
      </Hint>

      <TabSeperator />

      <Hint label="Edit Title" side="bottom" sideOffset={10}>
        <Button
          variant="board"
          className="text-base font-normal px-2"
          onClick={() => {
            onOpen(data._id, data.title);
          }}
        >
          {data.title}
        </Button>
      </Hint>

      <TabSeperator />

      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main Menu" side="bottom" sideOffset={10}>
            <Button size="icon" variant="board">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
}

export function InfoSkeleton() {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
}
