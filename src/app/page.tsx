import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd />
      <Header />
      <HeroSection />
      <AboutSection />
      <InstagramSection />
      <Footer />
    </main>
  );
}
