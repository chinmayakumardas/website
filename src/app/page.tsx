import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/featuredwork";
import Contact from "@/components/sections/contact";
import { Services } from "@/components/sections/services";
import AboutMe from "@/components/sections/aboutme";

export default function HomePage() {
  return (
    <>
    

      <main>
        <Hero/>
        <AboutMe/>
        <Projects />
        <Services/>
   
        <Contact/>
      </main>

  
    </>
  );
}



