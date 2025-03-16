import "./About.css";
import coder from "../../assets/panda.svg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-img">
        <img src={coder} alt="" />
      </div>
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          {" "}
          I’m a tech enthusiast with a passion for diving into new challenges
          and expanding my skill set. I’m exploring Linux by experimenting with
          building it from scratch and working on backend development using the
          MERN stack (minus React). I enjoy working on creative projects, such
          as crafting Rainmeter skins and experimenting with Lua. Currently, I’m
          delving into parallel computing and looking forward to creating my own
          library in this domain. Beyond tech, I aim for simplicity and clarity
          in everything I do—whether it’s coding or learning.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
