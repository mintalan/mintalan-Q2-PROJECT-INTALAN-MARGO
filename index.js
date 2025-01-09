const navbarToggler = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('#navbarNav');

navbarToggler.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});