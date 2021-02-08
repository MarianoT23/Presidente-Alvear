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
  
    // Documentos Históricos (Filter)
    const filterTodos = document.getElementById('js-documento-filter--todos')
    const filterCartas = document.getElementById('js-documento-filter--cartas')
    const filterPrensa = document.getElementById('js-documento-filter--prensa')
    const documentosHistoricosTodos = document.querySelectorAll('.documentos-historicos__documento-container')
    const documentosHistoricosCartas = document.querySelectorAll('.js-carta')
    const documentosHistoricosPrensa = document.querySelectorAll('.js-prensa')
    const documentosHistoricosContainer = document.getElementById('js-documentos-historicos')

    if (documentosHistoricosContainer) {
        filterTodos.classList.add('active')
        documentosHistoricosTodos.forEach(element => {
            element.classList.add('active')
        });
    
        filterTodos.addEventListener('click', () => {
            filterTodos.classList.add('active')
            filterCartas.classList.remove('active')
            filterPrensa.classList.remove('active')
            documentosHistoricosCartas.forEach(element => {
                element.classList.add('active')
            });
            documentosHistoricosPrensa.forEach(element => {
                element.classList.add('active')
            })
        })
    
        filterCartas.addEventListener('click', () => {
            filterTodos.classList.remove('active')
            filterCartas.classList.add('active')
            filterPrensa.classList.remove('active')
            documentosHistoricosCartas.forEach(element => {
                element.classList.add('active')
            });
            documentosHistoricosPrensa.forEach(element => {
                element.classList.remove('active')
            })
        })
    
        filterPrensa.addEventListener('click', () => {
            filterTodos.classList.remove('active')
            filterCartas.classList.remove('active')
            filterPrensa.classList.add('active')
            documentosHistoricosPrensa.forEach(element => {
                element.classList.add('active')
            });
            documentosHistoricosCartas.forEach(element => {
                element.classList.remove('active')
            })
        })
    }


    console.timeEnd("JS is loading fine");

})
