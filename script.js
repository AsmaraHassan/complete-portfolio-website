var hamurger = document.querySelector(".hamburger");

var mobileMenu = document.querySelector(".nav-list ul");

var menuItem = document.querySelectorAll(".nav-list ul li a");

var header = document.querySelector(".header");

hamurger.addEventListener('click', () =>{
    hamurger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        hamurger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
});

document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = "transparent"
    }
});