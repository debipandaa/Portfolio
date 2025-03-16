import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
const Home = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};
export default Home;
