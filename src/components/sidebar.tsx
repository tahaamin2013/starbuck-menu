import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <h1 className="font-bold text-xl">Drinks</h1>
      <div className="flex flex-col gap-3 mt-2 text-zinc-700">
        <Link href="/sdf" className="text-sm">
          Hot Cofees{" "}
        </Link>
        <Link href="/sdf" className="text-sm">
          Cold Cofees{" "}
        </Link>
        <Link href="/sdf" className="text-sm">
          StarBucks <br /> Refreshers <br /> Beverages
        </Link>
        <Link href="/sdf" className="text-sm">
          Frappuccino <br /> Blended Beverages
        </Link>
        <Link href="/sdf" className="text-sm">
          Iced Tea and <br /> Lemonade
        </Link>
        <Link href="/sdf" className="text-sm">
          Hot Teas
        </Link>
        <Link href="/sdf" className="text-sm">
          Milk, Juice & More
        </Link>
        <Link href="/sdf" className="text-sm">
          Bottled Beverages
        </Link>
      </div>
      <h1 className="font-bold text-xl mt-7">Food</h1>
      <div className="flex flex-col gap-3 mt-2 text-zinc-700">
        <Link href="/sdf" className="text-sm">
          Hot Breakfast
        </Link>
        <Link href="/sdf" className="text-sm">
          Oatmeal & Yogurt
        </Link>
        <Link href="/sdf" className="text-sm">
          Bakery
        </Link>
        <Link href="/sdf" className="text-sm">
          Lunch
        </Link>
        <Link href="/sdf" className="text-sm">
          Snacks & Sweets
        </Link>
      </div>
      <h1 className="font-bold text-xl mt-7">At Home Coffee</h1>
      <div className="flex flex-col gap-3 mt-2 text-zinc-700">
        <Link href="/sdf" className="text-sm">
          Whole Bean
        </Link>
        <Link href="/sdf" className="text-sm">
          VIA Instant
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
