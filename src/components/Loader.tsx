"use client";

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
          <video
            src="/loader.mp4"
            width={500}
            height={500}
            autoPlay
            loop
            muted
          ></video>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
