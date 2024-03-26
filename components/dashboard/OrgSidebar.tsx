"use client";

import { Button } from "../ui/button";

import { OrganizationSwitcher } from "@clerk/nextjs";
import Link from "next/link";
import { Bookmark, LayoutDashboard } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function OrgSidebar() {
  const searchParams = useSearchParams();
  const importants = searchParams.get("importants");

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      {/* <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src="/assets/images/aicteLogo.png" alt="logo" />
        </div>
      </Link> */}

      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />

      <div className="space-y-1 w-full">
        <Button
          variant={importants ? "ghost" : "secondary"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href="/dashboard">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Team Boards
          </Link>
        </Button>

        <Button
          variant={importants ? "secondary" : "ghost"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link
            href={{
              pathname: "/dashboard",
              query: { importants: true },
            }}
          >
            <Bookmark className="h-4 w-4 mr-2" />
            Important Boards
          </Link>
        </Button>
      </div>
    </div>
  );
}
