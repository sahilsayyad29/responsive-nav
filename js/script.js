const toggleMenu = document.getElementById("navMenu");
const toggleBtn = document.getElementById("btn");

toggleBtn.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
});
