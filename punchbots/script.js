const p1punch = document.querySelector('#p1-punch')
const p2punch = document.querySelector('#p2-punch')
const p1healthDisplay = document.querySelector('#p1-health')
const p2healthDisplay = document.querySelector('#p2-health')
const p1winDisplay = document.querySelector('#p1-win')
const p2winDisplay = document.querySelector('#p2-win')

// States
let p1health = 100
let p2health = 100
let gameOver = false

function punch(player) {
    if (gameOver) { return }
    if (player === 1) {
        p2health -= Math.floor(Math.random() * 10) + 1
        p2healthDisplay.innerText = p2health
        console.log('p2 health: ', p2health)
        if (p2health <= 0) {
            endGame(player)
        }
    } else {
        p1health -= Math.floor(Math.random() * 10) + 1
        p1healthDisplay.innerText = p1health
        console.log('p1 health: ', p1health)
        if (p1health <= 0) {
            endGame(player)
        }
    }
}

function endGame(player) {
    if (player === 1) {
        p1winDisplay.classList = ""
    } else {
        p2winDisplay.classList = ""
    }
    gameOver = true
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
