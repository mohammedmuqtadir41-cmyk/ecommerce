
import BestSellers from "@/components/home/BestSellers";
import HeroSection from "@/components/home/HeroSection";
import { LatestCollection } from "@/components/home/LatestCollection";
import { ShopWithUs } from "@/components/home/ShopWithUs";
import { FrontendLayout } from "@/components/layouts/FrontendLayout";

export default function Home() {
  return (
    <FrontendLayout >
      <HeroSection />
      <LatestCollection />
      <BestSellers />
      <ShopWithUs />
      </FrontendLayout>
  );
}
