'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronsDown } from "lucide-react";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProductLayout = ({ subItem, delay }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const hasSizes = subItem.sizes && subItem.sizes.length > 0;
  const initialSize = hasSizes ? subItem.sizes[0] : null;
  const [selectedSize, setSelectedSize] = useState(initialSize);

  return (
    <Link href={subItem.link}>
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
          className="flex flex-row mb-2 items-center gap-5"
        >
          <Image
            src={subItem.image}
            alt={`Starbucks menu with prices featuring a ${subItem.name}`}
            width={118}
            height={118}
            className="rounded-full max-w-[120rem] max-h-[118px]"
          />
          <div>
            <h1 className="text-xl mb-1 w-full md:w-[340px]">{subItem.name}</h1>
            <div className="w-44 flex gap-6 justify-between items-center">
              <div className="h-full gap-1 font-bold flex justify-between flex-col">
                {hasSizes && (
                  <>
                    <h1>Size:</h1>
                    <h1 className="text-white">.</h1>
                  </>
                )}
                {hasSizes || subItem.calories !== undefined ? (
                  <h1>Calories:</h1>
                ) : null}
                {hasSizes || subItem.price !== undefined ? (
                  <h1>Price:</h1>
                ) : null}
              </div>
              <div className="flex flex-col gap-1">
                {hasSizes ? (
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
                          setSelectedSize(
                            subItem.sizes.find((s: any) => s.size === size)
                          )
                        }
                      >
                        {subItem.sizes.map((sizeOption: any, index: any) => (
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
                ) : null}
                <span>{hasSizes && selectedSize ? selectedSize.size2 : ''}</span>
                {subItem.calories !== undefined ? (
                  <p>{hasSizes ? selectedSize.calories : subItem.calories}</p>
                ) : null}
                {subItem.price !== undefined ? (
                  <p>{hasSizes ? selectedSize.price : subItem.price}</p>
                ) : null}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default ProductLayout;
