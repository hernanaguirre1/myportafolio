const header = document.querySelector('header')
const explorar = document.querySelector('.explorar')
const principal= document.querySelector('.principal')
const inicio = document.querySelector('.inicio')
const botones = document.querySelectorAll('.boton')

botones[0].classList.add('select')
  
  explorar.addEventListener('click' , ()=> {
    header.classList.add('active')
    principal.style.animation = 'salida .3s ease-in'
    setTimeout ( ()=> {
        principal.style.display = 'none'
    }, 300)
  })
  
  botones.forEach( boton => {
        boton.addEventListener('click' , ()=> {
            if (boton.classList.contains('inicio')) {
                
            }
        })
  })
  
  
  
  
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
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.1,
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