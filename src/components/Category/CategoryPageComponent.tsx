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
import SubMenu from "@/components/subMenu";
import Sidebar from "@/components/sidebar";
import { Menu } from "../../../lib/menuItems";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronDown } from "lucide-react";
import { ChevronsDown, Slash } from "lucide-react";
import CategoryLayout from "@/components/StarbucksProduct/CategoryLayout";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CategoryPageComponent: React.FC<{ name: string; link: string }> = ({ name, link }) => {
    const hotCoffeesCategory = Menu.find((category) =>
    category.items.some((item) => item.name === name)
  );

  if (!hotCoffeesCategory) {
    return <div>No {name} category found</div>;
  }

  const hotCoffees = hotCoffeesCategory.items.find(
    (item) => item.name === name
  );
  return (
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
            <BreadcrumbLink href={`/${link}`}>{name}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div>
        <h1 className="font-bold text-2xl mb-10 capitalize">{name}</h1>
        <div className="w-full block sm:grid grid-cols-2 gap-7">
          {hotCoffees?.subItems.map((subItem, index) => (
            <>
              {subItem.products.map((product, productIndex) => (
                <CategoryLayout key={index} item={product} />
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPageComponent;
