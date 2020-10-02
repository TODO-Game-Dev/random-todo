import './component/base.js'

let aguja = document.querySelector('span')
let relog = document.querySelector('section')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let p = document.querySelector('p')

let boolean = true
let n = 0
h2.addEventListener('mousedown', () => {
    boolean = !boolean
    if (boolean) {
        h1.style.backgroundColor = 'blue'
        h1.innerHTML = '...'
        move()
    } 

})

let move = () => {
    n = new Date().getMilliseconds()
    n = Math.round(360 * n / 1000)
    p.innerText = Math.abs(45 - n)
    aguja.style.transform = `rotate(${n}deg)`;
    if (boolean) {
        requestAnimationFrame(move)
    }else {
        if (+p.innerText < 10) {
            h1.style.backgroundColor = 'Green'
            h1.innerText = 'Ganaste'
        } else {
            h1.style.backgroundColor = 'red'
            h1.innerText = 'Perdiste'
        }
    }
}
move()