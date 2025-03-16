import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "Backend Developer Intern at PICT",
      year: "February 2024- May 2024",
      discription:
        "Implemented reusable ReactJS components, enhancing development efficiency and code maintainability by 30%. ◦ Assisted in integrating front-end services with back-end services, ensuring smooth data flow and 100% functionality across all modules.",
    },
  ];
  return (
    <div className="experience-container">
      <h1>My Experience</h1>
      <div className="experience-cards">
        {experiences.map((experience, index) => {
          return (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h2>{experience.company}</h2>
                <p>{experience.year}</p>
              </div>
              <div className="experience-discription">
                <p>{experience.discription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
