import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductsSection from "./components/ProductsSections";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/Contactsection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
     <Header />
    <main>
      < Hero />
      <ProductsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      </main>
    < Footer />
    </>

  );
}