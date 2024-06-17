import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components";
import SubMenu from "@/components/subMenu";
import Loader from "@/components/Loader";
import footer from "@/components/footer";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StarBucks Menu",
  description: "Generated by create next app",
  icons: {
    icon: ["/icon.ico?v=4"],
    apple: ["/icon.io?v=4"],
    shortcut: ["icon.io"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <head>
          <meta name="theme-color" content="#0b7555" />
        </head>
      </head>
      <body className={inter.className}>
        <Loader>
          <Navbar />
          <main>
            <SubMenu />
            <div className="flex px-5 md:px-[90px] my-9">
              <Sidebar />
              <div className="ml-5 w-full">{children}</div>
            </div>
          </main>
          <Footer />
        </Loader>
      </body>
    </html>
  );
}
