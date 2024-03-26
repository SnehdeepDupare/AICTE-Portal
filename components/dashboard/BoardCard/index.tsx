import { useAuth } from "@clerk/nextjs";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";

import Footer from "./Footer";
import { Skeleton } from "@/components/ui/skeleton";
import Overlay from "./Overlay";
import { useApiMutation } from "@/hooks/useApiMutation";
import { api } from "@/convex/_generated/api";
import { Actions } from "@/components/Actions";

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  createdAt: number;
  imageUrl: string;
  orgId: string;
  isImportant: boolean;
}

export default function BoardCard({
  id,
  title,
  authorId,
  authorName,
  createdAt,
  imageUrl,
  orgId,
  isImportant,
}: BoardCardProps) {
  const { userId } = useAuth();

  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  const { mutate: onImportant, pending: pendingImportant } = useApiMutation(
    api.board.important
  );
  const { mutate: onUnimportant, pending: pendingUnimportant } = useApiMutation(
    api.board.unimportant
  );

  const toggleImportant = () => {
    if (isImportant) {
      onUnimportant({ id }).catch(() => toast.error("Failed to Unimportant"));
    } else {
      onImportant({ id, orgId }).catch(() =>
        toast.error("Failed to add Important")
      );
    }
  };

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          isImportant={isImportant}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={toggleImportant}
          disabled={pendingImportant || pendingUnimportant}
        />
      </div>
    </Link>
  );
}

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
