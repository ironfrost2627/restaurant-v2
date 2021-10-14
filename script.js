// navbar

const btn = document.querySelector('.menu-icon');
const menu = document.querySelector('#mobileMenu');

btn.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
})