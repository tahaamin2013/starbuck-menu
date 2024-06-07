"use client"
import React from "react";
import { FrappuccinoBlendedBeveragess } from "../../../lib/menuItems"; // Adjust the path according to your directory structure
import Image from "next/image";
import Link from "next/link";
import SubMenu from "@/components/subMenu";
import Sidebar from "@/components/sidebar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FrappuccinoBlendedBeverages = () => {
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
                <BreadcrumbLink href="/frappuccino-Blended-Beverages">
                  Frappuccino® Blended Beverages
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-bold text-2xl">Frappuccino® Blended Beverages</h1>

          {FrappuccinoBlendedBeveragess.map((category, index) => (
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
      <Link href={item.link} className="flex flex-row items-center gap-5">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.3, delay }}
          className="flex flex-row items-center gap-5"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={140}
            height={140}
            className="rounded-full"
          />
          <div>
            <h1 className="text-xl">{item.name}</h1>
            <p className="font-bold text-zinc-700">{item.calories} Calories</p>
            <h1 className="font-bold text-black ">Size Options</h1>
            <div className="font-bold pr-4 border-t border-black flex gap-5 text-center">
              <p className="text-[#1e3932] font-bold">
                <h1 className="text-black">Short</h1>${item.shortPrice}
              </p>
              <p className="text-[#1e3932] font-bold">
                <h1 className="text-black">Tall</h1>${item.Tallprice}
              </p>
              <p className="text-[#1e3932] font-bold">
                <h1 className="text-black">Grande</h1>${item.Grandeprice}
              </p>
              <p className="text-[#1e3932] font-bold">
                <h1 className="text-black">Venti</h1>${item.Ventiprice}
              </p>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default FrappuccinoBlendedBeverages;
