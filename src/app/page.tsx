"use client";

import React, { useState } from "react";
import { Menu } from "@/lib/menuItems";
import { Search, X } from "lucide-react";
import CategoryLayout from "../components/StarbucksProduct/CategoryLayout";
import { Input } from "@/src/components/ui/input";
import ProductLayout from "../components/StarbucksProduct/ProductLayout";

const MenuPage = () => {
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

  return (
    <>
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

      {filteredMenu.length === 0 ? (
        <p className="text-xl text-center mb-[400px]">No results found.</p>
      ) : (
        filteredMenu.map((category: any) => (
          <div key={category.category}>
            <h2 className="text-2xl font-bold mt-6 mb-3">
              {category.category}
            </h2>
            <div className="grid grid-cols-1">
              <div className="grid grid-cols-1 border-t md:grid-cols-2 gap-x-[50px] w-full pt-6 gap-y-[50px]">
                {category.items &&
                  category.items.length > 0 &&
                  category.items.map((item: any, idx: any) => (
                    <CategoryLayout key={idx} item={item} delay={idx * 0.1} />
                  ))}
              </div>
              {category.subItems &&
                category.subItems.length > 0 &&
                category.subItems.map((subItem: any, subIdx: any) => (
                  <div key={subIdx} className="grid-cols-1">
                    <h3 className="text-xl border-b pb-1 font-bold mt-4 mb-2">
                      {subItem.category}
                    </h3>
                    <div className="grid grid-cols-2">

                    {subItem.products.map((product: any, prodIdx: any) => (
                      <ProductLayout
                      key={prodIdx}
                      subItem={product}
                      delay={prodIdx * 0.1}
                      />
                    ))}
                  </div>
                  </div>
                ))}
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default MenuPage;
