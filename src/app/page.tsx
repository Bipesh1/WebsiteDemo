import BestSeller from "@/components/sections/best-seller";
import HeroSection from "@/components/sections/hero-section";
import FooterSection from "@/components/sections/footer";
import HotDealsSection from "@/components/sections/hot-deals-section";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection/>
      <BestSeller/>
      <HotDealsSection/>
      <FooterSection/>
    </div>
  );
}
