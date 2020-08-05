// Header Events

//1

const logo = document.querySelector("h1")

logo.addEventListener("mouseenter", event => logo.style.color = "pink");
logo.addEventListener("mouseenter", event => logo.style.fontSize = "6rem");

// 2 
logo.addEventListener("mouseout", event => logo.style.color = "black");
logo.addEventListener("mouseout", event => logo.style.fontSize = "4rem")

// 3

let funBus = document.querySelector('h1')

funBus.addEventListener('mousedown', e => {
    funBus.textContent = 'What a fun bus!'
});


// Header 2 Events

// 4

let h2 = document.querySelector('h2')

h2.addEventListener('mousemove', e => {
  h2.style.textShadow = '2px 2px 8px #000000'
  
})


// Nav Events

// 5

const nav = document.querySelector("nav");

nav.addEventListener("click", event => {
  nav.style.borderBottom = "2px dotted blue"
  preventDefault()
}
  );

  // Image Events

// 6

const headerImg = document.querySelector(".intro img");

headerImg.addEventListener("click", event => headerImg.style.border = "10px dotted yellow");
headerImg.addEventListener("dblclick", event => headerImg.style.border = "none");

// 7

let allImg = document.querySelector("img")

allImg.addEventListener("drag", e => {
    allImg.src = "https://images.unsplash.com/photo-1577459640575-219cbf231b8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1254&q=80"
})

// Footer Events


// 8 

let text = document.querySelector('.footer p');
window.addEventListener("scroll", e => {
  text.style.backgroundColor = "green";
});


// Window Events

// 9

window.addEventListener("load", event => {
    alert("You loaded the page!")}
    );


// 10

window.addEventListener("resize", e => {
    alert("Is it getting smaller in here?");

  });






  










