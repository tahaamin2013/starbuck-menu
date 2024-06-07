import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components";
import SubMenu from "@/components/subMenu";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Starbucks Menu With Price",
  description:
    "Seamless Emirates visa solutions: Easy applications, essential info, stress-free travel.",
  icons: {
    icon: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loader>
          <Navbar />

          {children}
        </Loader>
      </body>
    </html>
  );
}
