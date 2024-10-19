document.addEventListener('DOMContentLoaded', function(){
    resaltarEnlace()
    scrollNav()
    contacto()
   
})

function resaltarEnlace() {
    document.addEventListener('scroll', ()=> {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.nav a')
        let actual = ''
        sections.forEach( section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(window.scrollY >= (sectionTop - sectionHeight / 4)) {
                actual = section.id
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual ){
                link.classList.add('active')
            }
        })
    })
}


function scrollNav() {
    const navLinks = document.querySelectorAll('.nav a')

    navLinks.forEach(link => {
        link.addEventListener('click' , e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)
            section.scrollIntoView({behavior : 'smooth'})
        })
    })
}

function contacto() {
    const boton = document.querySelector('.promocion__boton')

    boton.addEventListener('click', e => {
        e.preventDefault()
        const sectionScroll = e.target.getAttribute('href')
        const section = document.querySelector(sectionScroll)
        section.scrollIntoView({behavior : 'smooth'})
    })
}

function header() {
    const header = document.querySelector('.header')

    window.addEventListener('scroll', ()=> {
        if (window.scrollY > 300) {
            header.classList.add('relative')
        } else {
            header.classList.remove('relative')
        }
    })
}