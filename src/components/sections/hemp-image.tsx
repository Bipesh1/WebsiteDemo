"use client";
import Image from "next/image";
import bg2 from "../../../public/bg2.jpg";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function HempImage() {
  return (
    <div className="container mx-auto flex items-center sm:pl-10 sm:justify-start justify-center mb-10
     w-full h-screen " style={{ backgroundImage: `url(${bg2.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>

        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" transform -translate-x-1/2 -translate-y-1/2 max-w-lg p-6 bg-black bg-opacity-50 rounded-lg shadow-lg text-white text-center w-11/12"

              >
        <h1 className="text-1xl font-semibold leading-snug md:text-5xl">High Quality Hemp</h1>
        <p className="mt-4 text-sm leading-relaxed md:text-lg">
          Hemp Oil is a natural product made from the cannabis plant. It’s known for its health benefits and versatility.
        </p>

        <Button className="mt-6 px-8 py-3 text-sm md:text-lg bg-white text-black hover:bg-primary hover:text-white rounded-md transition-all duration-300">
          Buy Now
        </Button>
      </motion.div>
      {/* </div> */}
    </div>
  );
}
