import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="header">
        <h1>
          Let's <span className="highlight">talk</span> for
          <br />
          Something special
        </h1>
        <p className="subtitle">
          I strive to combine creativity and technical expertise to build
          user-friendly, impactful, and memorable digital experiences.
        </p>
        <a href="mailto:debiipandaa@gmail.com" className="email">
          debiipandaa@gmail.com
        </a>
        <button className="cta-button">Get In Touch</button>
      </header>
      <footer className="footer">
        <p>© 2024 Debi. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
