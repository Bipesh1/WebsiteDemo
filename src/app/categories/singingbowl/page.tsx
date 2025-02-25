"use client";
import BreadCrumb from "@/components/bread-crumb";
import card1 from "../../../../public/singingbowlimage/1.webp";
import card2 from "../../../../public/singingbowlimage/2.png";
import {motion} from "framer-motion"
import ProductCard from "@/components/product-card";

export default function ProductView() {

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
      name: "Singing Bowl 2",
      thumbnail: card2,
      description: "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel...",
      price: "$18"
    },
    {
      name: "Singing Bowl 2",
      thumbnail: card1,
      description: "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel...",
      price: "$18"
    }
  ];
  return (
    <div className="container px-4 md:px-12 mx-auto">
      <div>
        <BreadCrumb title="Singing Bowl"/>
      </div>

      <div className="container mx-auto py-10 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2  grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        >
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
