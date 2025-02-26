"use client";
import Image from "next/image";
import bg2 from "../../../public/bg2.jpg";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function HempImage() {
  return (
    <div 
    className="container mx-auto flex items-center sm:pl-10 sm:justify-start justify-center mb-10 w-full h-screen bg-center bg-no-repeat bg-contain sm:bg-cover"
    style={{ backgroundImage: `url(${bg2.src})` }}
  >

        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" transform -translate-x-1/2 -translate-y-1/2 max-w-2xl px-6 py-5 md:py-10 bg-black bg-opacity-50 rounded-lg shadow-lg text-white text-center w-11/12"

              >
        <h1 className="text-xl font-semibold leading-snug md:text-5xl">High Quality <span  className="text-secondary">Hemp Oil</span></h1>
        <p className="mt-4 text-sm leading-relaxed md:text-lg">
          Hemp Oil is a natural product made from the cannabis plant. It’s known for its health benefits and versatility.
        </p>

        <Button variant={"ghost"} className="mt-6 border border-white text-sm md:text-lg font-light  hover:border-primary hover:text-white hover:bg-primary text-white rounded-none transition-all duration-300">
          Buy Now
        </Button>
      </motion.div>
      {/* </div> */}
    </div>
  );
}
