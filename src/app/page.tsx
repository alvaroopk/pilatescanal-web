import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Center from "@/components/sections/Center";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Team />
        <Testimonials />
        <Center />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
