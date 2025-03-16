import "./Skills.css";

const Skills = () => {
  const skills = [
    "C",
    "CPP",
    "Python",
    "Javascript",
    "TypeScript",
    "Lua",
    "HTML",
    "CSS",
    "React",
    "Express",
    "NodeJs",
    "Redux",
    "MySQL",
    "MongoDb",
    "PostgreSQL",
    "Neon4j",
    "Aws",
    "Azure",
    "Linux",
    "Docker",
    "Git",
  ];
  return (
    <div className="skills-container">
      <div>
        <h1>My Skills</h1>
      </div>
      <div className="skills">
        {skills.map((skill, index) => {
          return (
            <div className="skill" key={index}>
              <h2>{skill}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
