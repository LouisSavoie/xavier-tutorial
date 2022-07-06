const p1punch = document.querySelector('#p1-punch')
const p2punch = document.querySelector('#p2-punch')

// States
let p1health = 10
let p2health = 10

function punch(player) {
    if (player === 1) {
        p2health--
        console.log('p2 health: ', p2health)
    } else {
        p1health--
        console.log('p1 health: ', p1health)
    }
}

p1punch.addEventListener('pointerdown', () => {
    punch(1)
})

p2punch.addEventListener('pointerdown', () => {
    punch(2)
})

document.addEventListener('keypress', (e) => {
    if (e.code == 'KeyS') {
        punch(1)
    } else if (e.code == 'KeyK') {
        punch(2)
    } else {
        console.log('unknown key')
    }
})

// old event listeners up to step 9
// p1punch.addEventListener('pointerdown', () => {
//     p2health--
//     console.log('p2 health: ', p2health)
// })

// p2punch.addEventListener('pointerdown', () => {
//     p1health--
//     console.log('p1 health: ', p1health)
// })

// document.addEventListener('keypress', (e) => {
//     if (e.code == 'KeyS') {
//         p2health--
//         console.log('p2 health: ', p2health)
//     } else if (e.code == 'KeyK') {
//         p1health--
//         console.log('p1 health: ', p1health)
//     } else {
//         console.log('unknown key')
//     }
// })
