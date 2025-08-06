import About from "@/components/ui/landing/About";
import Benefits from "@/components/ui/landing/Benefits";
import Contact from "@/components/ui/landing/Contact";
import Features from "@/components/ui/landing/Features";
import Footer from "@/components/ui/landing/Footer";
import Header from "@/components/ui/landing/Header";
import Hero from "@/components/ui/landing/Hero";
import HowItWorks from "@/components/ui/landing/HowItWorks";
import Pricing from "@/components/ui/landing/Pricing";
import Testimonials from "@/components/ui/landing/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
