import Feetured from "@/components/Featured";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl md:text-6xl text-center mt-4">
        We&lsquo;re on summertime
      </h1>

      <Feetured
        borderButton="#ececec"
        color="#ececec"
        direction="Left"
        imageSrc="/1.jpg"
        title="            New Summer-Berry Starbucks Refreshers® Beverages
"
        description="            Introducing the official drink of summer—a mix of berry 
            flavors over bursting raspberry flavored pearls, enjoyed alon
           or with lemonade or coconutmilk."
        bg="#0021db"
      />
      <Feetured
        borderButton="#1e3932"
        color="#1e3932"
        direction="Right"
        imageSrc="/2.webp"
        title="            White Chocolate Macadamia Cream Cold Brew

"
        description="Smooth and lush, our White Chocolate Macadamia Cream Cold Brew is topped with toasted cookie crumbles.
"
        bg="#d6e342"
      />
      <Feetured
        borderButton="#1e3932"
        color="#1e3932"
        direction="Left"
        imageSrc="/3.webp"
        title="            Caramel Ribbon Crunch Frappuccino® Blended Beverage

"
        description="Caramel syrup blended with coffee, milk and ice, topped with a dark caramel drizzle.
"
        bg="#f8cdd1"
      />
      <Feetured
        borderButton="#ececec"
        color="#ececec"
        direction="Right"
        imageSrc="/4.jpg"
        title="            New Summer-Berry Starbucks Refreshers® Beverages
"
        description="            Introducing the official drink of summer—a mix of berry 
            flavors over bursting raspberry flavored pearls, enjoyed alon
           or with lemonade or coconutmilk."
        bg="#0021db"
      />
      <Feetured
        borderButton="#1e3932"
        color="#1e3932"
        direction="Left"
        imageSrc="/5.webp"
        title="            New Pineapple Cloud Cake

"
        description="           An airy cake layered with lightweight pineapple cream and pineapple spread with whole fruit pieces.
"
        bg="#fad4aa"
      />
    </div>
  );
};

export default Featured;
