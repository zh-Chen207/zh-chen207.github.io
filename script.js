// Mobile navigation

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });

});


// Automatically update copyright year

document.getElementById("year").textContent =
  new Date().getFullYear();


// Scroll animation

const elements = document.querySelectorAll(
  ".research-card, .project, .timeline-item, .academic-item, .skill-group"
);

elements.forEach(element => {
  element.classList.add("reveal");
});


const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }

    });

  },
  {
    threshold: 0.12
  }
);


elements.forEach(element => {
  observer.observe(element);
});