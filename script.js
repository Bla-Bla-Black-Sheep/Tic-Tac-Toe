/*
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let result=document.querySelector("#result");
let turn0 =true;

boxes.forEach(box =>{
    box.addEventListener("click",() => {
        if(turn0){
            box.innerHTML="o";
            turn0=false;
        }
        else{
            box.innerHTML="x";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    }
);
});

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const checkWinner=()=>{
    for(let pattern of winPatterns){
        if(boxes[pattern[0]]==="x" && boxes[pattern[1]]==="x" && boxes[pattern[2]]==="x" ){
            result.innerHTML="Player2 is the Winner !";
        }
        else if(boxes[pattern[0]]==="x" && boxes[pattern[3]]==="x" && boxes[pattern[6]]==="x" ){
            result.innerHTML="Player2 is the Winner !";
        }
        else if(boxes[pattern[0]]==="x" && boxes[pattern[4]]==="x" && boxes[pattern[8]]==="x" ){
            result.innerHTML="Player2 is the Winner !";
        }
        else if(boxes[pattern[1]]==="x" && boxes[pattern[4]]==="x" && boxes[pattern[7]]==="x" ){
            result.innerHTML="Player2 is the Winner !";
        }
        else if(boxes[pattern[2]]==="x" && boxes[pattern[5]]==="x" && boxes[pattern[8]]==="x" ){
            result.innerHTML="Player2 is the Winner !";
        }
        else if(boxes[pattern[2]]==="x" && boxes[pattern[4]]==="x" && boxes[pattern[6]]==="x" ){
            result.innerHTML="Player2 is the Winner !";
        }
        else if(boxes[pattern[3]]==="x" && boxes[pattern[4]]==="x" && boxes[pattern[5]]==="x" ){
            result.innerHTML="Player2 is the Winner !";
        }
        else if(boxes[pattern[6]]==="x" && boxes[pattern[7]]==="x" && boxes[pattern[8]]==="x" ){
            result.innerHTML="Player2 is the Winner !";
        }
    }
};

*/
// Tic Tac Toe Game

const boxes = document.querySelectorAll(".box");
const resetButton = document.querySelector("#reset");
const result = document.querySelector("#result");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

// Winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Handle click event on each box
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (board[index] === "" && gameActive) {
            board[index] = currentPlayer;
            box.textContent = currentPlayer;
            checkWinner();
            switchPlayer();
        }
    });
});

// Switch player
function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Check for winner or draw
function checkWinner() {
    let winnerFound = false;

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winnerFound = true;
            gameActive = false;
            result.textContent = `${board[a]} Wins!`;
            highlightWinner(combination);
            break;
        }
    }

    if (!winnerFound && !board.includes("")) {
        gameActive = false;
        result.textContent = "It's a Draw!";
    }
}

// Highlight winning combination
function highlightWinner(combination) {
    combination.forEach(index => {
        boxes[index].style.backgroundColor = "rgb(3, 140, 25)";
    });
}

// Reset the game
resetButton.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    boxes.forEach(box => {
        box.textContent = "";
        box.style.backgroundColor = "";
    });
    currentPlayer = "X";
    gameActive = true;
    result.textContent = "";
});
