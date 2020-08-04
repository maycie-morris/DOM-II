//1

const logo = document.querySelector("h1")

logo.addEventListener("mouseenter", event => logo.style.color = "pink");
logo.addEventListener("mouseenter", event => logo.style.fontSize = "6rem");
logo.addEventListener("mouseout", event => logo.style.color = "black");
logo.addEventListener("mouseout", event => logo.style.fontSize = "4rem")


// 2

const nav = document.querySelector("nav");

nav.addEventListener("click", event => nav.style.borderBottom = "2px dotted blue");
// nav.addEventListener("keyup", event => nav.style.borderBottom = "none");


// 3

const headerImg = document.querySelector(".intro img");

headerImg.addEventListener("click", event => headerImg.style.border = "10px dotted yellow");
headerImg.addEventListener("dblclick", event => headerImg.style.border = "none");


// 4

window.addEventListener("load", event => {
    alert("You loaded the page!")}
    );


// 5

window.addEventListener("scroll", event => {
    // alert("You're scrolling the page!");
});


// 6

const funBus = h1.addEventListener('mousedown', e => {
    h1.textContent = 'What a fun bus!'
});









