document.addEventListener("DOMContentLoaded", function () {
  // Dashboard functionality
  // Latest Tasks
  const deleteBtns = document.querySelectorAll(".widget--tasks  .delete");
  deleteBtns.forEach((btn) => {
    console.log(btn.parentElement);
    btn.onclick = () => btn.parentElement.classList.add("deleted");
  });
});
