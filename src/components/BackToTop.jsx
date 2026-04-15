import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroText = "Building modern web applications";
    const heroElement = document.querySelector(".hero h1");
    let i = 0;

    function typeWriter() {
      if (i < heroText.length) {
        heroElement.innerHTML =
          heroText.substring(0, i + 1) + '<span class="cursor">|</span>';
        i++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => {
          heroElement.innerHTML = heroText;
        }, 1000);
      }
    }

    setTimeout(() => {
      heroElement.innerHTML = '<span class="cursor">|</span>';
      typeWriter();
    }, 1000);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="backToTop"
      className={isVisible ? "show" : ""}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;
