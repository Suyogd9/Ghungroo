// ============================================================
// Highlight active nav link based on current page
// ============================================================
(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href").split("/").pop();
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
})();

// ============================================================
// Mobile menu toggle
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }
});
