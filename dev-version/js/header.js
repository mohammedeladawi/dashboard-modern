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
