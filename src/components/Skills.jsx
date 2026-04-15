import React, { useEffect, useRef } from "react";

const Skills = () => {
  const skillBarsRef = useRef([]);

  useEffect(() => {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target.querySelector("span");
            const targetWidth = bar.dataset.width || "80%";
            bar.style.width = targetWidth;
            bar.style.setProperty("--target-width", targetWidth);
            bar.style.animation = "fillBar 1.5s ease-out forwards";
          }
        });
      },
      { threshold: 0.5 },
    );

    document
      .querySelectorAll(".skill-bar")
      .forEach((bar) => skillObserver.observe(bar));

    return () => skillObserver.disconnect();
  }, []);

  const skills = [
    { name: "HTML", width: "80%" },
    { name: "CSS", width: "75%" },
    { name: "JavaScript", width: "70%" },
    { name: "React", width: "65%" },
    { name: "Node.js / Express", width: "65%" },
    { name: "MySQL / SQL", width: "80%" },
    { name: "MongoDB (Mongoose)", width: "85%" },
    { name: "Python", width: "58%" },
    { name: "Git & GitHub", width: "60%" },
    { name: "RESTful APIs", width: "70%" },
  ];

  return (
    <section id="skills" className="section container fade-up">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-card fade-up"
            ref={(el) => (skillBarsRef.current[index] = el)}
            data-delay={index * 60}
          >
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <span data-width={skill.width}></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
