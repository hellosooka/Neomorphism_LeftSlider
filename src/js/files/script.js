// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";




const page2= document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const page4 = document.querySelector(".page4");
const page5 = document.querySelector(".page5");


const page2CloseButton= document.querySelector(".page2__close");
const page3CloseButton = document.querySelector(".page3__close");
const page4CloseButton = document.querySelector(".page4__close");
const page5CloseButton = document.querySelector(".page5__close");


page2CloseButton.addEventListener("click", () => {
    page2.classList.toggle("_activePage")
})
page3CloseButton.addEventListener("click", () => {
    page3.classList.toggle("_activePage")
})
page4CloseButton.addEventListener("click", () => {
    page4.classList.toggle("_activePage")
})
page5CloseButton.addEventListener("click", () => {
    
    page5.classList.toggle("_activePage")
})


