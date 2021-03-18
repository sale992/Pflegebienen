const hamburger = document.querySelector('.open-menu')
const mainnav = document.querySelector('.main-navigation .nav-wrapper .nav-links')
const links = document.querySelectorAll('.nav-wrapper li a')


hamburger.addEventListener('click', e => {
    e.preventDefault()
    if (hamburger.classList.contains('open')) {
        hamburger.classList.remove('open')
        mainnav.classList.remove('open')
    } else {
        hamburger.classList.add('open')
        mainnav.classList.add('open')
    }
})


links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        if (link.classList.contains('active')) {
            link.classList.remove('active')
        } else {
            link.classList.add('active')
        }
    })
})


