// pages/product.js
'use client'
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import picture from '../../../public/singingbowl1.jpg'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";



export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const product = [
    {
        name : "Elephant-Shaped",
        price : 20,
        description : "Things You Need To Know Using advanced crafting technology and high-quality materials, our premium elephant-shaped decorative item has a luxurious look and feel with subtly curved details. These striking, sophisticated pieces offer timeless design updated with intricate patterns at the base for just a bit of flair. The wide frame provides stability and elegance to any room decor.",
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Elephant-Shaped Product</title>
        <meta name="description" content="Elephant-shaped decorative item" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          
          <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
            <div className="relative w-full max-w-md aspect-square">
              <Image 
                src={picture}
                alt="Elephant-Shaped Decorative Item"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
          
          {/* Product Details (Right Side) */}
          <div className="w-full md:w-1/2 py-4">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">{product[0].name}</h1>
            <p className="text-xl font-medium text-yellow-700 mb-5">{product[0].price} VND</p>
            <hr className='border-gray-400 mb-6'/>
            
            <div className="text-gray-600 mb-6 py-4">
              <p>{product[0].description}</p>
            </div>
            
            <div className="flex items-center mb-5 font-medium">
              <span className="mr-2"><span className="text-yellow-700">30</span> sold in last</span>
              <span><span className="text-yellow-700">19</span> Hour</span>
            </div>
            
            <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
              <button className="px-4 py-2 whitespace-nowrap hover:text-yellow-700 focus:outline-none">Size guide</button>
              <button className="px-4 py-2 whitespace-nowrap hover:text-yellow-700 focus:outline-none">Delivery & Return</button>
              <button className="px-4 py-2 whitespace-nowrap hover:text-yellow-700 focus:outline-none">Ask a Question</button>
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
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full py-2 px-1 text-center focus:outline-none"
                    />
                  </div>
                  
                  {/* Plus/Minus Buttons Column */}
                  <div className="grid grid-rows-2">
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="flex items-center justify-center py-1 border-b border-gray-300 focus:outline-none hover:bg-gray-50"
                    >
                      <FaChevronUp/>
                    </button>
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="flex items-center justify-center py-1 focus:outline-none hover:bg-gray-50"
                    >
                      <FaChevronDown/>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            
            <button className="w-full bg-yellow-700 text-white py-3 font-medium rounded mb-3 hover:bg-yellow-800 transition duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50">
              ADD TO CART
            </button>
            
            <button className="w-full bg-gray-900 text-white py-3 font-medium rounded mb-5 hover:bg-black transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
              BUY IT NOW
            </button>
            
            <div className="text-sm mt-3">
              Real time <span className="text-yellow-700">20</span> Visitor right now
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}