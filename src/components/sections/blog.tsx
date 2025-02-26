"use client";
import Image from "next/image";
import blog1 from "../../../public/blog1.jpg";
import blog2 from "../../../public/blog2.jpg";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function Blog() {
  return (
    <div className="container mx-auto p-6 space-y-16">
      <h1 className="text-4xl md:text-3xl font-semibold text-center">Our Blog</h1>

      {/* First Blog Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="w-full md:w-1/2">
          <Image src={blog1} alt="Hemp oil product" className="object-cover w-full rounded-lg" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md text-left md:text-left space-y-4 items-center"
        >
          <h2 className="text-2xl mt-10 md:text-3xl font-bold text-primary">High Quality Hemp</h2>
          <p className="text-gray-700">
            Hemp oil is a natural product made from the cannabis plant. It offers numerous benefits for skincare, wellness, and health.
          </p>
          <Button className="bg-primary">Read More</Button>
        </motion.div>
      </div>

      {/* Second Blog Section */}
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-6">
        <div className="w-full md:w-1/2">
          <Image src={blog2} alt="Another hemp product" className="object-cover w-full rounded-lg" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md text-left md:text-left space-y-4 items-center"
        >
          <h2 className="text-2xl mt-10 md:text-3xl font-bold text-primary">Pure & Organic Hemp</h2>
          <p className="text-gray-700">
         Experience the benefits of 100% natural hemp oil, carefully extracted to retain its purity and effectiveness. Experience the benefits of 100% natural hemp oil, carefully extracted to retain its purity and effectiveness. Experience the benefits of 100% natural hemp oil, carefully extracted to retain its purity and effectiveness.
          </p>
          <Button className="bg-primary">Read More</Button>
        </motion.div>
      </div>
    </div>
  );
}
