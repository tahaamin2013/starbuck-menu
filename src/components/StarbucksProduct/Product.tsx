// components/Product.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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
import { findProductByName } from "@/lib/utils";
import { Product as ProductType, Size } from "@/lib/menuItems";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface ProductProps {
  name: string;
  delay?: number;
}

const Product: React.FC<ProductProps> = ({ name, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const foundProduct = findProductByName(name);
    setProduct(foundProduct || null);
  }, [name]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const { image, link, sizes, size, calories, price } = product;

  const hasSizes = sizes && sizes.length > 0;
  const initialSize = hasSizes ? sizes[0] : null;
  const [selectedSize, setSelectedSize] = useState<Size | null>(initialSize);

  return (
    <Link href={`/articles/${link}`}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.3, delay }}
        className="flex gap-8 flex-col mb-8 md:mb-1 md:flex-row"
      >
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.3, delay }}
          className="flex flex-row mb-6 items-center gap-5"
        >
          {/* <Image
            src={image}
            alt={`Starbucks menu with prices featuring a ${name}`}
            width={118}
            height={118}
            className="rounded-full max-w-[120rem] max-h-[118px]"
          /> */}
          <div>
            <h1 className="text-xl mb-1 w-full md:w-[260px]">{name}</h1>
            <div className="w-44 flex gap-6 justify-between items-center">
              <div className="h-full gap-1 font-bold flex justify-between flex-col">
                {hasSizes && (
                  <>
                    <h1>Size:</h1>
                    <h1 className="text-white">.</h1>
                  </>
                )}
                {size && <h1>Size:</h1>}
                {(hasSizes || calories !== undefined) && <h1>Calories:</h1>}
                {(hasSizes || price !== undefined) && <h1>Price:</h1>}
              </div>
              <div className="flex flex-col gap-1">
                {hasSizes ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className="w-fit cursor-pointer outline-none"
                      asChild
                    >
                      <div className="border justify-between w-[110px] flex gap-1 rounded-lg px-3">
                        {selectedSize?.size} <ChevronsDown className="w-4" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 mt-3">
                      <DropdownMenuLabel>Size Options</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup
                        value={selectedSize?.size}
                        onValueChange={(size) =>
                          setSelectedSize(
                            sizes.find((s) => s.size === size) || null
                          )
                        }
                      >
                        {sizes.map((sizeOption, index) => (
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
                {hasSizes && selectedSize ? (
                  <>
                    <span>{selectedSize.size2}</span>
                    <p>{selectedSize.calories}</p>
                    <p>{selectedSize.price}</p>
                  </>
                ) : (
                  <>
                    {calories !== undefined && <p>{calories}</p>}
                    {size !== undefined && <p>{size}</p>}
                    {price !== undefined && <p>{price}</p>}
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Product;
