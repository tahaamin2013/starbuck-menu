"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HotCofees } from "../../../lib/menuItems"; // Adjust the path according to your directory structure
import SubMenu from "@/components/subMenu";
import Sidebar from "@/components/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronDown } from "lucide-react";
import { ChevronsDown, Slash } from "lucide-react";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HotCofee = () => {
  return (
    <div>
      <SubMenu />

      <div className="flex px-5 pl-5 md:pl-[30px] my-9">
        <Sidebar />
        <div className="w-full">
          <Breadcrumb className="mb-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Menu</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/hot-cofees">Hot Cofees</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-bold text-2xl">Hot Cofees</h1>

          {HotCofees.map((category, index) => (
            <CategorySection key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

function CategorySection({ category }: any) {
  return (
    <div className="mt-[36px]">
      <h1 className="font-bold text-2xl mb-4">{category.category}</h1>
      <div className="flex flex-wrap gap-x-[40px] gap-y-[50px] w-full border-t pt-6">
        {category.items.map((item: any, idx: any) => (
          <AnimatedLink key={idx} item={item} delay={idx * 0.1} />
        ))}
      </div>
    </div>
  );
}

function AnimatedLink({ item, delay }: any) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.3, delay }}
      className="flex gap-8 flex-col md:flex-row"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.3, delay }}
        className="flex flex-row items-center gap-5"
      >
        <Link href={item.link} className="flex flex-row items-center gap-5">
          <Image
            src={item.image}
            alt={item.name}
            width={118}
            height={118}
            className="rounded-full"
          />
        </Link>
        <div>
          <h1 className="text-xl mb-1">{item.name}</h1>
          <div className="w-44 flex gap-6 justify-between items-center">
            <div className="h-full font-bold flex justify-between flex-col">
              <h1>Size:</h1>
              <h1>Calories:</h1>
              <h1>Price:</h1>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="w-fit cursor-pointer outline-none"
                  asChild
                >
                  <div className="border justify-between w-[110px] flex gap-1 rounded-lg px-3">
                    {selectedSize.size} <ChevronsDown className="w-4" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-3">
                  <DropdownMenuLabel>Size Options</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={selectedSize.size}
                    onValueChange={(size) =>
                      setSelectedSize(item.sizes.find((s)  => s.size === size))
                    }
                  >
                    {item.sizes.map((sizeOption, index) => (
                      <DropdownMenuRadioItem
                        className="cursor-pointer outline-none"
                        key={index}
                        value={sizeOption.size}
                      >
                        {sizeOption.size}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <p>{selectedSize.calories}</p>
              <p>
                <span>{selectedSize.price}</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HotCofee;
