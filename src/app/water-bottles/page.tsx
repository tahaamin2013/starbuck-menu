import React from "react";
import { WaterBottless } from "../../../lib/menuItems"; // Adjust the path according to your directory structure
import Image from "next/image";
import Link from "next/link";
import SubMenu from "@/components/subMenu";
import Sidebar from "@/components/sidebar";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

const WaterBottles = () => {
  return (
    <div>
      <SubMenu />

      <div className="flex px-5 md:px-[90px] my-9">
        <div>
          <Sidebar />
        </div>

        <div>
          <Breadcrumb className="mb-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Menu</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/water-bottles">
                  Water Bottles
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          {WaterBottless.map((category, index) => (
            <div key={index} className="mt-[36px]">
              <h1 className="font-bold text-2xl mb-4">{category.category}</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] w-full bg-blue border-t pt-6 gap-y-[50px]">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex gap-8 flex-col md:flex-row">
                    <Link
                      href={item.link}
                      className="flex flex-row items-center gap-5"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={120}
                        height={120}
                        className="rounded-full"
                      />
                      <div>
                        <h1 className="text-xl">{item.name}</h1>
                        <p className="text-[#1e3932] font-bold">
                          ${item.price}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaterBottles;
