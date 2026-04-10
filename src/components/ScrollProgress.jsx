import React, { useEffect } from "react";

const ScrollProgress = () => {
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const progressBar = document.querySelector(".scroll-progress-bar");
      if (progressBar) {
        progressBar.style.width = scrollPercent + "%";
      }
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="scroll-progress">
      <div className="scroll-progress-bar"></div>
    </div>
  );
};

export default ScrollProgress;
