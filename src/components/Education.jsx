import React from "react";

const Education = () => {
  const education = [
    {
      degree: "MCA",
      year: "2022 – 2024",
      college: "Modern College, Pune",
      score: "CGPA: 8.40",
    },
    {
      degree: "B.Sc. Computer Science",
      year: "2019 – 2022",
      college: "Modern College, Pune",
      score: "CGPA: 8.33",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      year: "2019",
      college: "Nav Maharashtra Vidyalaya, Pimpri Waghire, Pune",
      score: "Percentage: 50.30%",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      year: "2017",
      college: "Modern High School, Shivajinagar, Pune",
      score: "Percentage: 75.60%",
    },
  ];

  return (
    <section id="education" className="section container fade-up">
      <h2 className="section-title">Education</h2>

      <div className="education-grid">
        {education.map((edu) => (
          <div key={edu.degree} className="education-card fade-up">
            <div className="edu-header">
              <h3>{edu.degree}</h3>
              <span className="edu-year">{edu.year}</span>
            </div>
            <p className="edu-college">{edu.college}</p>
            <p className="edu-score">{edu.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
