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

// Toggle dropdown menu
function toggleMenu() {
  document.getElementById("dropdown").classList.toggle("show");
}

// Show search box with smooth animation
function showSearchBox() {
  const box = document.getElementById("search-box");
  box.classList.add("show");
  document.getElementById("search-input").focus();
}

// Handle search input
function setupSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      let query = e.target.value.toLowerCase().trim();
      if (query.includes("home")) {
        window.location.href = "index.html";
      } else if (query.includes("about")) {
        window.location.href = "about.html";
      } else if (query.includes("contact")) {
        window.location.href = "contact.html";
      } else if (query.includes("news")) {
        window.location.href = "news.html";
      } else if (query.includes("shops")) {
        window.location.href = "shops.html";
      } else if (query.includes("events")) {
        window.location.href = "events.html";
      } else if (query.includes("activities")) {
        window.location.href = "activities.html";
      } else {
        alert("Page not found on this site.");
      }
    }
  });
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
  setActiveLink();
  setupOpenClose();
  setupSearch();
});
