"use client";
import Image from "next/image";
import blog1 from "../../../public/blog1.jpg";
import blog2 from "../../../public/blog2.jpg";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function Blog() {
  return (
    <div className="container mx-auto p-6 space-y-16">
     <motion.h2
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-3xl text-center"
             >
               Our <span className=" relative text-primary after:absolute after:bg-primary after:w-20 after:h-1 after:bottom-0 after:left-0 after:content-[''] pb-1 ">Blogs</span>
             </motion.h2>

      {/* First Blog Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-10">
        <div className="w-full md:w-1/2">
          <Image src={blog1} alt="Hemp oil product" className="object-cover w-full rounded-lg" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md text-left md:text-left space-y-4 items-center"
        >
          <h2 className="text-2xl mt-10 md:text-3xl font-bold text-secondary">High Quality Hemp</h2>
          <p className="text-gray-700">
            Hemp oil is a natural product made from the cannabis plant. It offers numerous benefits for skincare, wellness, and health.
          </p>
          <Button variant={"outline"} className="rounded-none hover:bg-secondary border text-gray-800 border-primary hover:text-white">Read More</Button>
        </motion.div>
      </div>

      {/* Second Blog Section */}
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-x-10">
        <div className="w-full md:w-1/2">
          <Image src={blog2} alt="Another hemp product" className="object-cover w-full rounded-lg" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md text-left md:text-left space-y-4 items-center"
        >
          <h2 className="text-2xl mt-10 md:text-3xl font-bold text-primary">Singing Bowl</h2>
          <p className="text-gray-700 text-justify">
          Sound therapy and guided meditations often make use of singing bowls. Bowls of varying sizes are placed around the room, around your body, or on your body. 
          </p>
          <Button variant={"outline"} className="rounded-none hover:bg-primary border text-gray-800 border-primary hover:text-white">Read More</Button>
        </motion.div>
      </div>
    </div>
  );
}
