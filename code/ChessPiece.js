class ChessPiece{
    constructor(piecename,string)
    {
        this.name = piecename;
        this.stringRepresentation = string;
    }
    Utf(){
        return this.stringRepresentation;
    }
    getName(){
        return this.name;
    }
    move(){
        return true;
    }
}

class Pawn extends ChessPiece{
    constructor(piecename,string)
    {
        super(piecename,string);
    }
    move(){//implement pawn movement logic in the board
        return true;
    }
}

class Queen extends ChessPiece{
    constructor(piecename,string)
    {
        super(piecename,string);
    }
    move(){//implement queen movement logic in the board
        return true;
    }
}
class King extends ChessPiece{
    constructor(piecename,string)
    {
        super(piecename,string);
    }
    move(){//implement king movement logic in the board
        return true;
    }
}
class Bishop extends ChessPiece{
    constructor(piecename,string)
    {
        super(piecename,string);
    }
    move(){//implement bishop movement logic in the board
        return true;
    }
}
class Knight extends ChessPiece{
    constructor(piecename,string)
    {
        super(piecename,string);
    }
    move(){//implement knight movement logic in the board
        return true;
    }
}
class Rook extends ChessPiece{
    constructor(piecename,string)
    {
        super(piecename,string);
    }
    move(){//implement rook movement logic in the board
        return true;
    }
}

class Square extends ChessPiece{
    constructor(piecename,string)
    {
        super(piecename,string);
    }
    move(){//implement pawn movement logic in the board
        return true;
    }
    /**
     * @param {(arg0: Pawn | Queen | King | Bishop | Knight | Rook) => void} newPiece
     */
    setPiece(newPiece)
    {
        this.piece = newPiece;
    }
    getPiece()
    {
        return this.piece;//may be null
    }
}

class ChessBoard{
    constructor()
    {
        this.board = [
            [new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square","")],
            [new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square","")],
            [new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square","")],
            [new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square","")],
            [new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square","")],
            [new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square","")],
            [new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square","")],
            [new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square",""),new Square("square","")]
        ];
        this.addChessPieces();
    }
    
    /**
     * 
     * @returns board to be manipulated using the dom and displayed in index file
     */
    displayboard()
    {
        //use the dom to display board in game file
        return this.board;
    }
    addChessPieces()
    {
        //add chessPieces on the board
        /*
        for (var i = 0; i < this.board.length; i++) {
            for (var j = 0; j < this.board[i].length; j++) {
                if(i == 0)
                {
                    this.board
                }
            }
        }*/
        /*

        Black Chess King: '\u265A'
        Black Chess Queen: '\u265B'
        Black Chess Rook: '\u265C'
        Black Chess Bishop: '\u265D'
        Black Chess Knight: '\u265E'
        Black Chess Pawn: '\u265F'
         */

        //black pieces
        this.board[0][0].setPiece(new Rook("Rook",'\u265C'));
        this.board[0][1].setPiece(new Knight("Knight",'\u265E'));
        this.board[0][2].setPiece(new Bishop("Bishop",'\u265D'));
        this.board[0][3].setPiece(new Queen("Queen",'\u265B'));
        this.board[0][4].setPiece(new King("King",'\u265A'));
        this.board[0][5].setPiece(new Bishop("Bishop",'\u265D'));
        this.board[0][6].setPiece(new Knight("Knight",'\u265E'));
        this.board[0][7].setPiece(new Rook("Rook",'\u265C'));
        this.board[1][0].setPiece(new Pawn("Pawn",'\u265F'));
        this.board[1][1].setPiece(new Pawn("Pawn",'\u265F'));
        this.board[1][2].setPiece(new Pawn("Pawn",'\u265F'));
        this.board[1][3].setPiece(new Pawn("Pawn",'\u265F'));
        this.board[1][4].setPiece(new Pawn("Pawn",'\u265F'));
        this.board[1][5].setPiece(new Pawn("Pawn",'\u265F'));
        this.board[1][6].setPiece(new Pawn("Pawn",'\u265F'));
        this.board[1][7].setPiece(new Pawn("Pawn",'\u265F'));

        //white Pieces
        /*
        White Chess King: '\u2654'
        White Chess Queen: '\u2655'
        White Chess Rook: '\u2656'
        White Chess Bishop: '\u2657'
        White Chess Knight: '\u2658'
        White Chess Pawn: '\u2659'
        */
        this.board[7][0].setPiece(new Rook("Rook",'\u2656'));
        this.board[7][1].setPiece(new Knight("Knight",'\u2658'));
        this.board[7][2].setPiece(new Bishop("Bishop",'\u2657'));
        this.board[7][3].setPiece(new Queen("Queen",'\u2655'));
        this.board[7][4].setPiece(new King("King",'\u2654'));
        this.board[7][5].setPiece(new Bishop("Bishop",'\u2657'));
        this.board[7][6].setPiece(new Knight("Knight",'\u2658'));
        this.board[7][7].setPiece(new Rook("Rook",'\u2656'));
        this.board[6][0].setPiece(new Pawn("Pawn",'\u2659'));
        this.board[6][1].setPiece(new Pawn("Pawn",'\u2659'));
        this.board[6][2].setPiece(new Pawn("Pawn",'\u2659'));
        this.board[6][3].setPiece(new Pawn("Pawn",'\u2659'));
        this.board[6][4].setPiece(new Pawn("Pawn",'\u2659'));
        this.board[6][5].setPiece(new Pawn("Pawn",'\u2659'));
        this.board[6][6].setPiece(new Pawn("Pawn",'\u2659'));
        this.board[6][7].setPiece(new Pawn("Pawn",'\u2659'));
    }
    move()
    {
        //move a chessPiece
    }
    movePawn()
    {
        //move a pawn on a board
    }
    moveRook()
    {
        //move rook on the board
    }
    moveQueen()
    {
        //move queen on the board
    }
    moveKing()
    {
        //move king on the board
    }
    moveBishop()
    {
        //move bishop on the board
    }
    moveKnight()
    {
        //move horsey
    }
    legalMove()
    {
        //check if move is legal
        return true;
    }
}

export { ChessBoard, ChessPiece, Pawn, King, Queen, Rook, Bishop, Knight };