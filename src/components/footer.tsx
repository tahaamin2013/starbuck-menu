import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsSpotify } from "react-icons/bs";
import { FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrYoutube } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <footer className="w-full border mt-1">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-8 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <Link
                href="/"
                className="flex justify-center items-center w-full md:w-fit text-2xl gap-4 z-40 font-bold"
              >
                <Image
                  src="/icon.svg"
                  alt="Starbucks icon"
                  width={120}
                  height={100}
                  className="mt-1"
                ></Image>
              </Link>
              <p className="text-sm pb-4 text-gray-500 lg:max-w-xl text-center lg:text-left">
                Starbucks boasts a varied menu that features espresso, coffee,
                tea, bakery items, and breakfast and lunch options. Besides
                their specialty coffee beverages, they also offer an assortment
                of snacks and baked goods for those looking for a quick treat.
              </p>
              <div className="flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0 ">
                <Link
                  href="https://open.spotify.com/user/starbucks"
                  className="rounded-full px-3 py-2 bg-primary flex justify-center items-center text-white"
                  target="_blank"
                >
                  <BsSpotify size={20} />
                </Link>
                <Link
                  href="https://www.facebook.com/Starbucks/"
                  className="rounded-full px-3 py-2 bg-primary flex justify-center items-center text-white"
                  target="_blank"
                >
                  <FaFacebookF size={18} />
                </Link>
                <Link
                  href="https://www.pinterest.com/starbucks/"
                  className="rounded-full px-3 py-2 bg-primary flex justify-center items-center text-white"
                  target="_blank"
                >
                  <FaPinterestP size={18} />
                </Link>
                <Link
                  href="https://www.instagram.com/starbucks/"
                  className="rounded-full px-3 py-2 bg-primary flex justify-center items-center text-white"
                  target="_blank"
                >
                  <FiInstagram size={20} />
                </Link>
                <Link
                  href="https://www.youtube.com/starbucks"
                  className="rounded-full px-3 py-2 bg-primary flex justify-center items-center text-white"
                  target="_blank"
                >
                  <GrYoutube size={20} />
                </Link>
              </div>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className=" text-white font-medium mb-4">.</h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-4">
                  <Link href="/" className=" text-gray-600 hover:text-gray-900">
                    Starbucks Menu
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/featured"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Featured
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg text-gray-900 font-medium mb-4">Drinks</h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-4">
                  <a
                    href="/hot-coffees"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Hot Coffees
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/cold-cofees"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Cold Coffees
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/hot-teas"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Hot Teas
                  </a>
                </li>

                <li className="mb-4">
                  <a
                    href="/bottle-beverages"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Bottled Beverages
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/milk-juice-and-more"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Milk, Juice & More
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/Iced-Tea-and-Lemonade"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Iced Tea and Lemonade
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/starbucks-refreshers-beverages"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Starbucks Refreshers® Beverages
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/frappuccino-Blended-Beverages"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Frappuccino® Blended Beverages
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg text-gray-900 font-medium mb-4">Foods</h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-4">
                  <a
                    href="/hot-breakfast"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Hot Breakfast
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/owatmeal-and-yougurt"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Oatmeal & Yogurt
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/bakery"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Bakery
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/lunch"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Lunch
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/snack-and-sweets"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Snacks & Sweets
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg text-gray-900 font-medium mb-4">
                At Home Coffee
              </h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-4">
                  <a
                    href="/whole-bean"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Whole Bean
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/via-instant"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    VIA® Instant
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-sm text-gray-500 ">
                ©Starbucks Menu With Prices 2024, All rights reserved.
              </span>
              <ul className="flex items-center text-center gap-9 mt-4 lg:mt-0">
                <li>
                  <a href="/terms-and-conditons" className="text-sm text-gray-500">
                    Terms And Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy-police" className="text-sm text-gray-500">
                    Privacy Police
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="text-sm text-gray-500">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="text-sm text-gray-500">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
