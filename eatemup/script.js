
// IMPLEMENT:
// function to update positions (detect map edges)
// function to spawn/despawn food, variables to track positions
// game end detection

const boardDisplay = document.getElementById('board-display')
const resetButton = document.getElementById('reset-button')
const blueScoreDisplay = document.getElementById('blue-score')
const redScoreDisplay = document.getElementById('red-score')

//CLASS IMPLEMENTATION
class Player {
    name;
    x;
    y;
    score;
    constructor(name, x, y) {
        this.name = name
        this.defaultX = x
        this.defaultY = y
        this.x = x
        this.y = y
        this.score = 0
    }

    div() {
        return `<div class="${this.name}"></div>`
    }

    resetPos() {
        this.x = this.defaultX
        this.y = this.defaultY
    }

    resetScore() {
        this.score = 0
    }
}

let blue = new Player('blue', 4, 1)
let red = new Player('red', 4, 7)

const boardSize = 9

let board = ''

function buildBoard() {
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (i === blue.x && j === blue.y) {
                board += blue.div()
            } else if (i === red.x && j === red.y) {
                board += red.div()
            } else {
                board += `<div class="tile"></div>`
            }
        }
    }
}

function reset() {
    resetBoard()
    resetScore()
    render()
}

function resetBoard() {
    blue.resetPos()
    red.resetPos()
}

function resetScore() {
    blue.resetScore()
    red.resetScore()
}

function render() {
    // update board
    buildBoard()
    boardDisplay.innerHTML = board
    board = ''
    // update scores
    blueScoreDisplay.innerText = blue.score
    redScoreDisplay.innerText = red.score
}

// // function updatePosition(entity, axis, adjustment) {
// //     if (entity === 'blue') {
        
// //     }
// // }

resetButton.addEventListener('click', () => {
    reset()
})

// TESTING
render()
