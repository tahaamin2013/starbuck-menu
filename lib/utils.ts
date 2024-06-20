import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// lib/utils.ts

import { Menu, Product as ProductType } from "@/lib/menuItems";

export const findProductByName = (name: string): ProductType | null => {
  for (const category of Menu) {
    for (const item of category.items) {
      for (const subItem of item.subItems) {
        const product = subItem.products.find((product: ProductType) => product.name === name);
        if (product) return product;
      }
    }
  }
  return null;
};
