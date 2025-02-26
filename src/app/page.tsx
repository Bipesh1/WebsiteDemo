import BestSeller from "@/components/sections/best-seller";
import HeroSection from "@/components/sections/hero-section";
import FooterSection from "@/components/sections/footer";
import ProductPage from "@/components/sections/product_detail";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection/>
      <BestSeller/>
      <ProductPage/>
      <FooterSection/>
    </div>
  );
}
