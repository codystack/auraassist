import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import Pillars from "@/components/Pillars";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Statement from "@/components/Statement";
import WaysToWork from "@/components/WaysToWork";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Statement />
        <Highlights />
        <Pillars />
        <Services />
        <Process />
        <Testimonials />
        <WaysToWork />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
