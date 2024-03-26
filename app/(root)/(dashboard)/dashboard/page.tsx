"use client";

import { useOrganization } from "@clerk/nextjs";

import BoardList from "@/components/dashboard/BoardList";
import EmptyOrg from "@/components/dashboard/EmptyOrg";

interface Props {
  searchParams: {
    search?: string;
    importants?: string;
  };
}

export default function DashboardPage({ searchParams }: Props) {
  const { organization } = useOrganization();
  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
}
