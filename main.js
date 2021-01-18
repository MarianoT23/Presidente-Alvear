console.time('JS is loading fine')

// Navbar Active
document.addEventListener('scroll', function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.js-nav').classList.add('active')
    } else {
        document.querySelector('.js-nav').classList.remove('active')
    }
})

// Hamburger Menu
const hamburgerMenuContainer = document.getElementById
('js-hamburger-menu-container')
const hamburgerMenuLines = document.getElementById('js-hamburger-menu-lines')
const navbarMenuContainer = document.getElementById('js-navbar-menu-container')
const menuListItems = document.querySelectorAll('#js-navbar-menu-container li')

hamburgerMenuContainer.addEventListener('click', () => {
    if (hamburgerMenuLines.classList.contains('open')) {
        hamburgerMenuLines.classList.remove('open')
        navbarMenuContainer.classList.remove('active')
    } else {
        hamburgerMenuLines.classList.add('open')
        navbarMenuContainer.classList.add('active')
    }
})
menuListItems.forEach(listItem => {
    listItem.addEventListener('click', () => {
        hamburgerMenuLines.classList.remove('open')
        navbarMenuContainer.classList.remove('active')
    })
});

console.timeEnd("JS is loading fine");