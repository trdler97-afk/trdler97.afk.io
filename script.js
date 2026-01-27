// Confirm script is loaded
console.log("JavaScript loaded successfully");

// Smooth scroll down function
function scrollDown() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}

// Highlight active navigation link
function setActiveLink() {
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.color = "#00cc00"; // darker green for active page
      link.style.textDecoration = "underline";
    }
  });
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
  setActiveLink();
});
