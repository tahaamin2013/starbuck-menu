"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading with setTimeout
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="flex justify-center items-center h-screen w-screen">
          <Image
            src="/Loader.gif"
            width={500}
            height={500}
            alt="Loader"
          ></Image>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
