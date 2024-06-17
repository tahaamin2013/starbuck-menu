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
import { Menu } from "../../../../lib/menuItems";
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

const HotCofee = () => {
  const hotCoffeesCategory = Menu.find((category) =>
    category.items.some((item) => item.name === "Hot Coffees")
  );

  if (!hotCoffeesCategory) {
    return <div>No Hot Coffees category found</div>;
  }

  const hotCoffees = hotCoffeesCategory.items.find(
    (item) => item.name === "Hot Coffees"
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
            <BreadcrumbLink href="/hot-coffees">Hot Coffees</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* {HotCofees.map((category: any, index: any) => (
            <CategoryLayout key={index} category={category} />
          ))} */}

      <div>
        <h1 className="font-bold text-2xl mb-2">Menu</h1>
        <h2 className="font-bold text-xl mb-2">Hot Coffees</h2>
        {hotCoffees?.subItems.map((subItem, index) => (          <div key={index}>
            <h3 className="font-semibold text-lg">{subItem.category}</h3>
            <ul>
              {subItem.products.map((product, productIndex) => (
                <li key={productIndex}>
                  <h4>{product.name}</h4>
                  <img src={product.image} alt={product.name} />
                  <ul>
                    {/* {product.sizes.map((size, sizeIndex) => (
                    <li key={sizeIndex}>
                      {size.size} - {size.size2} - {size.calories} calories - {size.price}
                    </li>
                  ))} */}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

// import React from "react";
// import { Menu } from "../../../../lib/menuItems";

// const HotCoffees = () => {
//   // Find the "Hot Coffees" category
//   const hotCoffeesCategory = Menu.find((category) => category.items.some(item => item.name === "Hot Coffees"));

//   if (!hotCoffeesCategory) {
//     return <div>No Hot Coffees category found</div>;
//   }

//   const hotCoffees = hotCoffeesCategory.items.find(item => item.name === "Hot Coffees");

//   return (
//     <div>
//       <h1 className="font-bold text-2xl mb-2">Menu</h1>
//       <h2 className="font-bold text-xl mb-2">Hot Coffees</h2>
//       {hotCoffees?.subItems.map((subItem, index) => (
//         <div key={index}>
//           <h3 className="font-semibold text-lg">{subItem.category}</h3>
//           <ul>
//             {subItem.products.map((product, productIndex) => (
//               <li key={productIndex}>
//                 <h4>{product.name}</h4>
//                 <img src={product.image} alt={product.name} />
//                 <ul>
//                   {/* {product.sizes.map((size, sizeIndex) => (
//                     <li key={sizeIndex}>
//                       {size.size} - {size.size2} - {size.calories} calories - {size.price}
//                     </li>
//                   ))} */}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HotCoffees;
