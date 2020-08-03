//1

const logo = document.querySelector("h1")

logo.addEventListener("mouseenter", event => logo.style.color = "pink");
logo.addEventListener("mouseenter", event => logo.style.fontSize = "6rem");
logo.addEventListener("mouseout", event => logo.style.color = "black");
logo.addEventListener("mouseout", event => logo.style.fontSize = "4rem")


// 2

const nav = document.querySelector("nav");

nav.addEventListener("keydownr", event => nav.style.borderBottom = "2px dotted blue");
nav.addEventListener("keyupt", event => nav.style.borderBottom = "none");


//3

const headerImg = document.querySelector(".intro img");

headerImg.addEventListener("click", event => headerImg.style.border = "10px dotted yellow");
headerImg.addEventListener("dblclick", event => headerImg.style.border = "none");


//4

window.addEventListener("load", event => {
    alert("You loaded the page!")}
    );


//5

window.addEventListener("scroll", event => {
    // alert("You're scrolling the page!");
});


//6

const buttonBot = document.getElementsByClassName("div .btn")

buttonBot.addEventListener("select", event => {
    console.log("You've clicked a button!");
});










$('.nav').click(function (event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100},2000);
  });
