"use client";
// components/GoTopButton.js
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Merge } from "lucide-react";

const GoTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 200;

    setIsVisible(scrollY > scrollThreshold);
  };

  useEffect(() => {
    const button = document.getElementById("goTopBtn");

    button?.addEventListener("click", goToTop);
    window.addEventListener("scroll", handleScroll);

    return () => {
      button?.removeEventListener("click", goToTop);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, scale: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, scale: 0, y: 50 });
    }
  }, [isVisible, controls]);

  return (
    <motion.button
      id="goTopBtn"
      className="fixed bottom-[7px] right-4 px-3 text-sm bg-primary text-white p-2 rounded-md cursor-pointer"
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <Merge size={40} />
    </motion.button>
  );
};

export default GoTopButton;
