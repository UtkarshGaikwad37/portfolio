import React from "react";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-top">
        <a className="brand" href="#">
          Utkarsh Gaikwad
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
