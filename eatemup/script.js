const boardDisplay = document.getElementById('board-display')

let board = ''
let blue = { y: 4, x: 1 }
let red = { y: 4, x: 7 }
const boardSize = 9

// IMPLEMENT: 
// board reset
// function to update positions (detect map edges)
// function to spawn/despawn food, variables to track positions
// game end detection

function buildBoard() {
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (i === blue.y && j === blue.x) {
                board += buildDiv('blue')
            } else if (i === red.y && j === red.x) {
                board += buildDiv('red')
            } else {
                board += buildDiv('tile')
            }
        }
    }
}

function buildDiv(tile) {
    return `<div class="${tile}"></div>`
}

function render() {
    buildBoard()
    boardDisplay.innerHTML = board
    board = ''
}

// TESTING
render()
