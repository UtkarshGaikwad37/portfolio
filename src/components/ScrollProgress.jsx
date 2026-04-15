import React, { useEffect } from "react";

const ScrollProgress = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      document.querySelector(".scroll-progress-bar").style.width =
        scrollPercent + "%";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress">
      <div className="scroll-progress-bar"></div>
    </div>
  );
};

export default ScrollProgress;
