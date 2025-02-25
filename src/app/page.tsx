import BestSeller from "@/components/sections/best-seller";
import HeroSection from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection/>
      <BestSeller/>
    </div>
  );
}
