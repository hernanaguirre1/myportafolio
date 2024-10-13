particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#cfc5b6"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": .1,
        "random": true
      },
      "size": {
        "value": 10,
        "random": true
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "bottom",
        "straight": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        }
      }
    }
  });

  // main 

  const botones = document.querySelectorAll('.boton')
  const principal = document.querySelector('#principal')
  const contacto = document.querySelector('#contacto')
  const proyectos = document.querySelector('#proyectos')
  const proyectosBtn = document.querySelectorAll('.proyecto')
  const festival = document.querySelector('.festival')
  const navegacion = document.querySelector('.botones')

  botones[0].classList.add('active')

  botones.forEach(boton => {
    boton.addEventListener('click', ()=> {
      botones.forEach(btn => btn.classList.remove('active'));
      boton.classList.add('active')

      if(boton.classList.contains('contacto')) {
          principal.style.display = 'none'
          proyectos.style.display = 'none'
          contacto.style.animation = 'entrada .2s ease-in'
        contacto.style.display = 'flex'
      } else if(boton.classList.contains('inicio')) {
         contacto.style.display = 'none'
         proyectos.style.display = 'none'
          principal.style.display = 'flex'
          principal.style.animation = 'entrada .2s ease-in'
      } else if (boton.classList.contains('proyectos')) {
          contacto.style.display = 'none'
          principal.style.display = 'none'
          proyectos.style.display = 'flex'
          proyectos.style.animation = 'entrada .2s ease-in'
      }


    })
  })

  proyectosBtn.forEach (btn => {
    btn.addEventListener('click', ()=> {
      if (btn.classList.contains('festival-proyecto')) {
        festival.style.display = 'flex'
        festival.style.animation = 'slide-in-elliptic-bottom-fwd 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
      }
    })
  })

  window.addEventListener('scroll', ()=> {
    if (window.scrollY > 80) {
      navegacion.style.top = '0'
    }
    else {
      navegacion.style.top = '75px'
    }
  })