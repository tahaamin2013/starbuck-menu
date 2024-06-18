  import Link from "next/link";
  import React from "react";

  const PrivacyPolicy: React.FC = () => {
    return (
      <div className="max-w-4xl px-[20px]  mx-auto py-4 mt-6">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to our Starbucks Menu with Prices website. Your privacy is very
          important to us, and we are committed to protecting your personal
          information. This Privacy Policy outlines how we collect, use, and
          safeguard your information.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address,
          you provide when you contact us.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          The information we collect is used to provide and improve our services,
          respond to your inquiries.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
        <p className="mb-4">
          We implement various security measures to protect your personal
          information from unauthorized access, use, or disclosure.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <h2 className="text-2xl font-semibold ">Contact Us</h2>
        <p className="mb-4 flex items-center gap-3">
          If you have any questions about this Privacy Policy, please{" "}
          <Link
            href="/contact-us"
            className="bg-primary text-white px-4 py-2 rounded-full w-fit md:block hidden"
          >
            contact us
          </Link>
        </p>
        <Link
          href="/contact-us"
          className="bg-primary text-white px-4 py-2 w-fit rounded-full md:hidden block"
        >
          contact us
        </Link>
      </div>
    );
  };

  export default PrivacyPolicy;
