import React, { useEffect, useRef } from "react";

const Skills = () => {
  const skillBarsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              const bar = entry.target.querySelector("span");
              bar.style.width = "0%";
              setTimeout(() => {
                bar.style.width = bar.getAttribute("data-width");
              }, 200);
            }, index * 150);
          }
        });
      },
      { threshold: 0.5 },
    );

    skillBarsRef.current.forEach((bar) => observer.observe(bar));

    return () => observer.disconnect();
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
          >
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <span
                style={{ width: skill.width }}
                data-width={skill.width}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
