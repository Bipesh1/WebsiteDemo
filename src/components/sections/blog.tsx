"use client";
import Image from "next/image";
import blog1 from "../../../public/blog1.jpg";
import blog2 from "../../../public/blog2.webp";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function Blog() {
  return (
    <div className="container mx-auto p-6 space-y-16">
      {/* First Section (Image on Left) */}
      <div className="flex flex-row items-center text-left space-x-10">
        <div className="relative w-3/4 max-w-3xl">
          <Image
            src={blog1}
            alt="Hemp oil product"
            className="object-contain w-full rounded-lg"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 space-y-6"
        >
          <h1 className="text-3xl md:text-2xl font-bold text-primary">
            High Quality Hemp
          </h1>
          <p className="mt-2 text-black font-medium">
            Hemp Oil is a natural product made from the cannabis plant.
          </p>

          <Button>Read More</Button>
        </motion.div>
      </div>

      {/* Second Section (Image on Right) */}
      <div className="flex flex-row-reverse items-center text-left space-x-10 space-x-reverse">
        <div className="relative w-3/4 max-w-3xl">
          <Image
            src={blog2}
            alt="Another hemp product"
            className="object-contain w-full rounded-lg"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 space-y-6"
        >
          <h1 className="text-3xl md:text-2xl font-bold text-primary">
            Pure & Organic Hemp
          </h1>
          <p className="mt-2 text-black font-medium">
            Experience the benefits of 100% natural hemp oil.
          </p>

          <Button>Read More</Button>
        </motion.div>
      </div>
    </div>
  );
}
