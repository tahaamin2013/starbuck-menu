'use client'

import Link from "next/link";
import React, { useState, useEffect } from "react";

const SubMenu = () => {
  const [rounded, setRounded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 1) {
        setRounded(true);
      } else {
        setRounded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`border-2 text-center transition-all duration-500 bg-[#f9f9f9] px-9 py-3 sticky top-0 z-40 ${
        rounded ? "rounded-full mx-auto top-[10px] w-fit" : ""
      }`}
    >
      <div
        className={`flex gap-8 transition-all duration-500 font-bold text-sm w-full justify-center sm:justify-start ${
          rounded ? " w-fit sm:justify-center" : ""
        }`}
      >
        <Link href="/">Menu</Link>
        <Link href="/featured">Featured</Link>
      </div>
    </div>
  );
};

export default SubMenu;
