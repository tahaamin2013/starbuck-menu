"use client";

import Sidebar from "@/components/sidebar";
import SubMenu from "@/components/subMenu";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Bakerys,
  ColdCofees,
  ColdCupss,
  FrappuccinoBlendedBeveragess,
  HotBreakFasts,
  HotCofees,
  HotTeas,
  IcedTeaAndLemonades,
  Lunchs,
  MilkJuceMore,
  Mugss,
  Others,
  StarbucksRefreshersBeberagese,
  Tumblerss,
  VIAInstants,
  WaterBottless,
  WholeBeans,
  Yougurt,
  menuItems,
} from "../../lib/menuItems";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMenuItems, setFilteredMenuItems] = useState(menuItems);

  const handleSearch = (event: any) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query === "") {
      setFilteredMenuItems(menuItems);
    } else {
      const filteredItems = menuItems
        .map((category) => {
          // Check if the category matches the query
          if (category.category.toLowerCase().includes(query)) {
            return category;
          }

          // Filter items within the category
          const items = category.items.filter((item) =>
            item.name.toLowerCase().includes(query)
          );

          // Return the category with the filtered items
          return {
            ...category,
            items: items,
          };
        })
        .filter((category) => category.items.length > 0); // Remove empty categories
      setFilteredMenuItems(filteredItems);
    }
  };
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
  const filteredHotTeas = HotTeas.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const filteredMilkJuceMore = MilkJuceMore.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const filteredVIAInstants = VIAInstants.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const filteredWholeBeans = WholeBeans.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const filteredHotBreakFasts = HotBreakFasts.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const filteredLunchs = Lunchs.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const filteredOthers = Others.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const filteredBakerys = Bakerys.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const filteredTumblerss = Tumblerss.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const filteredMugss = Mugss.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const filteredYougurt = Yougurt.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const filteredIcedTeaAndLemonades = IcedTeaAndLemonades.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const filteredStarbucksRefreshersBeberagese =
    StarbucksRefreshersBeberagese.map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })).filter((category) => category.items.length > 0);

  const filteredFrappuccinoBlendedBeveragess = FrappuccinoBlendedBeveragess.map(
    (category) => ({
      ...category,
      items: category.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })
  ).filter((category) => category.items.length > 0);

  const filteredColdCoffees = ColdCofees.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

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
                className="outline-none border rounded-xl px-3 py-2 border-black/45"
              />
            </div>
          </div>
          {filteredMenuItems.map((category, index) => (
            <CategorySection key={index} category={category} />
          ))}
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

          {searchQuery !== "" && filteredMilkJuceMore.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Hot Coffees",
                items: filteredMilkJuceMore[0].items,
              }}
            />
          )}
          {searchQuery !== "" && filteredHotTeas.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Hot Coffees",
                items: filteredHotTeas[0].items,
              }}
            />
          )}
          {searchQuery !== "" && filteredOthers.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Hot Coffees",
                items: filteredOthers[0].items,
              }}
            />
          )}
          {searchQuery !== "" && filteredBakerys.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Hot Coffees",
                items: filteredBakerys[0].items,
              }}
            />
          )}
          {searchQuery !== "" && filteredTumblerss.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Hot Coffees",
                items: filteredTumblerss[0].items,
              }}
            />
          )}
          {searchQuery !== "" && filteredMugss.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Hot Coffees",
                items: filteredMugss[0].items,
              }}
            />
          )}
          {searchQuery !== "" && filteredLunchs.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Hot Coffees",
                items: filteredLunchs[0].items,
              }}
            />
          )}
          {searchQuery !== "" && filteredYougurt.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Hot Coffees",
                items: filteredYougurt[0].items,
              }}
            />
          )}
          {searchQuery !== "" && filteredWholeBeans.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Hot Coffees",
                items: filteredWholeBeans[0].items,
              }}
            />
          )}
          {searchQuery !== "" && filteredVIAInstants.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Hot Coffees",
                items: filteredVIAInstants[0].items,
              }}
            />
          )}
          {searchQuery !== "" && filteredHotBreakFasts.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Hot Coffees",
                items: filteredHotBreakFasts[0].items,
              }}
            />
          )}
          {searchQuery !== "" &&
            filteredFrappuccinoBlendedBeveragess.length > 0 && (
              <CategoryWithItems
                category={{
                  category: "Hot Coffees",
                  items: filteredFrappuccinoBlendedBeveragess[0].items,
                }}
              />
            )}
          {searchQuery !== "" && filteredIcedTeaAndLemonades.length > 0 && (
            <CategoryWithItems
              category={{
                category: "Hot Coffees",
                items: filteredIcedTeaAndLemonades[0].items,
              }}
            />
          )}
          {searchQuery !== "" &&
            filteredStarbucksRefreshersBeberagese.length > 0 && (
              <CategoryWithItems
                category={{
                  category: "Hot Coffees",
                  items: filteredStarbucksRefreshersBeberagese[0].items,
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

function CategorySection({ category }: any) {
  return (
    <div className="mt-[36px]">
      <h1 className="font-bold text-2xl mb-4" id={category.category}>
        {category.category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 border-t pt-6 gap-y-[50px]">
        {category.items.map((item: any, idx: any) => (
          <AnimatedLink key={idx} item={item} delay={idx * 0.1} />
        ))}
      </div>
    </div>
  );
}
function CategoryWithItems({ category }: any) {
  return (
    <div className="mt-[36px]">
      <h1 className="font-bold text-2xl mb-4" id={category.category}>
        {category.category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] w-full bg-blue pt-6 gap-y-[50px]">
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
