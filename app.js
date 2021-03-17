const hamburger = document.querySelector('.open-menu')
const mainnav = document.querySelector('.main-navigation .nav-wrapper .nav-links')
console.log(mainnav);

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

