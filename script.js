const p1punch = document.querySelector('#p1-punch')

// States
let p1health = 10
let p2health = 10

p1punch.addEventListener('pointerdown', () => {
    p2health--
    console.log('p2 health: ', p2health)
})