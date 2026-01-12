import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PlanVisitSection from "@/components/PlanVisitSection";
import StaffCalendarSection from "@/components/StaffCalendarSection";
import NextStepsSection from "@/components/NextStepsSection";
import SermonsSection from "@/components/SermonsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <PlanVisitSection />
      <StaffCalendarSection />
      <NextStepsSection />
      <SermonsSection />
      <Footer />
    </main>
  );
}
