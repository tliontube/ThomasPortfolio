import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Projects from "@/components/main/Projects";
import Skill from "@/components/main/Skills";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Navbar/>
        <Hero />
        <Skill />
        <Projects />
        <Footer/>
      </div>
    </main>
  );
}
