import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { NavItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black
    flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 p-5">
      <div className="max-w-7xl w-full">
        <nav className="hidden sm:block">
          <FloatingNav navItems={NavItems} />
        </nav>
        <Hero />
        <Projects />
        <Achievements />
        <Footer />
      </div>
    </main>
  );
}
