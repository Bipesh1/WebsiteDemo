"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import { Dancing_Script } from 'next/font/google'
import Image from 'next/image'
import heroimage2 from "../../../public/hemp.webp"
import heroimage from "../../../public/singingbowl1.jpg"
import heroimage1 from "../../../public/singingbowl2.jpeg"

const dancingscript= Dancing_Script({
    weight: ['400','500','600','700'],
    subsets: ['latin'],
})

export default function HeroSection() {
  return (
    <section className='container mx-auto grid md:grid-cols-2 grid-cols-1 space-y-10 md:space-y-0  mb-10'>
        <Carousel
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className=""
            >
              <CarouselContent className=''>
                {[heroimage, heroimage1,heroimage2].map((image, index) => (
                  <CarouselItem key={index} className='mx-auto' >
                    <div className='relative w-full h-[40rem]'>
                    <Image
                      src={image}
                      alt="singing bowl"
                      className='object-contain'
                      fill
                      />
                      </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
       
        <motion.div initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className='flex bg-secondary/20  flex-col justify-center text-3xl p-5 md:p-0 text-center md:text-5xl font-semibold space-y-8'>
            <p className={dancingscript.className}>Your Trusted Solution for <span className='text-secondary'>Hemp</span> and <span className='text-primary'>Singing Bowl products</span></p>
            <p className='font-extralight text-base md:text-xl'>Order online and get the <span className='text-secondary'>product</span> delivered to your home.</p>
        </motion.div>
    </section>
  )
}
