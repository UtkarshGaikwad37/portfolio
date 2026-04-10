// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.querySelector(".scroll-progress-bar").style.width =
    scrollPercent + "%";
});

// Back to top button
const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Fade up animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150); // Stagger delay
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

// Skill bar animation
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector("span");
        const targetWidth = bar.style.width || "80%";
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

// Typing effect for hero
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
    // Remove cursor after typing
    setTimeout(() => {
      heroElement.innerHTML = heroText;
    }, 1000);
  }
}

// Start typing after page load
window.addEventListener("load", () => {
  heroElement.innerHTML = '<span class="cursor">|</span>';
  setTimeout(typeWriter, 1000);
});
