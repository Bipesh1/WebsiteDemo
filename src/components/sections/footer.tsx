"use client"
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../ui/footer";
import Link from "next/link";
import logo from "../../../public/logo.webp";
import payment from "../../../public/footer-payment.webp";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaBehance } from "react-icons/fa6";



export default function FooterSection() {
  return (
    <div className="container mx-auto px-4">
    <footer className="w-full bg-background mx-auto px-4">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center space-x-2">
                     <Image src={logo} alt="Logo" height={175} width={175} />
                </Link>
                </div>
                <div>
                <p className="text-sm w-2/3 my-3">Sophisticated simplicity for the independent mind.</p>
            <div className="logos flex justify-between w-1/2 my-5">
                    <span className="text-lg"><FaTwitter />
                    </span>
                    <span className="text-lg"><CiBasketball />
                    </span>
                    <span className="text-lg"><FaBehance />
                    </span>
                    <span className="text-lg"><IoLogoInstagram />
                    </span>
            </div>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-xl pt-1 font-semibold">Help & Information</h3>
              <hr className="w-1/12 border-t-2 mb-4 border-black"/>
                <span>
                    <Link
                        href="/"
                        className="text-sm hover:text-primary transition-colors"
                        >
                        About Us
                    </Link>
                </span>
                <span>
                    <Link
                        href="/"
                        className="text-sm hover:text-primary transition-colors"
                        >
                        Privacy Policy
                    </Link>
                </span>
                <span>
                    <Link
                        href="/"
                        className="text-sm hover:text-primary transition-colors"
                        >
                        Terms & Conditions
                    </Link>
                </span>
                <span>
                    <Link
                        href="/"
                        className="text-sm hover:text-primary transition-colors"
                        >
                        Products Return
                    </Link>
                </span>
                <span>
                    <Link
                        href="/"
                        className="text-sm hover:text-primary transition-colors"
                        >
                        Wholesale Policy
                    </Link>
                </span>
              
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-xl pt-1 font-semibold">About Us</h3>
              <hr className="w-1/12 border-t-2 mb-4 border-black"/>
              <span>
                    <Link
                        href="/"
                        className="text-sm hover:text-primary transition-colors"
                        >
                        Pagination
                    </Link>
                </span>
                <span>
                    <Link
                        href="/"
                        className="text-sm hover:text-primary transition-colors"
                        >
                        Terms & Conditions
                    </Link>
                </span>
                <span>
                    <Link
                        href="/"
                        className="text-sm hover:text-primary transition-colors"
                        >
                        Contact
                    </Link>
                </span>
                <span>
                    <Link
                        href="/"
                        className="text-sm hover:text-primary transition-colors"
                        >
                        Accessories
                    </Link>
                </span>
                <span>
                    <Link
                        href="/"
                        className="text-sm hover:text-primary transition-colors"
                        >
                        Home Page
                    </Link>
                </span>
              
              
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-xl pt-1 font-semibold">Categories</h3>
              <hr className="w-1/12 border-t-2 mb-4 border-black"/>
              <span>
                    <Link
                        href="/"
                        className="text-sm hover:text-primary transition-colors"
                        >
                        Menu Items
                    </Link>
                </span>
                <span>
                    <Link
                        href="/"
                        className="text-sm hover:text-primary transition-colors"
                        >
                        Help Center
                    </Link>
                </span>
                <span>
                    <Link
                        href="/"
                        className="text-sm hover:text-primary transition-colors"
                        >
                        Address Store
                    </Link>
                </span>
                <span>
                    <Link
                        href="/"
                        className="text-sm hover:text-primary transition-colors"
                        >
                        Privacy Policy
                    </Link>
                </span>
                <span>
                    <Link
                        href="/"
                        className="text-sm hover:text-primary transition-colors"
                        >
                        Home Page
                    </Link>
                </span>
              
            </FooterColumn>
          </FooterContent>
          <FooterBottom className=" ">
            <div className=" text-base text-black">© Copyright 2025 | Cerai by 
            <Link href="/" className="mx-1 hover:text-primary btn" >
                <span className="text-gray-700 font-semibold">Anish.</span>
            </Link>
                 
                Powered by Shopify.</div>
            <div className="flex items-center gap-4">
              <Image src={payment} alt="Footer Payment Options"></Image>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
    </div>
  );
}
