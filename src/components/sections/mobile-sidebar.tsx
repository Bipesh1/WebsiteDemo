import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import Link from "next/link";
import { FileUser, Home, Menu } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo.webp";
import SocialLinks from "./social-links";


export default function MobileSidebar() {
  const navigations = [
    {
      name: "Home",
      href: "#home",
    },

    {
      name: "Categories",
      href: "/categories",
    },

    {
      name: "Products",
      href: "/products",
    },

    {
      name: "Contact",
      href: "/contact-us",
    },

    {
        name: "Dealer Locator",
        href: "/dealer-locator",
      },
  ];
  return (
    <Sheet>
      <SheetTrigger>
        <Menu
          size={24}
          className="text-black hover:text-primary"
        />
      </SheetTrigger>
      <SheetContent className="bg-white text-black border-l-0">
        <SheetHeader>
          <SheetTitle className=" flex items-center justify-center">
            <Link
              href="/home"
              className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          </SheetTitle>
          <SheetDescription className=" h-full">
            <span className="flex flex-col gap-4 items-center text-base mt-8 text-white opacity-90 ">
              {navigations.map((nav, i) => {
                return (
                  <Link
                    href={nav.href}
                    key={i}>
                    <span className="hover:text-primary transition-all flex text-black items-center gap-2 w-full justify-start">
                      <span>{nav.name}</span>
                    </span>
                  </Link>
                );
              })}
            </span>

            <span className=" flex flex-col text-black gap-2 items-center justify-center mt-8  opacity-80">
              <Link href={"mailto:softy.corporate@gmail.com"} className="text-black">
                <span className="">softy.corporate@gmail.com</span>
              </Link>

              <span className=" text-black ">@ Softy.com.np | 2024</span>
              <span className=" flex items-center gap-1  text-xs">
                <Link
                  href={"tel:+01-5191390"}
                  className="  text-black  transition-all ease-in-out duration-300 cursor-pointer">
                  +01-5191390
                </Link>
                |{" "}
                <Link
                  href={"tel:+01-5191390"}
                  className="text-black  cursor-pointer">
                  +01-5191390
                </Link>
                |{" "}
              </span>
            </span>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
