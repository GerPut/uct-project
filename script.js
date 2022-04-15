
// Navbar
const lineMenu = document.querySelector(".lines-menu");
const navbar = document.querySelector(".navbar");

lineMenu.addEventListener("click", () => {
    navbar.classList.toggle("drop");
    lineMenu.classList.toggle("rotatechange")
    lineMenu.classList.toggle("spin")
});
// End of Navbar

//Button 
function newPage() {
    window.location.href = 'trails.html'
}
// Animate on Scroll
AOS.init();


// Find Divs that are wider than viewport
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
    document.querySelectorAll('*'),
    function (el) {
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
);
