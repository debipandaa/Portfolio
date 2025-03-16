import "./Navbar.css";
import svg from "../../assets/panda.svg";
import { useState } from "react";

const Navbar = () => {
  const [isopen, setopen] = useState(false);
  const buttons = ["Skills", "Experience", "About", "Project", "Contact"];
  return (
    <nav>
      <div className="home-logo">
        <img src={svg} alt="" />
      </div>
      <div className="menu" onClick={() => setopen(!isopen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isopen ? "open" : ""}>
        {buttons.map((buttonName, index) => {
          return (
            <li key={index}>
              <a href={`#${buttonName.toLowerCase()}`}>{buttonName}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
