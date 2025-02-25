"use client"
import BestSeller from "@/components/sections/best-seller";
import HeroSection from "@/components/sections/hero-section";
import OurServices from "@/components/sections/our-services";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection/>
      <OurServices/>
      <BestSeller/>
      <HotDealsSection/>
      <FooterSection/>
    </div>
  );
}
