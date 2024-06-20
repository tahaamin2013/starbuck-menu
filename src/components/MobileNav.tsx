"use client";

import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet"; 
import { useState, useEffect } from "react";
import Goy from "./goy";

const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const openSidebar = () => setOpen(true);
  const closeSidebar = () => setOpen(false);
  const toggleOpen = () => setOpen((prev) => !prev);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      closeSidebar();
    }
  };

  const handleNavigation = (href: string) => {
    router.push(href);
    closeSidebar();
  };

  useEffect(() => {
    // Close the sidebar when the pathname changes
    closeSidebar();
  }, [pathname]);

  return (
    <div className="sm:hidden">
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button aria-label="Menu Button" onClick={toggleOpen}>
            <Menu className="relative z-50 h-5 w-5 text-zinc-700" />
          </button>
        </SheetTrigger>
        <SheetContent className="text-left">
          <div className="mt-4 text-lg flex flex-col gap-4">  
            <span className="border-black border-b w-fit">
              <Goy id="Drinks" onClick={closeSidebar}>
                Drinks
              </Goy>
            </span>
            <span className="border-black border-b w-fit">
              <Goy id="Foods" onClick={closeSidebar}>
                Foods
              </Goy>
            </span>
            <span className="border-black border-b w-fit">
              <Goy id="At Home Coffee" onClick={closeSidebar}>
                At Home Coffee
              </Goy>
            </span>
            <span className="border-black border-b w-fit">
              <Goy id="Merchandise" onClick={closeSidebar}>
                Merchandise
              </Goy>
            </span>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileNav;