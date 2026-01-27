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

// Opening and closing toggle
function setupOpenClose() {
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const siteContent = document.getElementById("siteContent");

  if (openBtn && closeBtn && siteContent) {
    // Show content
    openBtn.addEventListener("click", () => {
      siteContent.style.display = "block";
      openBtn.style.display = "none";
    });

    // Hide content
    closeBtn.addEventListener("click", () => {
      siteContent.style.display = "none";
      openBtn.style.display = "inline-block";
    });
  }
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
  setActiveLink();
  setupOpenClose();
});
