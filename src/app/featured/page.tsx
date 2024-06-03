import Feetured from "@/components/Featured";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div>
      <h1 className="font-bold text-6xl text-center mt-4">
        We're on summertime
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
        title="            New Summer-Berry Starbucks Refreshers® Beverages
"
        description="            Introducing the official drink of summer—a mix of berry 
            flavors over bursting raspberry flavored pearls, enjoyed alon
           or with lemonade or coconutmilk."
        bg="#d6e342"
      />
      <Feetured
        borderButton="#1e3932"
        color="#1e3932"
        direction="Left"
        imageSrc="/3.webp"
        title="            New Summer-Berry Starbucks Refreshers® Beverages
"
        description="            Introducing the official drink of summer—a mix of berry 
            flavors over bursting raspberry flavored pearls, enjoyed alon
           or with lemonade or coconutmilk."
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
        title="            New Summer-Berry Starbucks Refreshers® Beverages
"
        description="            Introducing the official drink of summer—a mix of berry 
            flavors over bursting raspberry flavored pearls, enjoyed alon
           or with lemonade or coconutmilk."
        bg="#fad4aa"
      />
    </div>
  );
};

export default Featured;
