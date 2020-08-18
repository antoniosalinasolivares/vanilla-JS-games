const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0

const randomSquare = () => {
    square.forEach(className => {
        className.classList.add('mole')
    })
}

document.addEventListener('DOMContentLoaded', randomSquare)