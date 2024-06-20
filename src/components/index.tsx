"use client";
import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/src/components/ui/button";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { ChevronDown, MessagesSquare } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Goy from "./goy";

const Navbar = () => {
  const isAuthenticated = false;
  const [showDescription, setShowDescription] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    setIsDropdownOpen(false);
    router.push(href);
  };

  useEffect(() => {
    const refreshLink = document.getElementById("refreshLink");
    const handleRefreshClick = () => {
      location.reload();
    };

    if (refreshLink) {
      refreshLink.addEventListener("click", handleRefreshClick);
    }

    return () => {
      if (refreshLink) {
        refreshLink.removeEventListener("click", handleRefreshClick);
      }
    };
  }, []);

  const handleMouseEnter = (description: any) => {
    setShowDescription(description);
  };

  const handleMouseLeave = () => {
    setShowDescription(null);
  };

  return (
    <nav className=" border-b-2 shadow-sm pt-3 pb-1 flex items-center inset-x-0 top-0 z-30 w-full border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-zinc-200">
          <Link href="/" className="flex text-2xl gap-4 z-40 font-bold">
            <Image
              src="/logo.svg"
              alt="Starbucks icon"
              width={80}
              height={80}
              className="mt-1"
            ></Image>
          </Link>
          <MobileNav />
          <div className="hidden text-lg gap-5 items-center space-x-4 sm:flex">
            <Goy id="Drinks">Drinks</Goy>
            <Goy id="Foods">Food </Goy>
            <Goy id="At Home Coffee">At Home Coffee</Goy>
            <Goy id="Merchandise">Merchandise </Goy>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
