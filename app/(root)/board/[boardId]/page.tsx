import Canvas from "@/components/board/Canvas";
import Loading from "@/components/board/Loading";
import Room from "@/components/Room";

interface Props {
  params: {
    boardId: string;
  };
}

export default function BoardPage({ params }: Props) {
  const boardId = params.boardId;

  return (
    <Room roomId={boardId} fallback={<Loading />}>
      <Canvas boardId={boardId} />
    </Room>
  );
}
