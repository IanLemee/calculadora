
const btnMode = document.querySelector('.mode')

btnMode.addEventListener('click', () => {
    const calculadora = document.querySelector('.calculadora')
    const body = document.querySelector('body')
    const btnNumeros = document.querySelectorAll('.numero')
    const delet = document.querySelectorAll('.delete')
    const operadores = document.querySelectorAll('.operadores')

    btnMode.classList.toggle('active')
    body.classList.toggle('active')
    calculadora.classList.toggle('active')
    btnNumeros.forEach((numero) => {
        numero.classList.toggle('active')
    })
    delet.forEach((delet) => {
        delet.classList.toggle('active')
    })
    operadores.forEach((operador) => {
        operador.classList.toggle('active')
    })
})