"use client";
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from "../../../public/logo.webp";
import Image from "next/image";
import MobileSidebar from "@/components/sections/mobile-sidebar";
import SocialLinks from "@/components/sections/social-links";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import navimage1 from "../../../public/singingbowl2.jpeg";
import navimage2 from "../../../public/hemp.webp";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname(); // Get the current path
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white backdrop-blur-md z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" height={100} width={100} />
          </Link>

          <div className="hidden md:flex items-center text-base space-x-8 ">
            <NavigationMenu>
              <NavigationMenuList className="space-x-5">
                <NavigationMenuItem>
                  <button
                    className={`${
                      pathname === "/products" ? "active" : ""
                    } btn`}
                  >
                    <Link
                      href="/products"
                      className="text-black text-sm hover:text-primary transition-colors"
                    >
                      Home
                    </Link>
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black font-normal hover:text-primary transition-colors">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4">
                    <div className="container md:w-[400px]">
                      <div className="flex items-center gap-x-10">
                        <div className=" w-32 h-32">
                          <Image
                            src={navimage1}
                            alt="singing bowl"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div>
                          <Link href={"/"} className="text-primary">
                            Singing Bowl
                          </Link>
                          <p className="text-secondary/70">
                            See our singing bowl products
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-10">
                        <div className=" w-32 h-32">
                          <Image
                            src={navimage2}
                            alt="singing bowl"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div>
                          <Link href={"/"} className="text-primary">
                            Hemp Bag
                          </Link>
                          <p className="text-secondary/70">
                            See our hemp related products
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    className={`${
                      pathname === "/products" ? "active" : ""
                    } btn`}
                  >
                    <Link
                      href="/products"
                      className="text-black text-sm hover:text-primary transition-colors"
                    >
                      About
                    </Link>
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    className={`${
                      pathname === "/products" ? "active" : ""
                    } btn`}
                  >
                    <Link
                      href="/products"
                      className="text-black text-sm hover:text-primary transition-colors"
                    >
                      Contact Us
                    </Link>
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="block md:hidden">
            <MobileSidebar />
          </div>

          <div className="hidden md:block">
            <SocialLinks />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
