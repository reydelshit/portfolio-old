const mobNav = document.getElementById('ham')
const navContainer = document.getElementById('yoww')

mobNav.addEventListener('click', () => {
    navContainer.classList.toggle('show');
});


const darkMode = document.querySelector('#switch__dark')

darkMode.addEventListener('click', (y) => {
    document.body.classList.toggle('darkmode')
})
