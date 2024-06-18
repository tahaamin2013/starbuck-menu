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
import { ChevronDown, Search, X } from "lucide-react";
import { ChevronsDown, Slash } from "lucide-react";
import CategoryLayout from "@/components/StarbucksProduct/CategoryLayout";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CategoryPageComponent: React.FC<{ name: string; link: string }> = ({
  name,
  link,
}) => {
  // Search
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredMenu, setFilteredMenu] = useState<any[]>(Menu);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredMenu(Menu);
    } else {
      const filteredItems = Menu.map((category) => {
        if (!category || !category.category) {
          return null;
        }

        const filteredCategoryItems = category.items.filter((item) => {
          if (!item || !item.name) {
            return false;
          }
          return item.name.toLowerCase().includes(query);
        });

        const filteredSubItems = category.items.reduce(
          (acc: any, curr: any) => {
            if (curr.subItems) {
              const filteredSubItems = curr.subItems.reduce(
                (subAcc: any, subItem: any) => {
                  if (!subItem || !subItem.products) {
                    return subAcc;
                  }
                  const filteredItems = subItem.products.filter(
                    (subSubItem: any) => {
                      if (!subSubItem || !subSubItem.name) {
                        return false;
                      }
                      return subSubItem.name.toLowerCase().includes(query);
                    }
                  );
                  if (filteredItems.length > 0) {
                    return [...subAcc, { ...subItem, products: filteredItems }];
                  }
                  return subAcc;
                },
                []
              );
              return [...acc, ...filteredSubItems];
            }
            return acc;
          },
          []
        );

        if (filteredCategoryItems.length > 0 || filteredSubItems.length > 0) {
          return {
            ...category,
            items: filteredCategoryItems,
            subItems: filteredSubItems,
          };
        }

        return null;
      }).filter((category) => category !== null);

      setFilteredMenu(filteredItems);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredMenu(Menu);
  };

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
        <div className="flex w-full justify-between">
          <h1 className="font-bold text-2xl mb-10 capitalize">{name}</h1>
          <div className="flex justify-between items-center border-b mb-3 flex-col md:flex-row">
            <h1 className="font-bold text-2xl mb-2">Menu</h1>
            <div className="mb-5 relative">
              <Input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search..."
                className="pr-10"
              />
              {searchQuery.length > 0 ? (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 outline-none focus:outline-none text-gray-500 hover:text-gray-700"
                >
                  <X size={26} />
                </button>
              ) : (
                <Search
                  size={21}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          {hotCoffees?.subItems.map((subItem, index) => (
            <div className="flex flex-col">
              <h3 className="font-semibold text-xl border-b pb-1 mb-5">
                {subItem.category}
              </h3>
              <div className="w-full block sm:grid grid-cols-2 gap-7">
                {subItem.products.map((product, productIndex) => (
                  <CategoryLayout key={index} item={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPageComponent;
