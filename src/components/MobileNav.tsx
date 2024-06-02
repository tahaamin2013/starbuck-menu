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
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
          <button onClick={toggleOpen}>
            <Menu className="relative z-50 h-5 w-5 text-zinc-700" />
          </button>
        </SheetTrigger>
        <SheetContent className="text-left">
          <SheetHeader className="w-full text-left">
            <SheetTitle>Our Services</SheetTitle>
          </SheetHeader>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Services</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3">
                <span
                  className="border-black border-b w-fit"
                  onClick={() => handleNavigation("/uIUXDesign-For-web")}
                >
                  UI/UX Design For Web
                </span>
                <span
                  className="border-black border-b w-fit"
                  onClick={() => handleNavigation("//UIUX-Design-For-Mobile")}
                >
                  UI/UX Design For Mobile
                </span>
                <span
                  className="border-black border-b w-fit"
                  onClick={() => handleNavigation("/website-development")}
                >
                  Website Development
                </span>
                <span
                  className="border-black border-b w-fit"
                  onClick={() =>
                    handleNavigation("/mobile-application-devlopment")
                  }
                >
                  Mobile Application Development
                </span>
                <span
                  className="border-black border-b w-fit"
                  onClick={() => handleNavigation("/graphicDesigns")}
                >
                  Graphic Design
                </span>
                <span
                  className="border-black border-b w-fit"
                  onClick={() => handleNavigation("/digital-marketing")}
                >
                  Digital Marketing
                </span>
                <span
                  className="border-black border-b w-fit"
                  onClick={() => handleNavigation("/VideoEditing")}
                >
                  Video Editing
                </span>
                <span
                  className="border-black border-b w-fit"
                  onClick={() => handleNavigation("/quickbooks")}
                >
                  QuickBooks
                </span>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-4 flex flex-col gap-4">
            <span
              className="border-black border-b w-fit"
              onClick={() => handleNavigation("/about")}
            >
              About Us
            </span>
            <span
              className="border-black border-b w-fit"
              onClick={() => handleNavigation("/portfolio")}
            >
              Portfolio
            </span>
            <span
              className="border-black border-b w-fit"
              onClick={() => handleNavigation("/careers")}
            >
              Careers
            </span>
            <span
              className="border-black border-b w-fit"
              onClick={() => handleNavigation("/tools")}
            >
              Tools
            </span>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
