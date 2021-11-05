const mobNav = document.getElementById('ham')
const navContainer = document.getElementById('yoww')

mobNav.addEventListener('click', () => {
    navContainer.classList.toggle('show');
});