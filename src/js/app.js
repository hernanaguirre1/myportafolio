const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove',(e)=>{
    let x = e.clientX - 17;
    let y = e.clientY - 17;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    cursor.style.display = 'block';
})
document.addEventListener('mouseout',()=>{
    cursor.style.display = "none"
})


//  PROYECTOS JS 

const main = document.querySelector('.main-proyectos')
const botones = document.querySelectorAll('.proyecto')
const contenedor = document.querySelector('.contenedor')

botones.forEach ((boton)=> {
    boton.addEventListener('click', ()=> {
       const div = document.createElement('DIV')
        div.classList.add('conteiner')
        const h2 = document.createElement('H2')
        const img = document.createElement('IMG')
        const text = document.createElement('P')
        const vovler = document.createElement('BUTTON')
       const a = document.createElement('A')
       a.classList.add('ver-pagina')
        vovler.classList.add('volver')
        main.appendChild(div)
        const conteiner = document.querySelector('.conteiner')
        main.appendChild(vovler)
        a.textContent = 'ver página'
        a.target = '_blank'
        vovler.textContent = 'volver'
        vovler.addEventListener('click', ()=> {
            contenedor.style.display = 'flex'
            main.removeChild(div)
            main.removeChild(vovler)
        })
        if(boton.classList.contains('festival')) {
            contenedor.style.display = 'none'
            text.textContent = 'Un proyecto realizado con SASS para un festival de musica ficticio, el diseño totalmente responsivo permite que los usuarios puedan navegar desde cualquier dispositivo'
            img.src = 'src/img/proyecto-festival.png'
            img.alt = 'proyecto'
            h2.textContent = 'Festival de musica 2024'
            a.href = 'https://festivaldemontevideomusic.netlify.app'
            conteiner.appendChild(h2)
            conteiner.appendChild(img)
            conteiner.appendChild(text)
            conteiner.appendChild(a)
        }
    })
})