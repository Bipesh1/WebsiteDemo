"use client";
import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../product-card";
import card1 from "../../../public/singingbowlimage/1.webp";
import card2 from "../../../public/singingbowlimage/2.png";
import card3 from "../../../public/hemoimages/hemp.webp";

const products = [
  {
    name: "Singing Bowl",
    thumbnail: card1,
    description: "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel...",
     price: "$18"
  },
  {
    name: "Singing Bowl 2",
    thumbnail: card2,
    description: "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel...",
     price: "$18"
  },
  {
    name: "Hemp Bag",
    thumbnail: card3,
    description: "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel...",
    price: "$18"
  },
  {
    name: "Hemp Bag 2",
    thumbnail: card3,
    description: "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel...",
    price: "$18"
  },

];

export default function HotDealsSection() {
  return (
    <section>
      <div className="container mx-auto space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl text-center"
        >
          Hot <span className=" relative text-primary after:absolute after:bg-primary after:w-20 after:h-1 after:bottom-0 after:left-0 after:content-['']">Deals</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-base text-center text-gray-400"
        >
          Don't <span className="text-primary">Miss Out</span> On Our Featured Deals! 
          
        </motion.p>
      </div>
      <div className="container mx-auto px-4 md:px-12 py-10 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 sm:px-4 md:px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
