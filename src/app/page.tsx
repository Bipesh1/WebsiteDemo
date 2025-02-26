"use client"
import BestSeller from "@/components/sections/best-seller";
import HeroSection from "@/components/sections/hero-section";
import HotDealsSection from "@/components/sections/hot-deals-section";
import FooterSection from "@/components/sections/footer";
import OurServices from "@/components/sections/our-services";
import ShopnowSection from "@/components/sections/shopnow-section";
 
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection/>
      <OurServices/>
      <ShopnowSection/>
      <BestSeller/>
      <HotDealsSection/>
      <FooterSection/>
    </div>
  );
}
