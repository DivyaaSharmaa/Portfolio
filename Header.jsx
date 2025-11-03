import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
      <p>Frontend Developer | React Enthusiast | Designer</p>
      <a href="#Project" className="btn">View My Work</a>
       <div className="section">
         <h2>About Me</h2>
      <p>
        I'm a passionate frontend developer who loves building clean, responsive, and interactive web apps using React.
      </p>
    </div>
    </header>
    
  );
};

export default Header;
