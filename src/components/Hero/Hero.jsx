import "./Hero.css";
import coder from "../../assets/panda2.jpg";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="intro">
        <h1>
          Hello I'am <span>Debi Panda.</span>
          <br />
          <span className="span2">Fullstack</span>{" "}
          <span className="span3">Developer</span> Based In{" "}
          <span className="span4">India.</span>
        </h1>
        <p>
          I’m Debi Panda, a developer passionate about crafting scalable web
          applications and robust backend systems. With expertise in
          <span> JavaScript, Node.js, React, Express.js, Python, C++.</span>, I
          transform complex challenges into elegant solutions. Beyond coding, I
          enjoy Music and creating complex stuff from scratch cuz its fun and
          why not!. So let’s create something extraordinary together!
        </p>
      </div>
      <div>
        <img alt="Firstname Lastname illustration" src={coder} />
      </div>
    </div>
  );
};

export default Hero;
