document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("Toggle");
  const images = toggleButton.getElementsByTagName("img");
  const body = document.body;
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  images[0].style.display = "block";
  images[1].style.display = "none";

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      images[0].style.display = "none";
      images[1].style.display = "block";
    } else {
      images[0].style.display = "block";
      images[1].style.display = "none";
    }
  });

  // Toggle the navbar on mobile
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Change the hamburger icon to "X" when menu is open
    if (navLinks.classList.contains("active")) {
      hamburger.textContent = "X";
    } else {
      hamburger.textContent = "☰";
    }
  });
});


