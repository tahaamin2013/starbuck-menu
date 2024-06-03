import Sidebar from "@/components/sidebar";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "../../lib/menuItems"; // Adjust the path according to your directory structure

export default function Home() {
  return (
    <div className="flex px-5 md:px-[90px] my-9">
      <div>
        <Sidebar />
      </div>
      <div>
        <h1 className="font-bold text-2xl">Menu</h1>

        {menuItems.map((category, index) => (
          <div key={index} className="mt-[36px]">
            <h1 className="font-bold text-2xl mb-4">{category.category}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 border-t pt-6 gap-y-[50px]">
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
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
