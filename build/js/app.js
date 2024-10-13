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

  botones[0].classList.add('active')

  botones.forEach(boton => {
    boton.addEventListener('click', ()=> {
      botones.forEach(btn => btn.classList.remove('active'));
      boton.classList.add('active')

      if(boton.classList.contains('contacto')) {
          principal.style.display = 'none'
          contacto.style.animation = 'entrada .2s ease-in'
        contacto.style.display = 'flex'
      }
    })
  })