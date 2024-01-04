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
displayBoard();
function displayBoard(){
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
                x.setAttribute("colorSquare","white");
            }
            else {
                x.classList.add("blackSquare");
                x.setAttribute("colorSquare","black");
            }
        }
        else{//odd row white squares are odd
            if(j %2 == 0)
            {
                x.classList.add("blackSquare");
                x.setAttribute("colorSquare","black");
            }
            else {
                x.setAttribute("colorSquare","white");
                x.classList.add("whiteSquare");
            }
        }
        div.appendChild(x);
    }
}
}

var turn = 1;//white's turn 0 for black turn
var winner= -1;//1 for white wins and 0 for black wins
var gameOver = false;//game loop var
var buttons = document.getElementsByTagName("button");
var myButton = buttons[0];
// Add a click event listener
myButton.addEventListener("click", function() {
    gameOver = true;
    alert("Game Over");
});

var selectingPiece = true; // Indicates whether the user is selecting a piece or a destination
var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var rowIndex = 0;
var colIndex = 0;
var colorSquaredep = "";
var colorSquaredes = "";
var color = "";
div.addEventListener("click", function (event) {
    // Check if the clicked element is a square
    if (event.target.tagName === "SPAN") {
        // Get the coordinates of the square from custom attributes
        rowIndex = event.target.getAttribute("data-row");
        colIndex = event.target.getAttribute("data-col");
        color = event.target.getAttribute("colorSquare");
        // Now you have the coordinates (rowIndex, colIndex) of the clicked square
        //console.log("Clicked on square at (" + rowIndex + ", " + colIndex + ")");

        if (boarddisplay[rowIndex][colIndex].getName() === "square" && selectingPiece) {
            alert("Please select a piece you want to move");
        } else if (boarddisplay[rowIndex][colIndex].getName() !== "square" && selectingPiece) {
            //alert("Please select the destination square: ");
            selectingPiece = false;
            x1 = rowIndex;
            y1 = colIndex;
            colorSquaredep = color;
        } else if (!selectingPiece) {
            // Now, you're in the "selecting destination" mode
            //alert("Clicked on destination square at (" + rowIndex + ", " + colIndex + ")");
            x2 = rowIndex;
            y2 = colIndex;
            selectingPiece = true; // Reset the mode
            colorSquaredes = color;
            legalMove(x1,y1,x2,y2);
        }
    }
});

function legalMove(x1, y1, x2, y2) {
    // Check the turn and pass to board piece move
    console.log("Departure square: (" + x1 + ", " + y1 + ") Destination Square: "+"(" + x2 + ", " + y2 + ")");
    //console.log("Departure square color:"+colorSquaredep+" Destination square color: "+colorSquaredes);
    if (turn === 1 && boarddisplay[x1][y1].getPiece().getColor()!=="white") {
        alert("ERROR: It's white's turn to play");
    }else if(turn === 1 && boarddisplay[x1][y1].getPiece().getColor()==="white"){
// Inside the block where you check for pawn promotion
if (boarddisplay[x1][y1].getPiece().getName() === "Pawn") {
    if (board.movePawn(x1, y1, x2, y2)) {
        turn = 0;
        if (Number(x2) === Number(0)) { // White pawn promoted
            // Create a div for pawn promotion options
            var promotionDiv = document.createElement("div");
            promotionDiv.id = "promotionDiv";
            promotionDiv.innerHTML = "Choose your promotion:";

            // Define chess piece options
            var pieceOptions = ['\u2655', '\u2656', '\u2657', '\u2658'];

            // Populate the div with clickable spans
            pieceOptions.forEach(piece => {
                var pieceSpan = document.createElement("span");
                pieceSpan.innerHTML = piece; // Replace this with your function to get UTF representation
                pieceSpan.addEventListener("click", function () {
                    // Replace the pawn with the chosen piece
                    document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = piece;
                    // Remove the promotion div
                    document.body.removeChild(promotionDiv);
                });
                promotionDiv.appendChild(pieceSpan);
            });

            // Append the promotion div to the body
            document.body.appendChild(promotionDiv);
        }
    }
}
    else if(boarddisplay[x1][y1].getPiece().getName() === "Bishop")
    {
        if (board.moveBishop(x1, y1, x2, y2)) {
            turn = 0;
        }
    }
    else if(boarddisplay[x1][y1].getPiece().getName() === "Knight")
    {
        if (board.moveKnight(x1, y1, x2, y2)) {
            turn = 0;
        }
    }
    else if(boarddisplay[x1][y1].getPiece().getName() === "Rook")
    {
        if (board.moveRook(x1, y1, x2, y2)) {
            turn = 0;
        }
    }     
    } else if (turn === 0 && boarddisplay[x1][y1].getPiece().getColor()!=="black") {
        alert("ERROR: It's blacks's turn to play");
    }else if(turn === 0 && boarddisplay[x1][y1].getPiece().getColor()==="black"){
        if(boarddisplay[x1][y1].getPiece().getName() === "Pawn")
        {
            if(board.movePawn(x1,y1,x2,y2))
            {
                turn = 1;
                if (Number(x2) === Number(7)) { // White pawn promoted
                    // Create a div for pawn promotion options
                    var promotionDiv = document.createElement("div");
                    promotionDiv.id = "promotionDiv";
                    promotionDiv.innerHTML = "Choose your promotion:";
        
                    // Define chess piece options
                    var pieceOptions = ['\u265B', '\u265C', '\u265D', '\u265E'];
        
                    // Populate the div with clickable spans
                    pieceOptions.forEach(piece => {
                        var pieceSpan = document.createElement("span");
                        pieceSpan.innerHTML = piece; // Replace this with your function to get UTF representation
                        pieceSpan.addEventListener("click", function () {
                            // Replace the pawn with the chosen piece
                            document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = piece;
                            // Remove the promotion div
                            document.body.removeChild(promotionDiv);
                        });
                        promotionDiv.appendChild(pieceSpan);
                    });
        
                    // Append the promotion div to the body
                    document.body.appendChild(promotionDiv);
                }
            }
        }
        else if(boarddisplay[x1][y1].getPiece().getName() === "Bishop")
    {
        if (board.moveBishop(x1, y1, x2, y2)) {
            turn = 1;
        }
    } 
    else if(boarddisplay[x1][y1].getPiece().getName() === "Knight")
    {
        if (board.moveKnight(x1, y1, x2, y2)) {
            turn = 1;
        }
    } 
    else if(boarddisplay[x1][y1].getPiece().getName() === "Rook")
    {
        if (board.moveRook(x1, y1, x2, y2)) {
            turn = 1;
        }
    }   
    } 
}

}