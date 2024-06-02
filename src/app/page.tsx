import Sidebar from "@/components/sidebar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex px-5 md:px-[90px] my-9">
      <div>
        <Sidebar />
      </div>{" "}
      <div>
        <h1 className="font-bold text-2xl">Menu</h1>

        <div>
          <div className="mt-[36px]">
            <h1 className="font-bold text-2xl mb-4">Drinks</h1>
            <div className="flex flex-col md:flex-row gap-[40px] md:gap-[100px]">
              <div className="flex gap-8 flex-col md:flex-row">
                <Link href="hello" className="flex flex-row items-center gap-5">
                  <Image
                    src="/hot cofee.avif"
                    alt="hot cofee"
                    width={120}
                    height={120}
                    className="rounded-full"
                  ></Image>
                  <div>
                    <h1 className="text-xl">Hot Coffees</h1>
                  </div>
                </Link>
              </div>
              <div className="flex gap-8 flex-col md:flex-row">
                <Link href="hello" className="flex flex-row items-center gap-5">
                  <Image
                    src="/cold cofee.avif"
                    alt="cold cofee"
                    width={120}
                    height={120}
                    className="rounded-full"
                  ></Image>
                  <div>
                    <h1 className="text-xl">Cold Coffees</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
