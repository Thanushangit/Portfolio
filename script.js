const slid = document.getElementById("slider");
const header = document.getElementById("header");
const slider_a = document.getElementById("slider_a");

function slider() {
  // Toggle slider visibility
  slid.style.display = slid.style.display === "flex" ? "none" : "flex";
}

// Hide slider and reset background when screen width is above 992px
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    slid.style.display = "none";
  }
});

function sliderhide() {
  setTimeout(() => {
    slid.style.display = "none";
  }, 500);
}

var typed = new Typed(".text", {
  strings: [
    "Frontend Developer",
    "App Developer",
    "Backend Developer",
    "UI/UX Designer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  delay: 1000,
  loop: true,
});

// Get all links in the navbar
const navbarLinks = document.querySelectorAll(".navbar a");

// Loop through each link and add a click event listener
navbarLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    // Remove active class from all links
    navbarLinks.forEach((link) => link.classList.remove("active"));

    // Add active class to the clicked link
    this.classList.add("active");
  });
});
