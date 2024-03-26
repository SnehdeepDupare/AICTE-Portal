import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Header() {
  const links = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Dashboard",
      route: "/dashboard",
    },
    {
      label: "Contact",
      route: "/contact",
    },
  ];

  return (
    <header className="h-[80px] bg-[#f75700] p-5 fixed top-0 w-full text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/images/aicteLogo.png"
              alt="logo"
              height={72}
              width={72}
            />
            <h2 className="font-semibold text-lg hidden md:block">
              All India Council for Technical Education
            </h2>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          {links.map((link) => (
            <Link href={link.route} key={link.label}>
              {link.label}
            </Link>
          ))}

          <UserButton afterSignOutUrl="/" />
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <div className="flex items-center space-x-2">
                <Image
                  src="/assets/images/aicteLogo.png"
                  alt="logo"
                  height={72}
                  width={72}
                />

                <h2 className="font-bold text-lg ">
                  All India Council for Technical Education
                </h2>
              </div>

              <div className="flex flex-col text-lg mt-10 space-y-6">
                {links.map((link) => (
                  <Link href={link.route} key={link.label}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
