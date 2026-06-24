import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import WhatIBuild from "@/components/WhatIBuild";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 lg:px-8">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <WhatIBuild />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
