import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.csscss";
import Navbar from "@/components";
import SubMenu from "@/components/subMenu";
import Loader from "@/components/Loader";
import footer from "@/components/footer";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StarBucks Menu - FEature",
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
        <meta name='theme-color' content="#0b7555" />
      <body className={inter.className}>
        <Loader>
              {children}
        </Loader>
      </body>
    </html>
  );
}
