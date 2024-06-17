import React from "react";
import Image from "next/image";

interface FeeturedProps {
  imageSrc: string;
  title: string;
  description: string;
  direction: "Right" | "Left";
  bg: string;
  color: string; // Prop for text color
  borderButton: string; // New prop for button border color
}

const Feetured: React.FC<FeeturedProps> = ({
  imageSrc,
  bg,
  color,
  title,
  description,
  direction,
  borderButton,
}) => {
  return (
    <div className="mt-4">
      <div
        className="grid grid-cols-1 mx-3 rounded-xl overflow-x-hidden md:grid-cols-2"
        style={{ backgroundColor: bg }}
      >
        {direction === "Left" ? (
          <>
            <div className="values-image object-contain">
              <Image
                width={3700}
                className="rounded-l-xl w-full md:w-[800px]"
                height={10770}
                src={imageSrc}
                alt={`Starbucks menu with prices featuring ${title} - ${description}`}
              />
            </div>
            <div
              className="text-center flex flex-col justify-center items-center"
              style={{ color: color }} // Set text color
            >
              <h1 className="font-bold mt-3 text-2xl md:text-3xl text-center w-fit md:w-[380px]">
                {title}
              </h1>
              <p className="mt-4 w-fit md:w-[450px] md:pb-0 pb-3">
                {description}
              </p>
              <button
                className="rounded-full px-4 mt-4 py-1 md:mb-0 mb-3"
                style={{ border: `1px solid ${borderButton}` }} // Set button border color
              >
                Order Now
              </button>
            </div>
          </>
        ) : (
          <>
            <div
              className="text-center flex flex-col justify-center items-center"
              style={{ color: color }} // Set text color
            >
              <h1 className="font-bold mt-4 text-2xl md:text-3xl text-center w-full md:w-[380px]">
                {title}
              </h1>
              <p className="mt-4 w-[450px]">{description}</p>
              <button
                className="rounded-full mt-3 px-4 md:mb-0 mb-4 py-1"
                style={{ border: `1px solid ${borderButton}` }} // Set button border color
              >
                Order Now
              </button>
            </div>
            <div className="values-image object-contain">
              <Image
                width={3700}
                className="rounded-l-xl w-full md:h-500p md:w-[800px]"
                height={10770}
                src={imageSrc}
                alt={`Starbucks menu with prices featuring ${title} - ${description}`}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Feetured;
