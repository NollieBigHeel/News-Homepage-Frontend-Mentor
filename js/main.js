const body = document.querySelector('body')
const menuIcon = document.querySelector('.toggle-button');
const navBar = document.querySelector('.phone-navbar')
const overlay = document.querySelector('.overlay')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("change");
    navBar.classList.toggle("change-menu");
    body.classList.toggle("hide-overflow")
    overlay.classList.toggle("overlay-toggle")

})
