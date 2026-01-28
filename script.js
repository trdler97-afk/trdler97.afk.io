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
      link.classList.add("active-link"); // CSS handles styling
    }
  });
}

// Toggle search box with smooth animation
function toggleSearchBox() {
  const box = document.getElementById("search-box");
  if (box) {
    box.classList.toggle("show");
    if (box.classList.contains("show")) {
      const input = document.getElementById("search-input");
      if (input) input.focus();
    }
  }
}

// Handle search input
function setupSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  const pages = {
    home: "index.html",
    about: "about.html",
    contact: "contact.html",
    news: "news.html",
    shops: "shops.html",
    events: "events.html",
    activities: "activities.html"
  };

  searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      let query = e.target.value.toLowerCase().trim();
      let found = false;
      for (const key in pages) {
        if (query.includes(key)) {
          window.location.href = pages[key];
          found = true;
          break;
        }
      }
      if (!found) alert("Page not found on this site.");
    }
  });
}

// Smooth page transitions
function setupPageTransitions() {
  document.body.classList.add("fade-in");

  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      const target = this.getAttribute("href");
      if (target && !target.startsWith("http") && !target.startsWith("#")) {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        setTimeout(() => {
          window.location.href = target;
        }, 400); // match CSS transition timing
      }
    });
  });
}

// Animate message/statement sections when they appear
function setupMessageAnimations() {
  const messages = document.querySelectorAll(".message, .statement");
  if (!messages.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("highlight");
      }
    });
  }, { threshold: 0.2 });

  messages.forEach(msg => observer.observe(msg));
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
  setActiveLink();
  setupSearch();
  setupPageTransitions();
  setupMessageAnimations();
});
