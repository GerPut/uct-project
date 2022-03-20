
// Navbar
const lineMenu = document.querySelector(".lines-menu");
const navbar = document.querySelector(".navbar");

lineMenu.addEventListener("click", () => {
    navbar.classList.toggle("drop");
    lineMenu.classList.toggle("rotatechange")
    lineMenu.classList.toggle("spin")
});
// End of Navbar

// Animate on Scroll
AOS.init();