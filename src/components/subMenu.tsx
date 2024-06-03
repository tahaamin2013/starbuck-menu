import Link from "next/link";
import React from "react";

const SubMenu = () => {
  return (
    <div className="border-2 bg-[#f9f9f9] px-9 py-3 sticky top-0 z-40">
      <div className="flex gap-8 font-bold text-sm w-full justify-center sm:justify-start">
        <Link href="/">Menu</Link>
        <Link href="/featured">Featured</Link>
        <Link href="/">Previous</Link>
        <Link href="/">Favorites</Link>
      </div>
    </div>
  );
};

export default SubMenu;
