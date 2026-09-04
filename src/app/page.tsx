import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Toolbox from "@/components/Toolbox";
import SoftSkills from "@/components/SoftSkills";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectStory from "@/components/ProjectStory";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-noise min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Toolbox />
      <SoftSkills />
      <FeaturedProject />
      <ProjectStory />
      <TechStack />
      <Education />
      <Socials />
      <Contact />
    </main>
  );
}



