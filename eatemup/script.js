const boardDisplay = document.getElementById('board-display')

let boardStr = ''
// const boardArr = []
let boardArr = [
    ['tile','tile','tile','tile','tile','tile','tile','tile','tile'],
    ['tile','tile','tile','tile','tile','tile','tile','tile','tile'],
    ['tile','tile','food','tile','tile','food','tile','tile','tile'],
    ['tile','tile','tile','tile','tile','tile','tile','tile','tile'],
    ['tile','blue','tile','tile','tile','tile','tile','red','tile'],
    ['tile','tile','tile','tile','tile','tile','tile','tile','tile'],
    ['tile','tile','tile','tile','food','tile','tile','tile','tile'],
    ['tile','tile','tile','tile','tile','tile','tile','tile','tile'],
    ['tile','tile','tile','tile','tile','tile','tile','tile','tile']
]
const boardSize = 10

// function newBoard() {
//     for (let i = 0; i < boardSize; i++) {
//         for (let j = 0; j < boardSize; j++) {

//         }
//     }
// }

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

render()
