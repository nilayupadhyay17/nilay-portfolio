import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 py-10 md:py-16 lg:px-8">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <footer className="mt-24 border-t border-border pt-8 text-center text-xs text-muted md:text-left">
          © {new Date().getFullYear()} {site.personal.name} · Senior Software
          Engineer
        </footer>
      </main>
    </>
  );
}
