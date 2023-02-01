/*let totalSlides = window.document.querySelectorAll(".product-section").length;
let bd = window.document.getElementsByTagName("body")[0];

if (bd.clientWidth == `966px`) {
    window.document.querySelector(".product").style.width = `calc(80vw * ${totalSlides})`;
}
*/

let mnain = window.document.getElementById("hamburguer");
let currentSlide = window.document.querySelector(".product");
let sliders = window.document.querySelector(".product").length;
let ct1 = window.document.querySelector(".active1");
let ct2 = window.document.querySelector(".active2");
let ct3 = window.document.querySelector(".active3");
let ct4 = window.document.querySelector(".active4");
let ct5 = window.document.querySelector(".active5");
let ct6 = window.document.querySelector(".active6");

mnain.addEventListener("click", () => {
    let mnmobile = window.document.getElementById("list-main");
    mnain.classList.toggle("view");
    mnmobile.classList.toggle("view");
});



function marginZero() {
    currentSlide.style.marginLeft = "0px";
    ct1.style.background = "blue";
    ct2.style.background = "transparent";
    ct3.style.background = "transparent";
    ct4.style.background = "transparent";
    ct5.style.background = "transparent";
    ct6.style.background = "transparent";
}

function marginOne() {
    let newMargen = (1 * document.body.clientWidth);
    currentSlide.style.marginLeft = `-${newMargen}px`;
    ct1.style.background = "transparent";
    ct2.style.background = "blue";
    ct3.style.background = "transparent";
    ct4.style.background = "transparent";
    ct5.style.background = "transparent";
    ct6.style.background = "transparent";
}

function marginThree() {
    let newMargen = (2 * document.body.clientWidth);
    currentSlide.style.marginLeft = `-${newMargen}px`;
    ct1.style.background = "transparent";
    ct2.style.background = "transparent";
    ct3.style.background = "blue";
    ct4.style.background = "transparent";
    ct5.style.background = "transparent";
    ct6.style.background = "transparent";
}

function marginFour() {
    let newMargen = (3 * document.body.clientWidth);
    currentSlide.style.marginLeft = `-${newMargen}px`;
    ct1.style.background = "transparent";
    ct2.style.background = "transparent";
    ct3.style.background = "transparent";
    ct4.style.background = "blue";
    ct5.style.background = "transparent";
    ct6.style.background = "transparent";
}

function marginFive() {
    let newMargen = (4.02 * document.body.clientWidth);
    currentSlide.style.marginLeft = `-${newMargen}px`;
    ct1.style.background = "transparent";
    ct2.style.background = "transparent";
    ct3.style.background = "transparent";
    ct4.style.background = "transparent";
    ct5.style.background = "blue";
    ct6.style.background = "transparent";
}

function marginSix() {
    let newMargen = (5.02 * document.body.clientWidth);
    currentSlide.style.marginLeft = `-${newMargen}px`;
    ct1.style.background = "transparent";
    ct2.style.background = "transparent";
    ct3.style.background = "transparent";
    ct4.style.background = "transparent";
    ct5.style.background = "transparent";
    ct6.style.background = "blue";
}