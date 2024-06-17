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

  // Define a default state for selectedSize
  const defaultSize = subItem?.items?.[0]?.sizes?.[0] || null;
  const [selectedSize, setSelectedSize] = useState(defaultSize);

  // Check if subItem.items exists and has at least one item
  if (!subItem || !subItem.items || subItem.items.length === 0) {
    return null; // or return some fallback UI
  }

  const item = subItem.items[0];

  if (!selectedSize) {
    return null; // or return some fallback UI
  }

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
          <div className="w-44 flex gap-6 justify-between items-center">
            <div className="h-full gap-1 font-bold flex justify-between flex-col">
              <h1>Size:</h1>
              <h1 className="text-white">.</h1>
              <h1>Calories:</h1>
              <h1>Price:</h1>
            </div>
            <div className="flex flex-col gap-1 ">
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="w-fit cursor-pointer outline-none"
                  asChild
                >
                  <div className="border justify-between w-[110] flex gap-1 rounded-lg px-3">
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
                        item.sizes.find((s: any) => s.size === size)
                      )
                    }
                  >
                    {item.sizes.map((sizeOption: any, index: any) => (
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
              <span>{selectedSize.size2}</span>
              <p>{selectedSize.calories}</p>
              <p>{selectedSize.price}</p>
              <p></p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductLayout;
