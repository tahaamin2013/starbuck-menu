import Link from "next/link";
import React from "react";
import { Menu } from "../../lib/menuItems";

const Sidebar = () => {
  return (
    <div className="hidden lg:block pr-[60px]">
      <h1 className="font-bold text-xl">Drinks</h1>
      <div className="flex flex-col gap-3 text-sm mt-2 text-zinc-700">
        
      {Menu.length === 0 ? (
        <p className="text-xl text-center mb-[400px]">No results found.</p>
      ) : (
        Menu.map((category: any) => (
          <div key={category.category}>
            <h2 className="text-2xl font-bold mt-6 mb-3">{category.category}</h2>
            <div className="pt-6 gap-y-[50px]">
              {category.items &&
                category.items.length > 0 &&
                category.items.map((item: any, idx: any) => (
                    <h1>{item.name}</h1>
                ))}
            </div>
          </div>
        ))
      )}
          {/* <Link
            href="/hot-coffees"
            className="text-gray-600 hover:text-gray-900"
          >
            Hot Coffees
          </Link> */}
      </div>
    </div>
  );
};

export default Sidebar;
// import Link from "next/link";
// import React from "react";

// const Sidebar = () => {
//   return (
//     <div className="hidden lg:block pr-[60px]">
//       <h1 className="font-bold text-xl">Drinks</h1>
//       <div className="flex flex-col gap-3 text-sm mt-2 text-zinc-700">
        
        
//           <Link
//             href="/hot-coffees"
//             className="text-gray-600 hover:text-gray-900"
//           >
//             Hot Coffees
//           </Link>
        
        
        
//           <Link
//             href="/cold-cofees"
//             className=" text-gray-600 hover:text-gray-900"
//           >
//             Cold Coffees
//           </Link>
        
        
        
//           <Link href="/hot-teas" className=" text-gray-600 hover:text-gray-900">
//             Hot Teas
//           </Link>
        
        
        
//           <Link
//             href="/bottle-beverages"
//             className=" text-gray-600 hover:text-gray-900"
//           >
//             Bottled Beverages
//           </Link>
        
        
        
//           <Link
//             href="/milk-juice-and-more"
//             className=" text-gray-600 hover:text-gray-900"
//           >
//             Milk, Juice & More
//           </Link>
        
        
        
//           <Link
//             href="/Iced-Tea-and-Lemonade"
//             className=" text-gray-600 hover:text-gray-900"
//           >
//             Iced Tea and Lemonade
//           </Link>        
//           <Link
//             href="/starbucks-refreshers-beverages"
//             className=" text-gray-600 hover:text-gray-900"
//           >
//             Starbucks Refreshers® Beverages
//           </Link>
        
        
        
//           <Link
//             href="/frappuccino-Blended-Beverages"
//             className=" text-gray-600 hover:text-gray-900"
//           >
//             Frappuccino® Blended Beverages
//           </Link>
        
//         <Link href="/hot-coffees" className="text-sm">
//           Hot Cofees{" "}
//         </Link>
//         <Link href="/cold-cofees" className="text-sm">
//           Cold Cofees{" "}
//         </Link>
//         <Link href="/starbucks-refreshers-beverages" className="text-sm">
//           StarBucks <br /> Refreshers <br /> Beverages
//         </Link>
//         <Link href="/sdf" className="text-sm">
//           Frappuccino <br /> Blended Beverages
//         </Link>
//         <Link href="/sdf" className="text-sm">
//           Iced Tea and <br /> Lemonade
//         </Link>
//         <Link href="/sdf" className="text-sm">
//           Hot Teas
//         </Link>
//         <Link href="/milk-juice-and-more" className="text-sm">
//           Milk, Juice & More
//         </Link>
//         <Link href="/sdf" className="text-sm">
//           Bottled Beverages
//         </Link>
//       </div>
//       <h1 className="font-bold text-xl mt-7">Food</h1>
//       <div className="flex flex-col gap-3 mt-2 text-zinc-700">
//         <Link href="/sdf" className="text-sm">
//           Hot Breakfast
//         </Link>
//         <Link href="/owatmeal-and-yougurt" className="text-sm">
//           Oatmeal & Yogurt
//         </Link>
//         <Link href="/sdf" className="text-sm">
//           Bakery
//         </Link>
//         <Link href="/sdf" className="text-sm">
//           Lunch
//         </Link>
//         <Link href="/sdf" className="text-sm">
//           Snacks & Sweets
//         </Link>
//       </div>
//       <h1 className="font-bold text-xl mt-7">At Home Coffee</h1>
//       <div className="flex flex-col gap-3 mt-2 text-zinc-700">
//         <Link href="/sdf" className="text-sm">
//           Whole Bean
//         </Link>
//         <Link href="/sdf" className="text-sm">
//           VIA Instant
//         </Link>
//       </div>
//       <h1 className="font-bold text-xl mt-7">Merchandise</h1>
//       <div className="flex flex-col gap-3 mt-2 text-zinc-700">
//         <Link href="/sdf" className="text-sm">
//           Cold Cups
//         </Link>
//         <Link href="/tumblers" className="text-sm">
//           Tumblers{" "}
//         </Link>
//         <Link href="/mugs" className="text-sm">
//           Mugs
//         </Link>
//         <Link href="/water-bottles" className="text-sm">
//           Water Bottles
//         </Link>
//         <Link href="/other" className="text-sm">
//           Other{" "}
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
