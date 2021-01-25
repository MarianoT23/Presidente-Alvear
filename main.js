console.time('JS is loading fine')

window.addEventListener('load', function(){

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

    // Slider (Diez Razones)
    if (window.innerWidth < 992) {
        new Glider(document.querySelector('#js-diez-razones-slider'), {
            slidesToShow: 1,
            slidesToScroll: 1,
            scrollLock: true,
            scrollLockDelay: 0,
            draggable: true,
            duration: 0,
            dots: '#js-dots'
        });
    }

    // FAQ
    const faqQuestions = document.querySelectorAll('.js-faq-question')

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active')
        })
    });

    console.timeEnd("JS is loading fine");

})
