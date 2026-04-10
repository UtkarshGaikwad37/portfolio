import React, { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building modern web applications";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      let i = 0;
      const typeWriter = () => {
        if (i < fullText.length) {
          setTypedText(
            fullText.substring(0, i + 1) + '<span class="cursor">|</span>',
          );
          i++;
          setTimeout(typeWriter, 100);
        } else {
          setTimeout(() => {
            setTypedText(fullText);
            setIsTyping(false);
          }, 1000);
        }
      };
      setTypedText('<span class="cursor">|</span>');
      setTimeout(typeWriter, 1000);
    }
  }, [isTyping]);

  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">Front-End Developer | MCA Graduate</p>
        <h1 dangerouslySetInnerHTML={{ __html: typedText }}></h1>
        <p>
          I create responsive, clean and user-friendly web apps using modern
          technologies like React and JavaScript.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="primary-button">
            Contact Me
          </a>
          <a href="resume.pdf" className="secondary-button" target="_blank">
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
