// Highlight active nav link
(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((link) => {
    const href = (link.getAttribute("href") || "").split("/").pop();
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
})();
