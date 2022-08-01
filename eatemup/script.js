const boardDisplay = document.getElementById('board-display')

let boardStr = ''
let newBoardArr = [
    ['tile','tile','tile','tile','tile','tile','tile','tile','tile'],
    ['tile','tile','tile','tile','tile','tile','tile','tile','tile'],
    ['tile','tile','tile','tile','tile','tile','tile','tile','tile'],
    ['tile','tile','tile','tile','tile','tile','tile','tile','tile'],
    ['tile','blue','tile','tile','tile','tile','tile','red','tile'],
    ['tile','tile','tile','tile','tile','tile','tile','tile','tile'],
    ['tile','tile','tile','tile','tile','tile','tile','tile','tile'],
    ['tile','tile','tile','tile','tile','tile','tile','tile','tile'],
    ['tile','tile','tile','tile','tile','tile','tile','tile','tile']
]
let boardArr = []
const boardSize = 10

// IMPLEMENT: 
// function to update positions (detect map edges)
// function to spawn/despawn food, variables to track positions
// game end detection

function resetBoard() {
    boardArr = newBoardArr
}

function buildBoardStr() {
    boardArr.forEach(i => {
        i.forEach(j => {
            boardStr += `<div class="${j}"></div>`
        })
    });
}

function render() {
    buildBoardStr()
    boardDisplay.innerHTML = boardStr
    boardStr = ''
}

// TESTING
resetBoard()
render()
