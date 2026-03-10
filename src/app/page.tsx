import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ContactSection />
        <InstagramSection />
        <Footer />
      </main>
    </>
  );
}
