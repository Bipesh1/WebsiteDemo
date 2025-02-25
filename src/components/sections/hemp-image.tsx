"use client";
import Image from "next/image";
import hemp from "../../../public/bg.webp";
import { motion } from "framer-motion"
import { Button } from "../ui/button";

export default function HempImage() {
  return (
    <div className="container mx-auto p-6 flex flex-row items-center text-center space-x-10 bg-secondary/20 w-full">
      <div className="relative w-2/4 max-w-3xl">
        <Image
          src={hemp}
          alt="Hemp oil product"
          className="object-contain w-full rounded-lg"
          priority
        />
      </div>

      <motion.div initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }} className="mt-6 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-primary">
          High Quality Hemp
        </h1>
        <p className="mt-2 text-black font-medium">
          Hemp Oil is a natural product made from the cannabis plant.
        </p>

        <Button>
          Buy Now
        </Button>

      </motion.div>
    </div>
  );
}
