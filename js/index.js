//1

const logo = document.querySelector("h1")

logo.addEventListener("mouseenter", event => logo.style.color = "pink");
logo.addEventListener("mouseenter", event => logo.style.fontSize = "6rem");
logo.addEventListener("mouseout", event => logo.style.color = "black");
logo.addEventListener("mouseout", event => logo.style.fontSize = "4rem")


// 2

const nav = document.querySelector("nav");

nav.addEventListener("mouseenter", event => nav.style.borderBottom = "2px dotted blue");
nav.addEventListener("mouseout", event => nav.style.borderBottom = "none");
