"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { ChevronDown, MessagesSquare } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const isAuthenticated = false;
  const [showDescription, setShowDescription] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    setIsDropdownOpen(false);
    router.push(href);
  };

  useEffect(() => {
    const refreshLink = document.getElementById("refreshLink");
    const handleRefreshClick = () => {
      location.reload();
    };

    if (refreshLink) {
      refreshLink.addEventListener("click", handleRefreshClick);
    }

    return () => {
      if (refreshLink) {
        refreshLink.removeEventListener("click", handleRefreshClick);
      }
    };
  }, []);

  const handleMouseEnter = (description: any) => {
    setShowDescription(description);
  };

  const handleMouseLeave = () => {
    setShowDescription(null);
  };

  const data = [
    {
      link: "/uIUXDesign-For-web",
      title: "UI/UX Design For Web",
      description: () => (
        <div className="flex flex-col">
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Wireframing and Prototyping</h1>
            <p className="text-[13px]">
              Creating wireframes and prototypes to visualize the website&apos;s
              layout, structure, and user flow before development begins.
            </p>
          </Link>
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Responsive Design</h1>
            <p className="text-[13px]">
              Ensuring that website designs are responsive and adapt seamlessly
              to various screen sizes and devices, providing an optimal viewing
              experience for users.
            </p>
          </Link>
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">User Interface (UI) Design</h1>
            <p className="text-[13px]">
              Designing the visual elements of the website interface, including
              typography, color schemes, icons, buttons, and other interactive
              elements.
            </p>
          </Link>
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">UI/UX Audits</h1>
            <p className="text-[13px]">
              Assessing existing website designs to identify areas for
              improvement in terms of usability, accessibility, and overall user
              experience.
            </p>
          </Link>
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Website Design</h1>
            <p className="text-[13px]">
              Crafting visually appealing and user-friendly website designs
              tailored to your clients&apos; brand identity and target audience.
            </p>
          </Link>
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">User Experience (UX) Design</h1>
            <p className="text-[13px]">
              Focusing on enhancing the overall user experience by optimizing
              navigation, interaction design, information architecture, and
              usability.
            </p>
          </Link>
        </div>
      ),
    },
    {
      link: "/UIUX-Design-For-Mobile",
      title: "UI/UX Design For Mobile",
      description: () => (
        <div className="flex flex-col">
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Mobile App Design</h1>
            <p className="text-[13px]">
              Designing intuitive and engaging mobile app interfaces for iOS and
              Android platforms, considering platform-specific guidelines and
              best practices.
            </p>
          </Link>
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Responsive Mobile Design</h1>
            <p className="text-[13px]">
              Adapting website designs for mobile devices, optimizing layouts
              and interactions for touchscreens and smaller screens.
            </p>
          </Link>
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Mobile Prototyping</h1>
            <p className="text-[13px]">
              Creating interactive prototypes for mobile apps to simulate user
              interactions and test usability before development.
            </p>
          </Link>
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Mobile Usability Testing</h1>
            <p className="text-[13px]">
              Conducting usability testing sessions with real users to gather
              feedback and refine mobile app designs based on user insights.
            </p>
          </Link>
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Cross-Platform Design</h1>
            <p className="text-[13px]">
              {" "}
              Designing mobile apps that work seamlessly across different
              devices and operating systems, ensuring a consistent user
              experience.
            </p>
          </Link>
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Mobile UI Patterns</h1>
            <p className="text-[13px]">
              Implementing mobile UI design patterns and conventions to create
              familiarity and improve usability for users.
            </p>
          </Link>
        </div>
      ),
    },
    {
      link: "/website-development",
      title: "Website Development",
      description: () => (
        <div className="flex flex-col">
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Custom Website Design</h1>
            <p className="text-[13px]">
              Tailored website designs created from scratch based on client
              specifications and requirements.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Responsive Web Design</h1>
            <p className="text-[13px]">
              Ensuring that websites are optimized for various devices and
              screen sizes, providing an optimal viewing experience for users.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">E-commerce Website Design</h1>
            <p className="text-[13px]">
              Designing online stores with user-friendly interfaces, secure
              payment gateways, and seamless shopping experiences.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">CMS Integration</h1>
            <p className="text-[13px]">
              Integrating content management systems (CMS) like WordPress,
              Joomla, or Drupal to allow clients to easily manage and update
              their website content.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">SEO-friendly Design</h1>
            <p className="text-[13px]">
              Designing websites with search engine optimization (SEO) best
              practices in mind to improve visibility and rankings on search
              engine results pages.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Website Redesign</h1>
            <p className="text-[13px]">
              Updating and modernizing existing websites to improve
              functionality, aesthetics, and performance.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Maintenance and Support</h1>
            <p className="text-[13px]">
              Offer ongoing maintenance and support services to ensure websites
              remain up-to-date, secure, and performing optimally post-launch.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Performance Optimization</h1>
            <p className="text-[13px]">
              Discuss your approach to optimizing website performance, including
              factors such as page load speed, mobile responsiveness, and
              overall user experience.
            </p>
          </Link>
        </div>
      ),
    },
    {
      link: "/mobile-application-devlopment",
      title: "Mobile Application Development",
      description: () => (
        <div className="flex flex-col">
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">iOS App Development</h1>
            <p className="text-[13px]">
              Specializing in creating applications specifically for
              Apple&apos;s iOS platform
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Android App Development</h1>
            <p className="text-[13px]">
              Focusing on building applications tailored for Android devices.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Cross-Platform App Development</h1>
            <p className="text-[13px]">
              Offering development solutions that work seamlessly across
              multiple platforms, such as iOS, Android, and web.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">App Maintenance and Support</h1>
            <p className="text-[13px]">
              Offering ongoing maintenance services to keep mobile applications
              up-to-date with the latest technologies and to address any issues
              or bugs that arise post-launch.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">App Store Optimization (ASO)</h1>
            <p className="text-[13px]">
              Optimizing mobile applications for better visibility and ranking
              in app stores, including keyword optimization, metadata
              enhancement, and performance monitoring.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Backend Development</h1>
            <p className="text-[13px]">
              Building robust backend systems to support the functionality of
              mobile applications, including databases, APIs, and servers.
            </p>
          </Link>
        </div>
      ),
    },

    {
      link: "/graphicDesigns",
      title: "Graphic Design",
      description: () => (
        <div className="flex flex-col">
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Logo Design</h1>
            <p className="text-[13px]">
              Offer logo design services for businesses looking to establish
              their brand identity.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Print Design</h1>
            <p className="text-[13px]">
              Offer design services for printed materials such as business
              cards, brochures, flyers, posters, and packaging.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Digital Illustration</h1>
            <p className="text-[13px]">
              Provide custom illustrations for websites, social media,
              presentations, and other digital platforms.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Web Graphics</h1>
            <p className="text-[13px]">
              Design graphics specifically tailored for websites, including
              banners, icons, buttons, and infographics.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Social Media Graphics</h1>
            <p className="text-[13px]">
              Design visuals for social media platforms such as Facebook,
              Instagram, Twitter, LinkedIn, etc.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Packaging Design</h1>
            <p className="text-[13px]">
              Offer design services for product packaging, labels, and product
              branding.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Infographic Design</h1>
            <p className="text-[13px]">
              Create visually appealing and informative infographics for data
              visualization purposes.
            </p>
          </Link>
        </div>
      ),
    },
    {
      link: "/digital-marketing",
      title: "Digital Marketing",
      description: () => (
        <div className="flex flex-col">
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Search Engine Optimization (SEO)</h1>
            <p className="text-[13px]">
              {" "}
              Optimizing websites to rank higher in search engine results pages
              (SERPs) and attract organic traffic.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Pay-Per-Click Advertising (PPC)</h1>
            <p className="text-[13px]">
              Creating and managing paid advertising campaigns on platforms like
              Google Ads, Bing Ads, and social media platforms to drive targeted
              traffic.{" "}
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Social Media Marketing (SMM)</h1>
            <p className="text-[13px]">
              Developing and executing strategies to engage audiences, build
              brand awareness, and drive traffic through social media platforms
              such as Facebook, Instagram, Twitter, LinkedIn, etc.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Content Marketing</h1>
            <p className="text-[13px]">
              Creating and distributing valuable, relevant content to attract
              and retain a clearly defined audience and drive profitable
              customer action.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Email Marketing</h1>
            <p className="text-[13px]">
              Designing and implementing email campaigns to nurture leads,
              engage subscribers, and drive conversions.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Influencer Marketing</h1>
            <p className="text-[13px]">
              Collaborating with influencers or industry experts to promote
              products or services and reach a wider audience.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Online Reputation Management (ORM)</h1>
            <p className="text-[13px]">
              Monitoring and managing online reviews, mentions, and feedback to
              maintain a positive brand image and address any negative
              sentiment.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Marketing Automation</h1>
            <p className="text-[13px]">
              Implementing tools and workflows to automate repetitive marketing
              tasks, personalize customer experiences, and streamline marketing
              operations.
            </p>
          </Link>
        </div>
      ),
    },
    {
      link: "/VideoEditing",
      title: "Video Editing",
      description: () => (
        <div className="flex flex-col">
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">Motion Graphics</h1>
            <p className="text-[13px]">
              {" "}
              Provide animated graphics and videos for websites, social media,
              advertisements, and presentations.
            </p>
          </Link>
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">dfsjkljkljfd</h1>
            <p className="text-[13px]">dsfdfsdesctfsdsfsfsfsfsddfddiponsfd</p>
          </Link>
        </div>
      ),
    },
    {
      link: "/quickbooks",
      title: "Quickbooks",
      description: () => (
        <div className="flex flex-col">
          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">QuickBooks Setup and Installation</h1>
            <p className="text-[13px]">
              Help clients set up QuickBooks software tailored to their business
              needs.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">QuickBooks Training</h1>
            <p className="text-[13px]">
              Offer training sessions to educate clients on how to effectively
              use QuickBooks for their business accounting needs.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">QuickBooks Integration Services</h1>
            <p className="text-[13px]">
              Integrate QuickBooks with other software solutions used by clients
              to streamline business operations.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">QuickBooks Customization</h1>
            <p className="text-[13px]">
              Customize QuickBooks settings and reports to match the specific
              requirements of clients&apos; businesses.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">
              QuickBooks Troubleshooting and Support
            </h1>
            <p className="text-[13px]">
              {" "}
              Offer ongoing support to troubleshoot issues and resolve any
              challenges clients encounter while using QuickBooks.
            </p>
          </Link>

          <Link
            className="hover:bg-[#7c3aed23] w-full cursor-pointer rounded-lg p-[10px] transition-all duration-100"
            href="/page"
          >
            <h1 className="font-bold">QuickBooks Data Migration</h1>
            <p className="text-[13px]">
              Assist clients in migrating their financial data from legacy
              systems to QuickBooks for seamless transition and continuity.
            </p>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <nav className=" h-16 inset-x-0 top-0 z-30 w-full border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-zinc-200">
          <Link href="/" className="flex text-2xl z-40 font-bold">
            Devkins
          </Link>
          <MobileNav />
          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              About Us
            </Link>
            <Link
              href="/portfolio"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Portfolio
            </Link>
            <div
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <DropdownMenu>
                <DropdownMenuTrigger className="flex flex-row gap-2 items-center justify-center">
                  Our Services <ChevronDown className="mt-0.5" size="16px" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-[16px] overflow-auto grid grid-cols-3 gap-2  py-9  p-2  justify-between px-4 outline-none w-screen h-screen ">
                  <div className="flex w-full justify-between">
                    <div className="text-full text-left w-full">
                      {data.map((item, index): any => (
                        <div key={index} className="!text-left">
                          <DropdownMenuItem
                            onMouseEnter={() =>
                              handleMouseEnter(item.description)
                            }
                            key={index}
                            className="p-2 px-3 cursor-pointer h-fit flex flex-col w-full text-left relative opacity-100"
                          >
                            <Link
                              href={item.link}
                              className="w-full h-full text-left"
                            >
                              <Link href={item.link}>{item.title}</Link>
                            </Link>
                          </DropdownMenuItem>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#7c3aed] h-full rounded-full mx-2 w-[4.5px]"></div>
                  </div>
                  <div className=" col-span-2">
                    {showDescription && <p>{showDescription}</p>}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link
              href="/careers"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Careers
            </Link>
            <Link
              href="/tools"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Tools
            </Link>
          </div>
          <div className="hidden items-center text-white space-x-4 sm:flex">
            <Link href="/talk">
              <Button
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Let&apos;s Talk <MessagesSquare className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
