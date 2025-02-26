"use client";
import Head from "next/head";
import Image from "next/image";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import FooterSection from "@/components/sections/footer";


export default function ProductPage() {
  const searchParams = useSearchParams();
  const productData = searchParams.get("data");
  const product = productData ? JSON.parse(productData) : null;

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="text-center py-20 text-xl">Product not found.</div>;
  }

  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
    <div className="min-h-screen bg-white">
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src={product.thumbnail}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 py-4">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              {product.name}
            </h1>
            <p className="text-xl font-medium text-yellow-700 mb-5">
              {product.price}
            </p>
            <hr className="border-gray-400 mb-6" />

            <div className="text-gray-600 mb-6 py-4">
              <p>{product.description}</p>
            </div>

            <div className="flex items-center mb-5 font-medium">
              <span className="mr-2">
                <span className="text-yellow-700">30</span> sold in last
              </span>
              <span>
                <span className="text-yellow-700">19</span> Hour
              </span>
            </div>

            <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
              <button className="px-4 py-2 whitespace-nowrap hover:text-yellow-700 focus:outline-none">
                Size guide
              </button>
              <button className="px-4 py-2 whitespace-nowrap hover:text-yellow-700 focus:outline-none">
                Delivery & Return
              </button>
              <button className="px-4 py-2 whitespace-nowrap hover:text-yellow-700 focus:outline-none">
                Ask a Question
              </button>
            </div>

            <div className="mb-5">
              <div className="w-24 border border-gray-300 rounded">
                <div className="grid grid-cols-2">
                  {/* Quantity Input Column */}
                  <div className="flex justify-center items-center border-r border-gray-300">
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-full py-2 px-1 text-center focus:outline-none"
                    />
                  </div>

                  {/* Plus/Minus Buttons Column */}
                  <div className="grid grid-rows-2">
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="flex items-center justify-center py-1 border-b border-gray-300 focus:outline-none hover:bg-gray-50"
                    >
                      <FaChevronUp />
                    </button>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="flex items-center justify-center py-1 focus:outline-none hover:bg-gray-50"
                    >
                      <FaChevronDown />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-primary text-white py-3 font-medium rounded mb-5 hover:bg-black transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
              BUY IT NOW
            </button>

            <div className="text-sm mt-3">
              Real time <span className="text-primary">20</span> Visitor
              right now
            </div>
          </div>
        </div>
      </main>
      <FooterSection/>
    </div>
</Suspense>
  );
}
