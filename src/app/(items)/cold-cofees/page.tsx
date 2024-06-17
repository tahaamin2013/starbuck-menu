// "use client";
// import React, { useState } from "react";
// import { ColdCofees } from "../../../lib/menuItems"; // Adjust the path according to your directory structure
// import Image from "next/image";
// import Link from "next/link";
// import SubMenu from "@/components/subMenu";
// import Sidebar from "@/components/sidebar";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// const variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { ChevronsDown, Slash } from "lucide-react";

// const ColdCofee = () => {
//   return (
//     <div>
//       <SubMenu />
//       <div className="flex px-5 md:px-[90px] my-9">
//         <Sidebar />
//         <div className="ml-5 w-full">
//           <Breadcrumb className="mb-3">
//             <BreadcrumbList>
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="/">Menu</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator>
//                 <Slash />
//               </BreadcrumbSeparator>
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="/cold-cofees">Cold Coffees</BreadcrumbLink>
//               </BreadcrumbItem>
//             </BreadcrumbList>
//           </Breadcrumb>
//           <h1 className="font-bold text-2xl">Cold Coffees</h1>
//           {ColdCofees.map((category, index) => (
//             <CategorySection key={index} category={category} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// function CategorySection({ category }: any) {
//   return (
//     <div className="mt-[36px]">
//       <h1 className="font-bold text-2xl mb-4">{category.category}</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] w-full bg-blue border-t pt-6 gap-y-[50px]">
//         {category.items.map((item: any, idx: any) => (
//           <AnimatedLink key={idx} item={item} delay={idx * 0.1} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function AnimatedLink({ item, delay }: any) {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
//   const [selectedSize, setSelectedSize] = useState(item.sizes[0]);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={inView ? "visible" : "hidden"}
//       variants={variants}
//       transition={{ duration: 0.3, delay }}
//       className="flex gap-8 flex-col md:flex-row"
//     >
//       <motion.div
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//         variants={variants}
//         transition={{ duration: 0.3, delay }}
//         className="flex flex-row items-center gap-5"
//       >
//         <Link href={item.link} className="flex flex-row items-center gap-5">
//           <Image
//             src={item.image}
//             alt={item.name}
//             width={118}
//             height={118}
//             className="rounded-full max-w-[120rem] max-h-[118px]"
//           />
//         </Link>
//         <div>
//           <h1 className="text-xl mb-1 w-full md:w-[340px]">{item.name}</h1>
//           <div className="w-44 flex gap-6 justify-between items-center">
//             <div className="h-full gap-1 font-bold flex justify-between flex-col">
//               <h1>Size:</h1>
//               <h1 className="text-white">.</h1>
//               <h1>Calories:</h1>
//               <h1>Price:</h1>
//             </div>
//             <div className="flex flex-col gap-1 ">
//               <DropdownMenu>
//                 <DropdownMenuTrigger
//                   className="w-fit cursor-pointer outline-none"
//                   asChild
//                 >
//                   <div className="border justify-between w-[110] flex gap-1 rounded-lg px-3">
//                     {selectedSize.size} <ChevronsDown className="w-4" />
//                   </div>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="w-56 mt-3">
//                   <DropdownMenuLabel>Size Options</DropdownMenuLabel>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuRadioGroup
//                     value={selectedSize.size}
//                     onValueChange={(size) =>
//                       setSelectedSize(
//                         item.sizes.find((s: any) => s.size === size)
//                       )
//                     }
//                   >
//                     {item.sizes.map((sizeOption: any, index: any) => (
//                       <DropdownMenuRadioItem
//                         className="cursor-pointer outline-none"
//                         key={index}
//                         value={sizeOption.size}
//                       >
//                         {sizeOption.size}
//                       </DropdownMenuRadioItem>
//                     ))}
//                   </DropdownMenuRadioGroup>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//               <span>{selectedSize.size2}</span>
//               <p>{selectedSize.calories}</p>
//               <p>{selectedSize.price}</p>
//               <p></p>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default ColdCofee;
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page