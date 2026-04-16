
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About"; 
import CategoryAccordion from "@/components/CategoryAccordion";
import Contact from "@/components/Contact";
import CaseStudiesSection from "@/components/CaseStudiesSection";
// import { categories } from "@/content/categories";  

export default function HomePage() {

  return (
    <main className="relative min-h-screen overflow-hidden  bg-[radial-gradient(circle_at_top,#1A1730_0%,#111018_45%,#0B0B12_100%)] text-slate-900">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-6rem] top-16 h-72 w-72 rounded-full bg-[#51CED9]/25 blur-3xl" />
        <div className="absolute right-[-4rem] top-28 h-80 w-80 rounded-full bg-[#8A7EE4]/25 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-[#90C8FF]/30 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-[#420CA3]/10 blur-3xl" />
      </div>
      <Header />
      <HeroSection />
      <About />
      <CategoryAccordion />
      <CaseStudiesSection />
      <Contact /> 
    </main>
  );
}