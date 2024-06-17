 "use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ChevronsDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Adjust this path based on your project structure

interface SizeOption {
  size: string;
}

interface Item {
  image: string;
  name: string;
  price: string;
  size: string;
  sizes: SizeOption[];
}

interface Category {
  category: string;
  items: Item[];
}

interface JaldiProps {
  category: Category;
}

const Jaldi: React.FC<JaldiProps> = ({ category }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="mt-[36px]">
      <h1 className="font-bold text-2xl mb-4" id={category.category}>
        {category.category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] w-full bg-blue pt-6 gap-y-[50px]">
        {category.items && category.items.length > 0 ? (
          category.items.map((item, idx) => (
            <div key={idx} className="flex gap-8 items-center">
              <div className="flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-600">{item.price}</p>
                <p className="text-gray-600">{item.size} Calories</p>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className="w-fit cursor-pointer outline-none"
                    asChild
                  >
                    <div className="border justify-between w-[110px] flex gap-1 rounded-lg px-3">
                      {item.sizes[0].size} <ChevronsDown className="w-4" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mt-3">
                    <DropdownMenuLabel>Size Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={item.sizes[0].size}
                      onValueChange={(size) => {
                        // You can implement size change logic here if needed
                      }}
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
              </div>
            </div>
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>
    </div>
  );
};

export default Jaldi;
