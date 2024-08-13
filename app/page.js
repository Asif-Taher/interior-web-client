import AboutComponent from "@/components/AboutComponent";
import CatalogSwiperSelection from "@/components/CatalogSwiperSelection";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
      <HeroSection></HeroSection>
      <CompanySection></CompanySection>
      <AboutComponent></AboutComponent>
      <CatalogueSection></CatalogueSection>
      <CatalogSwiperSelection></CatalogSwiperSelection>
      <ContactSection></ContactSection>
    </>
  );
}
