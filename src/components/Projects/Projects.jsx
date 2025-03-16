import "./Projects.css";
import codingimg from "../../assets/coding1.png";
import projectimg from "../../assets/project1.webp";
const Projects = () => {
  const projects = [
    {
      imagePath: projectimg,
      name: "Video Streaming System",
      disciption:
        "○ Full-stack development with MERN stack, FFmpeg transcoding, adaptive bitrate streaming, cloud/self-hosted deployment, and load balancing for scalability. Complex media processing pipeline and high traffic management.",
    },
    {
      imagePath: projectimg,
      name: "Torrent Client",
      disciption:
        "Developed the BitTorrent protocol from scratch in C++, including peer-to-peer communication, multi-threading, and error-handling. Built for high performance, file integrity checks, and scalable design.",
    },
    {
      imagePath: projectimg,
      name: "Rainmeter Skin for Displaying Lyrics",
      disciption:
        "Developed an advanced Rainmeter skin using Lua scripting, with dynamic real-time lyric fetching, user interaction, and integration with external APIs. Optimized for performance with complex Lua scripting and low system resource usage",
    },
    {
      imagePath: projectimg,
      name: "Resource Management System (Seminar Hall Booking)",
      disciption:
        "○ Implemented user authentication, role-based access control, and email notifications. Full implementation of booking process from student submission to teacher approval.",
    },
  ];

  return (
    <div className="project-container">
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map((project, index) => {
          return (
            <div key={index} className={`project-${index % 2}`}>
              <div className="project-img">
                <img src={codingimg} alt="" />
              </div>
              <div className="project-info">
                <h2>{project.name}</h2>
                <p>{project.disciption}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
