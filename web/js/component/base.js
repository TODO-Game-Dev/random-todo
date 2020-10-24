
let base = document.createElement('base')
base.setAttribute('href', (location.host=='todo-game-dev.github.io')?'https://todo-game-dev.github.io/random-todo/':location.host)
document.head.appendChild(base)