import React, { useEffect, useState } from "react";

const Hero = () => {
  const [heroText, setHeroText] = useState("");
  const fullText = "Building modern web applications";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setHeroText(fullText.substring(0, currentIndex + 1));
      currentIndex += 1;
      if (currentIndex > fullText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero container fade-up">
      <div className="hero-copy">
        <p className="eyebrow">Front-End Developer | MCA Graduate</p>
        <h1>
          {heroText}
          <span className="cursor">|</span>
        </h1>
        <p>
          I create responsive, clean and user-friendly web apps using modern
          technologies like React and JavaScript.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="primary-button">
            Contact Me
          </a>
          <a
            href="/resume/My Resume.pdf"
            className="secondary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/images/illustration.png"
          alt="Web development illustration"
        />
      </div>
    </section>
  );
};

export default Hero;
