import { cn } from "@/lib/utils";
import { Bookmark } from "lucide-react";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isImportant: boolean;
  onClick: () => void;
  disabled: boolean;
}

export default function Footer({
  title,
  authorLabel,
  createdAtLabel,
  isImportant,
  onClick,
  disabled,
}: FooterProps) {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();

    onClick();
  };
  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="transition-opacity text-[11px] text-muted-foreground truncate">
        {authorLabel},{createdAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "transition absolute top-3 right-3 text-muted-foreground hover:text-yellow-500",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Bookmark
          className={cn(
            "h-4 w-4",
            isImportant && "fill-yellow-500 text-yellow-500"
          )}
        />
      </button>
    </div>
  );
}
