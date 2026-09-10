import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import SelectedWork from "@/components/sections/SelectedWork";
import WhySoftwayHub from "@/components/sections/WhySoftwayHub";
import Process from "@/components/sections/Process";
import AISolutions from "@/components/sections/AISolutions";
import TechnologyEcosystem from "@/components/sections/TechnologyEcosystem";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <SelectedWork />
        <WhySoftwayHub />
        <Process />
        <AISolutions />
        <TechnologyEcosystem />
      </main>
    </>
  );
}