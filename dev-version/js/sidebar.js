// Sidebar functionality
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".sidebar .sidebar_nav_links a");

  // Get the full URL of the current page
  const url = window.location.href;

  // Extract the filename from the URL
  const filename = url.substring(url.lastIndexOf("/") + 1);

  // Add class active to the nav link of the opened page
  if (!filename) {
    navLinks[0].classList.add("active");
  } else {
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === filename) link.classList.add("active");
    });
  }
});
