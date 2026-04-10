import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section container fade-up">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm open to opportunities, collaborations, or just a friendly chat.
            Feel free to reach out!
          </p>

          <div className="contact-details">
            <p>
              <strong>Email:</strong> utkarshtg3011@gmail.com
            </p>
            <p>
              <strong>Location:</strong> Pune, India
            </p>
          </div>

          <a href="mailto:utkarshtg3011@gmail.com" className="primary-button">
            Send Message
          </a>
        </div>

        <div className="contact-social">
          <h3>Find Me Online</h3>

          <a
            href="https://linkedin.com/in/utkarsh-gaikwad-4309112a6"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <span className="social-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4.98 3.5C4.98 4.88071 3.88071 6 2.49 6C1.09929 6 0 4.88071 0 3.5C0 2.11929 1.09929 1 2.49 1C3.88071 1 4.98 2.11929 4.98 3.5ZM0.24 8.25H4.74V24H0.24V8.25ZM8.25 8.25H12.75V10.53H12.81C13.45 9.39 15.16 8.22 17.39 8.22C22.12 8.22 24 10.66 24 15.44V24H19.5V16.44C19.5 14.58 19.44 12.09 16.5 12.09C13.5 12.09 13.14 14.22 13.14 16.32V24H8.64V8.25H8.25Z"
                  fill="currentColor"
                />
              </svg>
              LinkedIn
            </span>
            <small>Professional Profile</small>
          </a>

          <a
            href="https://github.com/UtkarshGaikwad37"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <span className="social-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 .297C5.37.297 0 5.667 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.084-.73.084-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.304-.535-1.524.115-3.176 0 0 1.005-.323 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.553 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.1.81 2.22 0 1.605-.015 2.9-.015 3.29 0 .32.21.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.667 18.63.297 12 .297Z"
                  fill="currentColor"
                />
              </svg>
              GitHub
            </span>
            <small>Projects & Code</small>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
