import BestSeller from "@/components/sections/best-seller";
import HeroSection from "@/components/sections/hero-section";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection/>
      <BestSeller/>
    </div>
  );
}
