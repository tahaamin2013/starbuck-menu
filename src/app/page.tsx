"use client";
import { useState } from "react";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import Link from "next/link";
import {
  menuItems,
  HotCofees,
  ColdCofees,
  StarbucksRefreshersBeberagese,
  FrappuccinoBlendedBeveragess,
  IcedTeaAndLemonades,
  HotTeas,
  MilkJuceMore,
  Yougurt,
  Tumblerss,
  Mugss,
  WaterBottless,
  Others,
  Bakerys,
  Lunchs,
  HotBreakFasts,
  WholeBeans,
  VIAInstants,
  ColdCupss,
} from "../../lib/menuItems";
import SubMenu from "@/components/subMenu";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMenuItems, setFilteredMenuItems] = useState(menuItems);

  const filteredWaterBottles = WaterBottless.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const filteredColdCups = ColdCupss.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const filteredHotCoffees = HotCofees.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const filteredColdCoffees = ColdCofees.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query === "") {
      setFilteredMenuItems(menuItems);
    } else {
      const filteredItems = menuItems
        .map((category) => {
          if (category.category.toLowerCase().includes(query)) {
            return category;
          }

          const items = category.items.filter((item) =>
            item.name.toLowerCase().includes(query)
          );
          return {
            ...category,
            items: items,
          };
        })
        .filter((category) => category.items.length > 0);
      setFilteredMenuItems(filteredItems);
    }
  };

  return (
    <>
      <SubMenu />
      <div className="flex px-5 md:px-[90px] my-9">
        <Sidebar />
        <div className="ml-5 w-full">
          <div className="flex justify-between items-center border-b mb-3 flex-col md:flex-row">
            <h1 className="font-bold text-2xl mb-2">Menu</h1>
            <div className="mb-5">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search..."
                className="outline-none border rounded-xl px-3 py-2 border-black/45 "
              />
            </div>
          </div>

          {searchQuery === "" &&
            filteredMenuItems.map((category, index) => (
              <CategorySection key={index} category={category} />
            ))}

          {searchQuery !== "" && filteredWaterBottles.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Water Bottles",
                items: filteredWaterBottles[0].items,
              }}
            />
          )}

          {searchQuery !== "" && filteredColdCups.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Cold Cups",
                items: filteredColdCups[0].items,
              }}
            />
          )}

          {searchQuery !== "" && filteredHotCoffees.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Hot Coffees",
                items: filteredHotCoffees[0].items,
              }}
            />
          )}

          {searchQuery !== "" && filteredColdCoffees.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Cold Coffees",
                items: filteredColdCoffees[0].items,
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

function CategorySection({ category }) {
  return (
    <div className="mt-[36px]">
      <h1 className="font-bold text-2xl mb-4" id={category.category}>
        {category.category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 border-t pt-6 gap-y-[50px]">
        {category.items.map((item, idx) => (
          <AnimatedLink key={idx} item={item} delay={idx * 0.1} />
        ))}
      </div>
    </div>
  );
}

function CategoryWithItems({ category }) {
  return (
    <div className="mt-[36px]">
      <h1 className="font-bold text-2xl mb-4" id={category.category}>
        {category.category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] w-full bg-blue pt-6 gap-y-[50px]">
        {category.items.map((item, idx) => (
          <AnimatedLink key={idx} item={item} delay={idx * 0.1} />
        ))}
      </div>
    </div>
  );
}

function AnimatedLink({ item, delay }) {
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
            width={120}
            height={120}
            className="rounded-full"
          />
          <div>
            <h1 className="text-xl w-full lg:w-[310px]">{item.name}</h1>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
