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
    setColor(col)
    {
        this.color = col;
    }
    getColor()
    {
        return this.color;
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
    getName()
    {
        return this.piece? this.piece.getName() : "square";
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
        this.recentMove = {
            from: { row: 0, col: 0 },  // Square from which the piece moved
            to: { row: 0, col: 0 },    // Square to which the piece moved
            piece: null  // The piece that moved
        };
        
    }
    /**
     * make a successful move on the JSON object for bookeeeping 
     */
    makeMove(fromRow, fromCol, toRow, toCol) {
        // Your move logic here...

        // Update recentMove
        this.recentMove.from = { row: fromRow, col: fromCol };
        this.recentMove.to = { row: toRow, col: toCol };
        this.recentMove.piece = this.board[fromRow][fromCol].getPiece();
    }
    IsrecentWhite(x,y)
    {
        return (this.recentMove.to.row === x) && (this.recentMove.to.col === y) && (Number(this.recentMove.from.row) === Number(Number(x)+Number(2))) && (this.recentMove.from.col === y);
    }
    IsrecentBlack(x,y)
    {
        return (this.recentMove.to.row === x) && (this.recentMove.to.col === y) && (Number(this.recentMove.from.row) === Number(Number(x)-Number(2))) && (this.recentMove.from.col === y);
    }
    /**
     *@returns recent move object
     */
    getRecentMove() {
        return this.recentMove;
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
        this.board[0][0].getPiece().setColor("black");
        this.board[0][1].setPiece(new Knight("Knight",'\u265E'));
        this.board[0][1].getPiece().setColor("black");
        this.board[0][2].setPiece(new Bishop("Bishop",'\u265D'));
        this.board[0][2].getPiece().setColor("black");
        this.board[0][3].setPiece(new Queen("Queen",'\u265B'));
        this.board[0][3].getPiece().setColor("black");
        this.board[0][4].setPiece(new King("King",'\u265A'));
        this.board[0][4].getPiece().setColor("black");
        this.board[0][5].setPiece(new Bishop("Bishop",'\u265D'));
        this.board[0][5].getPiece().setColor("black");
        this.board[0][6].setPiece(new Knight("Knight",'\u265E'));
        this.board[0][6].getPiece().setColor("black");
        this.board[0][7].setPiece(new Rook("Rook",'\u265C'));
        this.board[0][7].getPiece().setColor("black");
        this.board[1][0].setPiece(new Pawn("Pawn",'\u265F'));
        this.board[1][0].getPiece().setColor("black");
        this.board[1][1].setPiece(new Pawn("Pawn",'\u265F'));
        this.board[1][1].getPiece().setColor("black");
        this.board[1][2].setPiece(new Pawn("Pawn",'\u265F'));
        this.board[1][2].getPiece().setColor("black");
        this.board[1][3].setPiece(new Pawn("Pawn",'\u265F'));
        this.board[1][3].getPiece().setColor("black");
        this.board[1][4].setPiece(new Pawn("Pawn",'\u265F'));
        this.board[1][4].getPiece().setColor("black");
        this.board[1][5].setPiece(new Pawn("Pawn",'\u265F'));
        this.board[1][5].getPiece().setColor("black");
        this.board[1][6].setPiece(new Pawn("Pawn",'\u265F'));
        this.board[1][6].getPiece().setColor("black");
        this.board[1][7].setPiece(new Pawn("Pawn",'\u265F'));
        this.board[1][7].getPiece().setColor("black");

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
        this.board[7][0].getPiece().setColor("white");
        this.board[7][1].setPiece(new Knight("Knight",'\u2658'));
        this.board[7][1].getPiece().setColor("white");
        this.board[7][2].setPiece(new Bishop("Bishop",'\u2657'));
        this.board[7][2].getPiece().setColor("white");
        this.board[7][3].setPiece(new Queen("Queen",'\u2655'));
        this.board[7][3].getPiece().setColor("white");
        this.board[7][4].setPiece(new King("King",'\u2654'));
        this.board[7][4].getPiece().setColor("white");
        this.board[7][5].setPiece(new Bishop("Bishop",'\u2657'));
        this.board[7][5].getPiece().setColor("white");
        this.board[7][6].setPiece(new Knight("Knight",'\u2658'));
        this.board[7][6].getPiece().setColor("white");
        this.board[7][7].setPiece(new Rook("Rook",'\u2656'));
        this.board[7][7].getPiece().setColor("white");
        this.board[6][0].setPiece(new Pawn("Pawn",'\u2659'));
        this.board[6][0].getPiece().setColor("white");
        this.board[6][1].setPiece(new Pawn("Pawn",'\u2659'));
        this.board[6][1].getPiece().setColor("white");
        this.board[6][2].setPiece(new Pawn("Pawn",'\u2659'));
        this.board[6][2].getPiece().setColor("white");
        this.board[6][3].setPiece(new Pawn("Pawn",'\u2659'));
        this.board[6][3].getPiece().setColor("white");
        this.board[6][4].setPiece(new Pawn("Pawn",'\u2659'));
        this.board[6][4].getPiece().setColor("white");
        this.board[6][5].setPiece(new Pawn("Pawn",'\u2659'));
        this.board[6][5].getPiece().setColor("white");
        this.board[6][6].setPiece(new Pawn("Pawn",'\u2659'));
        this.board[6][6].getPiece().setColor("white");
        this.board[6][7].setPiece(new Pawn("Pawn",'\u2659'));
        this.board[6][7].getPiece().setColor("white");
    }
    /**
     * takes in coordinates 
     * to move a pawn (capture or move)
     */
    movePawn(x1,y1,x2,y2)
    {
        //if destination has no piece (just a move)
        if(this.board[x2][y2].getName() === "square")
        {
            if(this.board[x1][y1].getPiece().getColor()==="black")//black pawn moves
            {
            //Enpassant Capture(black pawn captures edge case) PROBLEM HERE
            if(this.IsrecentWhite(x1,y2) &&(x1==4)&&((x2-1) == x1) && ((y1-1) == y2 || (y2-1) == y1)&&(this.board[x1][y2].getName() !== "square")&&(this.board[x1][y2].getPiece().getColor()!=="black"))
            {
                this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                this.board[x1][y1].setPiece(null);
                this.board[x1][y2].setPiece(null);
                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";
                document.querySelector(`span[data-row="${x1}"][data-col="${y2}"]`).innerHTML = "";
                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                this.makeMove(x1,y1,x2,y2);
                return true;
            }
                if( (x1 == 1)&& (y2 == y1)) /// start position
            {

                if((x2-1) == x1 || (x2-2) == x1 )//move one or two squares
                {
                    if((x2-2 == x1))
                    {
                        if(this.board[x2-1][y1].getName() === "square")
                        {
                            this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                            this.board[x1][y1].setPiece(null);
        
                            // Update the span content at the original coordinates
                            document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";
        
                            // Update the span content at the new coordinates
                            document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                            this.makeMove(x1,y1,x2,y2);
                            return true;
                        }
                        else{
                            alert("Error: Illegal pawn move");
                            return false;
                        }
                    }
                    this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                    this.board[x1][y1].setPiece(null);

                    // Update the span content at the original coordinates
                    document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";

                    // Update the span content at the new coordinates
                    document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                    this.makeMove(x1,y1,x2,y2);
                    return true;
                }
                else {
                    alert("Error: Illegal pawn move");
                    return false;
                }
            }
            else{//not starting position
                if(((x2-1) == x1 )&& (y2 == y1))//move one square
                {
                    this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                    this.board[x1][y1].setPiece(null);

                    // Update the span content at the original coordinates
                    document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";

                    // Update the span content at the new coordinates
                    document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                    this.makeMove(x1,y1,x2,y2);
                    return true;
                }
                else {
                    alert("Error: Illegal pawn move");
                    return false;
                }
            }
        }
        else {//white pawn moves
            //Enpassant Capture(white pawn captures edge case)
            if(this.IsrecentBlack(x1,y2) &&(x1==3)&&((x1-1) == x2) && ((y2-1) == y1 || (y1-1) == y2)&&(this.board[x1][y2].getName() !== "square")&&(this.board[x1][y2].getPiece().getColor()!=="white"))
            {
                this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                this.board[x1][y1].setPiece(null);
                this.board[x1][y2].setPiece(null);
                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";
                document.querySelector(`span[data-row="${x1}"][data-col="${y2}"]`).innerHTML = "";
                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                this.makeMove(x1,y1,x2,y2);
                return true;
            }
            if((x1 == 6) && (y2 == y1) ) /// start position
            {
                if(((x1-1) == x2 || (x1-2) == x2) &&(this.board[x1-1][y1].getName() === "square"))//move one or two squares
                {
                    this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                    this.board[x1][y1].setPiece(null);
                    // Update the span content at the original coordinates
                    document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";

                    // Update the span content at the new coordinates
                    document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                    this.makeMove(x1,y1,x2,y2);
                    return true;
                }
                else {
                    alert("Error: Illegal pawn move");
                    return false;
                }
            }
            else{//not starting position
                if(((x1-1) == x2) && (y2 == y1))//move one square
                {
                    this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                    this.board[x1][y1].setPiece(null);
                    // Update the span content at the original coordinates
                    document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";

                    // Update the span content at the new coordinates
                    document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                    this.makeMove(x1,y1,x2,y2);
                    return true;
                }
                else {
                    alert("Error: Illegal pawn move");
                    return false;
                }
            }
        }
        }
        else{//capture 
            if(this.board[x1][y1].getPiece().getColor()==="black")//black pawn captures
            {
                if(this.board[x2][y2].getPiece().getColor()!=="black"){
                if(((x2-1) == x1) && ((y1-1) == y2 || (y2-1) == y1))
                {//if(((x1-1) == x2) && ((y2-1) == y1 || (y1-1) == y2))
                    this.board[x2][y2].setPiece(null);
                    this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                    this.board[x1][y1].setPiece(null);

                    // Update the span content at the original coordinates
                    document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";

                    // Update the span content at the new coordinates
                    document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                    this.makeMove(x1,y1,x2,y2);
                    return true;
                }
                else{
                    alert("Error: illegal capture");
                    return false;
                }
            }
                else{
                    alert("Error: you can't capture your own piece dawg lol");
                    return false;
                }
            }
            else{//white pawn captures
                if(this.board[x2][y2].getPiece().getColor()!=="white"){
                    if(((x1-1) == x2) && ((y2-1) == y1 || (y1-1) == y2))
                    {
                        this.board[x2][y2].setPiece(null);
                        this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                        this.board[x1][y1].setPiece(null);

                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";

                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                        this.makeMove(x1,y1,x2,y2);
                        return true;
                    }
                    else{
                        alert("Error: illegal capture");
                        return false;
                    }
                }
                else{
                    alert("Error: you can't capture your own piece dawg lol");
                    return false;
                }
            }
        }
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
}

export { ChessBoard, ChessPiece, Pawn, King, Queen, Rook, Bishop, Knight };