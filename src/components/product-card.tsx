"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Button } from "./ui/button";

type Product = {
  name: string;
  description: string;
  thumbnail: StaticImageData;
  price: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col space-y-4 w-full md:w-full lg:w-[300px] min-h-[300px]">

      <Link
        href={""}
        className={`relative group w-full h-full bg-primary/10`}
      >
        <Image
          src={product.thumbnail}
          alt="singing-bowl"
          className="object-cover p-10 hover:scale-105 transition-all"
          />
        <div className="opacity-0 w-full absolute flex group-hover:opacity-100 group-hover:bottom-8  transition-all duration-300 justify-evenly bottom-0 p-2">
          <div className="bg-white p-2 rounded-full">
            <FaEye className="text-xl" />
          </div>
          <div className="bg-white p-2 rounded-full">
            <CiHeart className="text-xl" />
          </div>
          <div className="bg-white p-2 rounded-full">
            <Drawer>
              <DrawerTrigger asChild>
                <CiSearch className="text-xl" />
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-2xl">
                  <DrawerHeader className="space-y-4">
                    <DrawerTitle>{product.name}</DrawerTitle>
                    <DrawerDescription>{product.description}</DrawerDescription>
                  </DrawerHeader>
                  <div className="container mx-auto p-4">
                    <div className="grid grid-cols-2 space-x-10">
                      <div className=" w-64 bg-primary/10">
                        <Image
                          src={product.thumbnail}
                          alt="singing-bowl"
                          className="object-cover p-10 hover:scale-105 transition-all"
                        />
                      </div>
                      <div className="flex flex-col justify-center space-y-2">
                        <h2 className="text-xl font-semibold text-primary">
                          {product.name}
                        </h2>
                        <DrawerDescription className="text-secondary">
                          {product.price}
                        </DrawerDescription>
                        <DrawerDescription>
                          {product.description}
                        </DrawerDescription>
                      </div>
                    </div>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button>Order The Product</Button>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Button variant={"outline"}>Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </Link>
      <div className="text-center text-secondary">
        <p className="text-primary">{product.name}</p>
        <p>{product.price}</p>
      </div>
      </div>
  );
}
