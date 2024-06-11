"use client";
import React, { useState } from "react";
import { Lunchs } from "../../../lib/menuItems"; // Adjust the path according to your directory structure
import Image from "next/image";
import Link from "next/link";
import SubMenu from "@/components/subMenu";
import Sidebar from "@/components/sidebar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsDown, Slash } from "lucide-react";

const Lunch = () => {
  return (
    <div>
      <SubMenu />
      <div className="flex px-5 md:px-[90px] my-9">
        <Sidebar />
        <div className="ml-5 w-full">
          <Breadcrumb className="mb-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Menu</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/lunch">Lunch</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-bold text-2xl">Lunch</h1>
          {Lunchs.map((category, index) => (
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] w-full bg-blue border-t pt-6 gap-y-[50px]">
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
            className="rounded-full max-w-[120rem] max-h-[118px]"
          />
        </Link>
        <div>
          <h1 className="text-xl mb-1 w-full md:w-[340px]">{item.name}</h1>
          <div className="w-44 flex gap-3 items-center">
            <div className="h-full gap-1 font-bold flex justify-between flex-col">
              <h1>Price:</h1>
              <h1>Calories:</h1>
            </div>
            <div className="flex flex-col mt-1 gap-1 ">
              <p>{item.price}</p>
              <p>{item.calories}</p>
              <p></p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Lunch;
