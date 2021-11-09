const mobNav = document.getElementById('ham')
const navContainer = document.getElementById('yoww')

mobNav.addEventListener('click', () => {
    navContainer.classList.toggle('show');
});


const darkMode = document.querySelector('#switch__dark')

darkMode.addEventListener('click', (y) => {
    document.body.classList.toggle('darkmode')
})


// const vieww = document.querySelector('.viewBTN')

// vieww.addEventListener('click', function(){
//     vieww.classList.toggle('view')

//     if(vieww.textContent === 'View'){

//         vieww.textContent = `Close`
//     } else {
//         vieww.textContent = `View`
//     }
    
// })


const pageTransition = ScrollReveal({

    origin: 'top',
    distance: '60px',
    duration : '2500',
    delay: 400,
    // reset: true
})


pageTransition.reveal('.hello', {origin: 'left', duration : '2000'})
pageTransition.reveal('.myName', {origin: 'top', delay: 1700})
pageTransition.reveal('.description', {origin: 'left', delay: 2600})
pageTransition.reveal('.icons__yow', {origin: 'right', delay: 2700})
pageTransition.reveal('.image__container', {origin: 'right', delay: 3200})

pageTransition.reveal('.projects__header', {origin: 'top', delay: 100})
pageTransition.reveal('.project__item1', {origin: 'left',  delay: 300, distance: '500px'})
pageTransition.reveal('.project__item2', {origin: 'right', delay: 300, distance: '500px'})
pageTransition.reveal('.projects__footer', {origin: 'bottom', distance: '20px'})

pageTransition.reveal('.techs__header h2', {origin: 'right', distance: '200px'})
pageTransition.reveal('.techs__header p', {origin: 'left', distance: '200px'})

pageTransition.reveal('.one', {origin: 'left', delay: 1200, distance: '500px'})
pageTransition.reveal('.two', {origin: 'top', delay: 1500})
pageTransition.reveal('.three', {origin: 'right', delay: 1900, distance: '500px'})
pageTransition.reveal('.four', {origin: 'left', delay: 2500, distance: '500px'})
pageTransition.reveal('.five', {origin: 'bottom', delay: 2000})
pageTransition.reveal('.six', {origin: 'right', delay: 2500, distance: '500px'})













