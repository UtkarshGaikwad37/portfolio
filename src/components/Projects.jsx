import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "News App",
      description:
        "Responsive news aggregator with categories, search, and live headlines.",
      live: "https://news-app-rho-topaz.vercel.app/",
      github: "https://github.com/UtkarshGaikwad37/News-App.git",
    },
    {
      title: "Nutrition Tracker App",
      description:
        "Daily meal planner and calorie tracker with nutrition summaries.",
      live: "https://nutrition-tracker-tawny-eight.vercel.app/",
      github: "https://github.com/UtkarshGaikwad37/nutrition_tracker.git",
    },
    {
      title: "Airbnb Clone",
      description:
        "Modern property listing UI with search, filters, and booking flow.",
      live: "https://airbnb-clone-beta-plum.vercel.app/listings",
      github: "https://github.com/UtkarshGaikwad37/airbnb_clone.git",
    },
    {
      title: "Weather App",
      description:
        "Real-time weather forecasts using an API and location search.",
      live: "https://weather-app-three-ruby-69.vercel.app/",
      github: "https://github.com/UtkarshGaikwad37/weather_app.git",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "Instant messaging interface with rooms and real-time chat UI.",
      live: "https://chat-app-xi-six-65.vercel.app/login",
      github: "https://github.com/UtkarshGaikwad37/realtime-chat-app.git",
    },
  ];

  return (
    <section id="projects" className="section container fade-up">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={project.title} className="project-card fade-up">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.live} className="primary-button">
              Live
            </a>
            <a href={project.github} className="secondary-button">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
