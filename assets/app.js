//Scrolling Navbar
var nav = document.querySelector("nav");
window.addEventListener("scroll", ()=>{
    nav.classList.toggle("scrolling", window.scrollY > 0);
});

var plus = document.querySelector(".cont");
var box = document.querySelector(".box");
var container = document.querySelector(".container");
plus.addEventListener("click", ()=>{
    box.classList.toggle("boxOpen");
    container.classList.toggle("containerOpen");
});