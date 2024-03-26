import { Hint } from "../Hint";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface Props {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
}

export default function UserAvatar({
  src,
  name,
  fallback,
  borderColor,
}: Props) {
  return (
    <Hint label={name || "Teammate"} side="bottom" sideOffset={18}>
      <Avatar className="h-8 w-8 border-2" style={{ borderColor }}>
        <AvatarImage src={src} />

        <AvatarFallback className="text-sx font-semibold">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
}
