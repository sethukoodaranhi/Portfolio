import PortfolioNav from "./components/PortfolioNav";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import Skill from "./components/Skill";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <HomeSection/>
      <AboutSection/>
      <Skill/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
