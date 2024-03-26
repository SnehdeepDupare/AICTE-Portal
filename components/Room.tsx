"use client";

import { ReactNode } from "react";
import { ClientSideSuspense } from "@liveblocks/react";
import { LiveMap, LiveList, LiveObject } from "@liveblocks/client";

import { Layer } from "@/types/canvas";
import { RoomProvider } from "@/liveblocks.config";

interface Props {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}

export default function Room({ children, roomId, fallback }: Props) {
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{ cursor: null, selection: [] }}
      initialStorage={{
        layers: new LiveMap<string, LiveObject<Layer>>(),
        layerIds: new LiveList(),
      }}
    >
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
