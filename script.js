// Animate on Scroll
AOS.init();

// Navbar
const lineMenu = document.querySelector(".lines-menu");
const navbar = document.querySelector(".navbar");

lineMenu.addEventListener("click", () => {
    navbar.classList.toggle("rotatechange");
    lineMenu.classList.toggle('rotatechange')
    lineMenu.classList.toggle("rotate")
});
// End of Navbar