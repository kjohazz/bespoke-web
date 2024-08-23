const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu ul');
const logo = document.querySelector('.logo img');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        logo.style.fontSize = '1em';
    } else {
        logo.style.fontSize = '2em';
    }
});