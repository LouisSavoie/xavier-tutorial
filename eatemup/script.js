
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
    constructor(name, x, y, boardSize) {
        this.name = name
        this.defaultX = x
        this.defaultY = y
        this.x = x
        this.y = y
        this.boardSize = boardSize
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

    moveUp() {
        if (this.y - 1 >= 0) { this.y-- }
    }

    moveLeft() {
        if (this.x - 1 >= 0) { this.x-- }
    }

    moveDown() {
        if (this.y + 1 <= this.boardSize - 1) { this.y++ }
    }

    moveRight() {
        if (this.x + 1 <= this.boardSize - 1) { this.x++ }
    }
}

// GAME VARS
const boardSize = 9

// GLOBAL VARS
let board = ''

// GAME FUNCTIONS
function buildBoard() {
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (i === blue.y && j === blue.x) {
                board += blue.div()
            } else if (i === red.y && j === red.x) {
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


// EVENT LISTENERS
resetButton.addEventListener('click', () => {
    reset()
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'w') { blue.moveUp() }
    if (event.key === 'a') { blue.moveLeft() }
    if (event.key === 's') { blue.moveDown() }
    if (event.key === 'd') { blue.moveRight() }
    if (event.key === 'i') { red.moveUp() }
    if (event.key === 'j') { red.moveLeft() }
    if (event.key === 'k') { red.moveDown() }
    if (event.key === 'l') { red.moveRight() }
    render()
})

// RUN GAME
let blue = new Player('blue', 1, 4, boardSize)
let red = new Player('red', 7, 4, boardSize)
render()
