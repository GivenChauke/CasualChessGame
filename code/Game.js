import { ChessBoard, Pawn, King, Queen, Rook, Bishop, Knight } from "./ChessPiece.js";
window.onload = init;
function init(){

var board = new ChessBoard();
var boarddisplay = board.displayboard();//get the board
var div = document.getElementById("board");//get board div
/*console.log("Board testing: ");
for (var i = 0; i < boarddisplay.length; i++) {
    for (var j = 0; j < boarddisplay[i].length; j++) {
        console.log(boarddisplay[i][j].getName()+" ");
    } console.log('/n');
}*/
for (var i = 0; i < boarddisplay.length; i++) {
    for (var j = 0; j < boarddisplay[i].length; j++) {

        var x = document.createElement("SPAN");
        x.style.width = "50px";
        x.style.height = "50px";

        //set coordinates
        // Set custom attributes
        x.setAttribute("data-row", i);
        x.setAttribute("data-col", j);
        //x.style.opacity = "0.5";
        if(boarddisplay[i][j].getName() !== "square" && boarddisplay[i][j].getPiece() !== null)
        x.innerHTML = boarddisplay[i][j].getPiece().Utf();
        else {
            
        }

        if(i % 2 == 0)//even row whites squares are even
        {
            if(j %2 == 0)
            {
                x.classList.add("whiteSquare");
            }
            else {
                x.classList.add("blackSquare");
            }
        }
        else{//odd row white squares are odd
            if(j %2 == 0)
            {
                x.classList.add("blackSquare");
            }
            else {
                x.classList.add("whiteSquare");
            }
        }
        div.appendChild(x);
    }
}


var gameOver = false;//game loop var
var buttons = document.getElementsByTagName("button");
var myButton = buttons[0];
// Add a click event listener
myButton.addEventListener("click", function() {
    gameOver = true;
    alert("Game Over");
});
/*
var turn = 1;//white's turn 0 for black turn
var winner= -1;//1 for white wins and 0 for black wins
while(!gameOver)//while not gameOver (Game loop)
{

}
function legalMove()
{

}
*/
div.addEventListener("click", function (event) {
    // Check if the clicked element is a square
    if (event.target.tagName === "SPAN") {
        // Get the coordinates of the square from custom attributes
        var rowIndex = event.target.getAttribute("data-row");
        var colIndex = event.target.getAttribute("data-col");

        // Now you have the coordinates (rowIndex, colIndex) of the clicked square
        console.log("Clicked on square at (" + rowIndex + ", " + colIndex + ")");
    }
});
}