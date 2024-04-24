// Header functionality
document.addEventListener("DOMContentLoaded", function () {
  // Notification icon
  const notificationIcon = document.querySelector(".icon--notifications");
  const notificationContent = document.querySelector(".content--notifications");

  notificationIcon.addEventListener("click", function () {
    notificationContent.classList.toggle("content--show");
  });

  // Profile icon
  const profileIcon = document.querySelector(".icon--profile");
  const profileContent = document.querySelector(".content--profile");

  profileIcon.addEventListener("click", function () {
    profileContent.classList.toggle("content--show");
  });

  // Close content when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !notificationIcon.contains(event.target) &&
      !notificationContent.contains(event.target)
    ) {
      notificationContent.classList.remove("content--show");
    }
    if (
      !profileIcon.contains(event.target) &&
      !profileContent.contains(event.target)
    ) {
      profileContent.classList.remove("content--show");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Dashboard functionality
  // Latest Tasks
  const deleteBtns = document.querySelectorAll(".widget--tasks  .delete");
  deleteBtns.forEach((btn) => {
    btn.onclick = () => btn.parentElement.classList.add("deleted");
  });
});

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
