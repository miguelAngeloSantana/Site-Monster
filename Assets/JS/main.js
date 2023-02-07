let mnain = window.document.getElementById("hamburguer");
let currentSlide = window.document.querySelector(".product");
let ct1 = window.document.querySelector(".active1");
let ct2 = window.document.querySelector(".active2");
let ct3 = window.document.querySelector(".active3");
let ct4 = window.document.querySelector(".active4");
let ct5 = window.document.querySelector(".active5");
let ct6 = window.document.querySelector(".active6");
const form = window.document.getElementById("form-monster");
const formRequired = window.document.querySelectorAll(".form-required");
const spanSelector = window.document.querySelectorAll(".span-form");
const check = window.document.querySelectorAll(".input-box");
const buttomForm = window.document.getElementById("subscrive");
const rg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


mnain.addEventListener("click", () => {
    let mnmobile = window.document.getElementById("list-main");
    mnain.classList.toggle("view");
    mnmobile.classList.toggle("view");
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validarNome();
    validarEmail();
    validarIdade();
    validarCheck();
})

function setErro(index) {
    formRequired[index].style.border = "2px solid #F00";
    spanSelector[index].style.display = "block";
}

function checkError(index) {
    spanSelector[index].style.display = "block";
}
function checkValido(index) {
    spanSelector[index].style.display = "none";
}

function retirarError(index) {
    formRequired[index].style.border = "";
    spanSelector[index].style.display = "none"
}

function validarNome() {
    if(formRequired[0].value.length < 3) {
        setErro(0);
    } else {
        retirarError(0);
    }
}

function validarEmail() {
    if(!rg.test(formRequired[1].value)) {
        setErro(1);
    } else {
        retirarError(1);
    }
}

function validarIdade() {
    if (formRequired[2].value < 16) {
        setErro(2);
    } else {
        retirarError(2);
    }
}
function validarCheck() {
    let sel = 0;
    check.forEach(function(cl) {
        if(cl.checked) {
            sel++;
        }
    })

    if (sel === 0) {
        checkError(3);
    } else {
        checkValido(3);
    }
}

function marginZero() {
    currentSlide.style.marginLeft = "0";
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
    let newMargen = (4 * document.body.clientWidth);
    currentSlide.style.marginLeft = `-${newMargen}px`;
    ct1.style.background = "transparent";
    ct2.style.background = "transparent";
    ct3.style.background = "transparent";
    ct4.style.background = "transparent";
    ct5.style.background = "blue";
    ct6.style.background = "transparent";
}

function marginSix() {
    let newMargen = (5 * document.body.clientWidth);
    currentSlide.style.marginLeft = `-${newMargen}px`;
    ct1.style.background = "transparent";
    ct2.style.background = "transparent";
    ct3.style.background = "transparent";
    ct4.style.background = "transparent";
    ct5.style.background = "transparent";
    ct6.style.background = "blue";
}