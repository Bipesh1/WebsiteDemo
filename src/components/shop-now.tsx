import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

type shopnow = {
    text: string,
    heading: string,
    buttonTitle: string,
    imageSrc: string,
}

export default function ShopNow({ shopnow }: { shopnow: shopnow }) {
    return (
        <div className="relative w-full lg:max-w-lg mx-auto group">
            {/* Background Image */}
            <div className="relative w-full h-[300px] overflow-hidden ">
                <Image
                    src={shopnow.imageSrc}
                    alt="Rectangular Vases"
                    fill
                    className="object-cover transition-transform duration-500 ease-linear group-hover:scale-105"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
                <p className="text-sm">{shopnow.text}</p>
                <h2 className="text-2xl font-semibold">{shopnow.heading}</h2>
                <Button variant={'ghost'} className="mt-3 px-5 py-2 border border-white rounded-none hover:bg-primary hover:text-white hover:border-none transition-all duration-200">
                    {shopnow.buttonTitle}
                </Button>
            </div>
        </div>
    )
}
