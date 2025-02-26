"use client";
import BreadCrumb from "@/components/bread-crumb";
import card3 from "../../../../public/hemoimages/hemp.webp"
import {motion} from "framer-motion"
import ProductCard from "@/components/product-card";
import card4 from "../../../../public/hemoimages/hemp2.png";

export default function ProductView() {

  const products = [
    {
      name: "Hemp 1",
      thumbnail: card3,
      description: "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel...",
       price: "$20"
    },
    {
      name: "Hemp 2",
      thumbnail: card4,
      description: "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel...",
       price: "$18"
    },
    {
      name: "Hemp 3",
      thumbnail: card3,
      description: "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel...",
      price: "$20"
    },
    {
        name: "Hemp 3",
        thumbnail: card4,
        description: "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel...",
        price: "$18"
      },
      {
        name: "Hemp 3",
        thumbnail: card3,
        description: "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel...",
        price: "$20"
      },
      {
        name: "Hemp 3",
        thumbnail: card4,
        description: "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel...",
        price: "$18"
      }
  ];
  return (
    <div className="container px-4 md:px-12 mx-auto">
      <div>
        <BreadCrumb title="Hemp"/>
      </div>

      <div className="container mx-auto py-10 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2  grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
