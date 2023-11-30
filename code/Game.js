import { ChessBoard, Pawn, King, Queen, Rook, Bishop, Knight } from "./ChessPiece.js";

var board = new ChessBoard();
var boarddisplay = board.displayboard();//get the board
var div = document.getElementById("board");//get board div
for (var i = 0; i < boarddisplay.length; i++) {
    console.log(boarddisplay.length);
    for (var j = 0; j < boarddisplay[i].length; j++) {
        console.log(boarddisplay[i].length);
        var x = document.createElement("SPAN");
        x.style.width = "50px";
        x.style.height = "50px";
        x.style.opacity = "0.5";
        if(boarddisplay[i][j].getPiece() !== null)
        x.innerHTML = boarddisplay[i][j].getPiece().Utf();
        else x.innerHTML = "hi";

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