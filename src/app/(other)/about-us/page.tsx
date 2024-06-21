import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "StarBucks Menu - About Us",
  description:
    "Learn more about our mission, vision, and the team behind the Starbucks Menu website.",
  icons: {
    icon: ["/icon.ico?v=4"],
    apple: ["/icon.io?v=4"],
    shortcut: ["/icon.io"],
  },
};

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-700">
        About Us
      </h1>
      <p className="text-lg mb-4 text-gray-700">
        Welcome to the Starbucks Menu website, your go-to resource for all the
        latest and greatest items available at Starbucks. We are passionate
        about coffee and dedicated to providing you with the most accurate and
        up-to-date information on Starbucks products and prices.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-green-600">
        Our Mission
      </h2>
      <p className="text-lg mb-4 text-gray-700">
        Our mission is to create a comprehensive and user-friendly platform
        where Starbucks enthusiasts can find detailed information about their
        favorite drinks and food items. We strive to ensure that our users have
        access to the most current prices and menu offerings, so they can make
        informed decisions when visiting their local Starbucks.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Our Vision</h2>
      <p className="text-lg mb-4 text-gray-700">
        We envision a world where every Starbucks lover has easy access to the
        information they need to enjoy their favorite coffeehouse experience to
        the fullest. Whether you’re a regular customer or a first-time visitor,
        our website aims to enhance your Starbucks journey by providing you with
        all the details you need.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-green-600">The Team</h2>
      <p className="text-lg mb-4 text-gray-700">
        Our team is made up of dedicated coffee aficionados and web developers
        who share a common love for Starbucks. We are committed to delivering a
        high-quality, reliable resource that meets the needs of our community.
      </p>
      <p className="text-lg mb-4 text-gray-700">
        Thank you for visiting our site. We hope you find our content helpful
        and informative. If you have any suggestions or feedback, please feel
        free to{" "}
        <a href="/contact" className="text-blue-500 hover:underline">
          contact us
        </a>
        .
      </p>
    </div>
  );
};

export default AboutUs;
