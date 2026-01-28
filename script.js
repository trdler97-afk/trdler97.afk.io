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
      link.classList.add("active-link"); // use CSS class instead of inline styles
    }
  });
}

// Opening and closing toggle
function setupOpenClose() {
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const siteContent = document.getElementById("siteContent");

  if (openBtn && closeBtn && siteContent) {
    openBtn.addEventListener("click", () => {
      siteContent.style.display = "block";
      openBtn.style.display = "none";
    });

    closeBtn.addEventListener("click", () => {
      siteContent.style.display = "none";
      openBtn.style.display = "inline-block";
    });
  }
}

// Toggle dropdown menu
function toggleMenu() {
  const dropdown = document.getElementById("dropdown");
  if (dropdown) {
    dropdown.classList.toggle("show");
  }
}

// Toggle search box with smooth animation
function toggleSearchBox() {
  const box = document.getElementById("search-box");
  if (box) {
    box.classList.toggle("show");
    if (box.classList.contains("show")) {
      document.getElementById("search-input").focus();
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

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
  setActiveLink();
  setupOpenClose();
  setupSearch();
  setupPageTransitions();
});
