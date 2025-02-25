import BestSeller from "@/components/sections/best-seller";
import Blog from "@/components/sections/blog";
import HempImage from "@/components/sections/hemp-image";
import HeroSection from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection/>
      <BestSeller/>
      <HempImage/>
      <Blog/>
    </div>
  );
}
