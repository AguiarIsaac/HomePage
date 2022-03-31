const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')

// para cada elemento dentro da const, remover ou add a class show
// formas de criar uma funcion: const nameFunction = function() {}; function() {} e arrow function: () => {}

for (const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    } )
}

// ao clicar em algum dos links, remover a class show

for ( const element of links) {
    element.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

// Muda o header da página quando der scroll

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
	if(window.scrollY >= navHeight) {
		header.classList.add('scroll')
	} else {
		header.classList.remove('scroll')
	}
})
