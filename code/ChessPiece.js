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
        // Flag to track if castling has occurred
        this.castled = { white: false, black: false };
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
    /**
     * takes in coordinates 
     * to move a Rook (capture or move)
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    moveRook(x1,y1,x2,y2)
    {
        //move bishop on the board
        //if destination has no piece (just a move)
        if(this.board[x2][y2].getName() === "square")
        {
            var x = x1;
            var y = y1;
            var x3 = x2;
            var y3 = y2;
            if(this.rookLeft(x1,y1,x2,y2,false)){
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else if(this.rookRight(x1,y1,x2,y2,false))
            {
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else if(this.rookUp(x1,y1,x2,y2,false))
            {
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else if(this.rookDown(x1,y1,x2,y2,false))
            {
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else{
                alert("Error: Illegal Rook move");
                return false;
            }
        }
        else{//capture
            if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))//black bishop captures
            {
                    var x = x1;
                    var y = y1;
                    var x3 = x2;
                    var y3 = y2;
                    if(this.rookLeft(x1,y1,x2,y2,true)){
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
                        return true;
                    }
                    else if(this.rookRight(x1,y1,x2,y2,true))
                    {
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
                        return true;
                    }
                    else if(this.rookUp(x1,y1,x2,y2,true))
                    {
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
                        return true;
                    }
                    else if(this.rookDown(x1,y1,x2,y2,true))
                    {
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
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
    /**helper function
     * takes in coordinates 
     * to move a Rook (capture or move)
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    rookLeft(x1,y1,x2,y2,capture)
    {
        if(Number(y1)-Number(1)<Number(0)) return false;
        if(Number(x1)<=Number(7) && Number(x1)>=Number(0) && Number(y1)<=Number(7) && Number(y1)>=Number(0) && Number(x2)<=Number(7) && Number(x2)>=Number(0) && Number(y2)<=Number(7) && Number(y2)>=Number(0))
        {
            if(this.board[x1][--y1].getName() === "square"  && !capture )
            {
                if(Number(x1) === Number(x2) && Number(y1) === Number(y2))
                return true;
                else return this.rookLeft(x1,y1,x2,y2,capture);
            }
            else//possible capture
            {
                if(capture && Number(x1) === Number(x2) && Number(y1) === Number(y2) )
                {
                    return true;
                }
                else if(capture) return this.rookLeft(x1,y1,x2,y2,capture);
                else{
                    return false;
                }
            }
        }
        else return false;
    }
    /**helper function
     * takes in coordinates 
     * to move a Rook (capture or move)
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    rookRight(x1,y1,x2,y2,capture)
    {
        if(Number(y1)+Number(1)>Number(7)) return false;
        if(Number(x1)<=Number(7) && Number(x1)>=Number(0) && Number(y1)<=Number(7) && Number(y1)>=Number(0) && Number(x2)<=Number(7) && Number(x2)>=Number(0) && Number(y2)<=Number(7) && Number(y2)>=Number(0))
        {
            if(this.board[x1][++y1].getName() === "square"  && !capture )
            {
                if(Number(x1) === Number(x2) && Number(y1) === Number(y2))
                return true;
                else return this.rookRight(x1,y1,x2,y2,capture);
            }
            else//possible capture
            {
                if(capture && Number(x1) === Number(x2) && Number(y1) === Number(y2) )
                {
                    return true;
                }
                else if(capture) return this.rookRight(x1,y1,x2,y2,capture);
                else{
                    return false;
                }
            }
        }
        else return false;  
    }
    /**helper function
     * takes in coordinates 
     * to move a Rook (capture or move)
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    rookUp(x1,y1,x2,y2,capture)
    {
        if(Number(x1)-Number(1)<Number(0)) return false;
        if(Number(x1)<=Number(7) && Number(x1)>=Number(0) && Number(y1)<=Number(7) && Number(y1)>=Number(0) && Number(x2)<=Number(7) && Number(x2)>=Number(0) && Number(y2)<=Number(7) && Number(y2)>=Number(0))
        {
            if(this.board[--x1][y1].getName() === "square"  && !capture )
            {
                if(Number(x1) === Number(x2) && Number(y1) === Number(y2))
                return true;
                else return this.rookUp(x1,y1,x2,y2,capture);
            }
            else//possible capture
            {
                if(capture && Number(x1) === Number(x2) && Number(y1) === Number(y2) )
                {
                    return true;
                }
                else if(capture) return this.rookUp(x1,y1,x2,y2,capture);
                else{
                    return false;
                }
            }
        }
        else return false;
    }
    /**helper function
     * takes in coordinates 
     * to move a Rook (capture or move)
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    rookDown(x1,y1,x2,y2,capture)
    {
        if(Number(x1)+Number(1)>Number(7)) return false;
        if(Number(x1)<=Number(7) && Number(x1)>=Number(0) && Number(y1)<=Number(7) && Number(y1)>=Number(0) && Number(x2)<=Number(7) && Number(x2)>=Number(0) && Number(y2)<=Number(7) && Number(y2)>=Number(0))
        {
            if(this.board[++x1][y1].getName() === "square"  && !capture )
            {
                if(Number(x1) === Number(x2) && Number(y1) === Number(y2))
                return true;
                else return this.rookDown(x1,y1,x2,y2,capture);
            }
            else//possible capture
            {
                if(capture && Number(x1) === Number(x2) && Number(y1) === Number(y2) )
                {
                    return true;
                }
                else if(capture) return this.rookDown(x1,y1,x2,y2,capture);
                else{
                    return false;
                }
            }
        }
        else return false;
    }
    /**
     * takes in coordinates 
     * to move a Queen (capture or move)
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    moveQueen(x1,y1,x2,y2)
    {
        //move queen on the board
        //if destination has no piece (just a move)
        if(this.board[x2][y2].getName() === "square")
        {
            var x = x1;
            var y = y1;
            var x3 = x2;
            var y3 = y2;
            if(this.br(x1,y1,x2,y2,false)){
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else if(this.bl(x1,y1,x2,y2,false))
            {
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else if(this.tr(x1,y1,x2,y2,false))
            {
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else if(this.tl(x1,y1,x2,y2,false))
            {
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else if(this.rookLeft(x1,y1,x2,y2,false)){
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else if(this.rookRight(x1,y1,x2,y2,false))
            {
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else if(this.rookUp(x1,y1,x2,y2,false))
            {
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else if(this.rookDown(x1,y1,x2,y2,false))
            {
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else{
                alert("Error: illegal Queen move");
                return false;
            }
        }
        else{
            if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))//black bishop captures
            {
                    var x = x1;
                    var y = y1;
                    var x3 = x2;
                    var y3 = y2;
                    if(this.br(x1,y1,x2,y2,true)){
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
                        return true;
                    }
                    else if(this.bl(x1,y1,x2,y2,true))
                    {
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
                        return true;
                    }
                    else if(this.tr(x1,y1,x2,y2,true))
                    {
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
                        return true;
                    }
                    else if(this.tl(x1,y1,x2,y2,true))
                    {
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
                        return true;
                    }
                    else if(this.rookLeft(x1,y1,x2,y2,true)){
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
                        return true;
                    }
                    else if(this.rookRight(x1,y1,x2,y2,true))
                    {
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
                        return true;
                    }
                    else if(this.rookUp(x1,y1,x2,y2,true))
                    {
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
                        return true;
                    }
                    else if(this.rookDown(x1,y1,x2,y2,true))
                    {
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
                        return true;
                    }
                    else{
                        alert("Error: illegal Queen capture");
                        return false;
                    }
            }
            else{
                alert("Error: you can't capture your own piece dawg lol");
                return false;
            }
        }
    }
    /**
     * takes in coordinates 
     * to move a King (capture or move)
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    moveKing(x1,y1,x2,y2)
    {
        //move king on the board
        if(Number(x1)+Number(1)===Number(x2)&&Number(y1)===Number(y2))
        {
            if(this.board[x2][y2].getName() !== "square")
            {
                if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))
            {
                this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                this.board[x1][y1].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                this.makeMove(x1,y1,x2,y2);
                if(this.board[x1][y1].getPiece().getColor()==="black")
                {
                    let color = "black";
                    this.castled[color] = true;
                }
                else{
                    let color = "white";
                    this.castled[color] = true;
                }
                return true;
            }
            else{
                alert("Error: you can't capture your own piece dawg lol");
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
            if(this.board[x1][y1].getPiece().getColor()==="black")
            {
                let color = "black";
                this.castled[color] = true;
            }
            else{
                let color = "white";
                this.castled[color] = true;
            }
            return true;
        }
        else if(Number(x1)-Number(1)===Number(x2)&&Number(y1)===Number(y2))
        {
            if(this.board[x2][y2].getName() !== "square")
            {
                if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))
            {
                this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                this.board[x1][y1].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                this.makeMove(x1,y1,x2,y2);
                if(this.board[x1][y1].getPiece().getColor()==="black")
                {
                    let color = "black";
                    this.castled[color] = true;
                }
                else{
                    let color = "white";
                    this.castled[color] = true;
                }
                return true;
            }
            else{
                alert("Error: you can't capture your own piece dawg lol");
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
            if(this.board[x1][y1].getPiece().getColor()==="black")
            {
                let color = "black";
                this.castled[color] = true;
            }
            else{
                let color = "white";
                this.castled[color] = true;
            }
            return true;
        }
        else if(Number(y1)-Number(1)=== Number(y2) && Number(x1)===Number(x2))
        {
            if(this.board[x2][y2].getName() !== "square")
            {
                if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))
            {
                this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                this.board[x1][y1].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                this.makeMove(x1,y1,x2,y2);
                if(this.board[x1][y1].getPiece().getColor()==="black")
                {
                    let color = "black";
                    this.castled[color] = true;
                }
                else{
                    let color = "white";
                    this.castled[color] = true;
                }
                return true;
            }
            else{
                alert("Error: you can't capture your own piece dawg lol");
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
            if(this.board[x1][y1].getPiece().getColor()==="black")
            {
                let color = "black";
                this.castled[color] = true;
            }
            else{
                let color = "white";
                this.castled[color] = true;
            }
            return true;
        }
        else if(Number(y1)+Number(1)=== Number(y2) && Number(x1)===Number(x2))
        {
            if(this.board[x2][y2].getName() !== "square")
            {
                if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))
            {
                this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                this.board[x1][y1].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                this.makeMove(x1,y1,x2,y2);
                if(this.board[x1][y1].getPiece().getColor()==="black")
                {
                    let color = "black";
                    this.castled[color] = true;
                }
                else{
                    let color = "white";
                    this.castled[color] = true;
                }
                return true;
            }
            else{
                alert("Error: you can't capture your own piece dawg lol");
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
            if(this.board[x1][y1].getPiece().getColor()==="black")
            {
                let color = "black";
                this.castled[color] = true;
            }
            else{
                let color = "white";
                this.castled[color] = true;
            }
            return true;
        }
        else if(Number(x1)-Number(1)===Number(x2)&& Number(y1)-Number(1)=== Number(y2))
        {
            if(this.board[x2][y2].getName() !== "square")
            {
                if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))
            {
                this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                this.board[x1][y1].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                this.makeMove(x1,y1,x2,y2);
                if(this.board[x1][y1].getPiece().getColor()==="black")
                {
                    let color = "black";
                    this.castled[color] = true;
                }
                else{
                    let color = "white";
                    this.castled[color] = true;
                }
                return true;
            }
            else{
                alert("Error: you can't capture your own piece dawg lol");
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
            if(this.board[x1][y1].getPiece().getColor()==="black")
            {
                let color = "black";
                this.castled[color] = true;
            }
            else{
                let color = "white";
                this.castled[color] = true;
            }
            return true;
        }
        else if(Number(x1)+Number(1)===Number(x2)&& Number(y1)+Number(1)=== Number(y2))
        {
            if(this.board[x2][y2].getName() !== "square")
            {
                if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))
            {
                this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                this.board[x1][y1].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                this.makeMove(x1,y1,x2,y2);
                if(this.board[x1][y1].getPiece().getColor()==="black")
                {
                    let color = "black";
                    this.castled[color] = true;
                }
                else{
                    let color = "white";
                    this.castled[color] = true;
                }
                return true;
            }
            else{
                alert("Error: you can't capture your own piece dawg lol");
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
            if(this.board[x1][y1].getPiece().getColor()==="black")
            {
                let color = "black";
                this.castled[color] = true;
            }
            else{
                let color = "white";
                this.castled[color] = true;
            }
            return true;
        }
        else if(Number(x1)+Number(1)===Number(x2)&& Number(y1)-Number(1)=== Number(y2))
        {
            if(this.board[x2][y2].getName() !== "square")
            {
                if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))
            {
                this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                this.board[x1][y1].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                this.makeMove(x1,y1,x2,y2);
                if(this.board[x1][y1].getPiece().getColor()==="black")
                {
                    let color = "black";
                    this.castled[color] = true;
                }
                else{
                    let color = "white";
                    this.castled[color] = true;
                }
                return true;
            }
            else{
                alert("Error: you can't capture your own piece dawg lol");
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
            if(this.board[x1][y1].getPiece().getColor()==="black")
            {
                let color = "black";
                this.castled[color] = true;
            }
            else{
                let color = "white";
                this.castled[color] = true;
            }
            return true;
        }
        else if(Number(x1)-Number(1)===Number(x2)&& Number(y1)+Number(1)=== Number(y2))
        {
            if(this.board[x2][y2].getName() !== "square")
            {
                if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))
            {
                this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                this.board[x1][y1].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();
                this.makeMove(x1,y1,x2,y2);
                if(this.board[x1][y1].getPiece().getColor()==="black")
                {
                    let color = "black";
                    this.castled[color] = true;
                }
                else{
                    let color = "white";
                    this.castled[color] = true;
                }
                return true;
            }
            else{
                alert("Error: you can't capture your own piece dawg lol");
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
            if(this.board[x1][y1].getPiece().getColor()==="black")
            {
                let color = "black";
                this.castled[color] = true;
            }
            else{
                let color = "white";
                this.castled[color] = true;
            }
            return true;
        }
        else {
            alert("Error: illegal King move");
            return false;
        }
    }
    /**
     * takes in coordinates 
     * to move a bishop (capture or move)
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    moveBishop(x1,y1,x2,y2)
    {
        //move bishop on the board
        //if destination has no piece (just a move)
        if(this.board[x2][y2].getName() === "square")
        {
            var x = x1;
            var y = y1;
            var x3 = x2;
            var y3 = y2;
            if(this.br(x1,y1,x2,y2,false)){
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else if(this.bl(x1,y1,x2,y2,false))
            {
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else if(this.tr(x1,y1,x2,y2,false))
            {
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else if(this.tl(x1,y1,x2,y2,false))
            {
                this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                this.board[x][y].setPiece(null);

                // Update the span content at the original coordinates
                document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";

                // Update the span content at the new coordinates
                document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                this.makeMove(x,y,x3,y3);
                return true;
            }
            else{
                alert("Error: Illegal Bishop move");
                return false;
            }
        }
        else{//capture
            if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))//black bishop captures
            {
                    var x = x1;
                    var y = y1;
                    var x3 = x2;
                    var y3 = y2;
                    if(this.br(x1,y1,x2,y2,true)){
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
                        return true;
                    }
                    else if(this.bl(x1,y1,x2,y2,true))
                    {
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
                        return true;
                    }
                    else if(this.tr(x1,y1,x2,y2,true))
                    {
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
                        return true;
                    }
                    else if(this.tl(x1,y1,x2,y2,true))
                    {
                        this.board[x3][y3].setPiece(this.board[x][y].getPiece());
                        this.board[x][y].setPiece(null);
        
                        // Update the span content at the original coordinates
                        document.querySelector(`span[data-row="${x}"][data-col="${y}"]`).innerHTML = "";
        
                        // Update the span content at the new coordinates
                        document.querySelector(`span[data-row="${x3}"][data-col="${y3}"]`).innerHTML = this.board[x3][y3].getPiece().Utf();
                        this.makeMove(x,y,x3,y3);
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
    /**
     * helper function that moves bishop in a bottom right diagonal
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    br(x1,y1,x2,y2,capture)
    {
        if(Number(x1)+Number(1)>Number(7)||Number(y1)+Number(1)>Number(7)) return false;
        if(Number(x1)<=Number(7) && Number(x1)>=Number(0) && Number(y1)<=Number(7) && Number(y1)>=Number(0) && Number(x2)<=Number(7) && Number(x2)>=Number(0) && Number(y2)<=Number(7) && Number(y2)>=Number(0))
        {
            if(this.board[++x1][++y1].getName() === "square"  && !capture )
            {
                if(Number(x1) === Number(x2) && Number(y1) === Number(y2))
                return true;
                else return this.br(x1,y1,x2,y2,capture);
            }
            else//possible capture
            {
                if(capture && Number(x1) === Number(x2) && Number(y1) === Number(y2) )
                {
                    return true;
                }
                else if(capture) return this.br(x1,y1,x2,y2,capture);
                else{
                    return false;
                }
            }
        }
        else return false;
    }
    /**
     * helper function that moves bishop in a bottom left diagonal
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    bl(x1,y1,x2,y2,capture)
    {
        if(Number(x1)+ Number(1) > 7 || Number(y1)- Number(1)<0)
        return false;
        if(Number(x1)<=Number(7) && Number(x1)>=Number(0) && Number(y1)<=Number(7) && Number(y1)>=Number(0) && Number(x2)<=Number(7) && Number(x2)>=Number(0) && Number(y2)<=Number(7) && Number(y2)>=Number(0))
        {
            if(this.board[++x1][--y1].getName() === "square" && !capture )
            {
                if(Number(x1) === Number(x2) && Number(y1) === Number(y2))
                return true;
                else return this.bl(x1,y1,x2,y2,false);
            }
            else//possible capture
            {
                if(capture && Number(x1) === Number(x2) && Number(y1) === Number(y2) )
                {
                    return true;
                }
                else if(capture) return this.bl(x1,y1,x2,y2,capture);
                else{
                    return false;
                }
            }
        }
        else return false;
    }
    /**
     * helper function that moves bishop in a top left diagonal
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    tl(x1,y1,x2,y2,capture)
    {
        if(Number(x1)- Number(1) <0 || Number(y1)- Number(1)<0)
        return false;
        if(Number(x1)<=Number(7) && Number(x1)>=Number(0) && Number(y1)<=Number(7) && Number(y1)>=Number(0) && Number(x2)<=Number(7) && Number(x2)>=Number(0) && Number(y2)<=Number(7) && Number(y2)>=Number(0))
        {
            //console.log("recursive case");
            if(this.board[--x1][--y1].getName() === "square" && !capture)
            {
                //console.log("recursive case");
                if(Number(x1) === Number(x2) && Number(y1) === Number(y2))
                return true;
                else return this.tl(x1,y1,x2,y2,false);
            }
            else//possible capture
            {
                if(capture && Number(x1) === Number(x2) && Number(y1) === Number(y2) )
                {
                    return true;
                }
                else if(capture) return this.tl(x1,y1,x2,y2,capture);
                else{
                    return false;
                }
            }
        }
        else return false;
    }
    /**
     * helper function that moves bishop in a top right diagonal
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    tr(x1,y1,x2,y2,capture)
    {
        if(Number(x1)- Number(1) <0 || Number(y1)+ Number(1)>7)
        return false;
        if(Number(x1)<=Number(7) && Number(x1)>=Number(0) && Number(y1)<=Number(7) && Number(y1)>=Number(0) && Number(x2)<=Number(7) && Number(x2)>=Number(0) && Number(y2)<=Number(7) && Number(y2)>=Number(0))
        {
            if(this.board[--x1][++y1].getName() === "square" && !capture )
            {
                if(Number(x1) === Number(x2) && Number(y1) === Number(y2))
                return true;
                else return this.tr(x1,y1,x2,y2,false);
            }
            else//possible capture
            {
                if(capture && Number(x1) === Number(x2) && Number(y1) === Number(y2) )
                {
                    return true;
                }
                else if(capture)return this.tr(x1,y1,x2,y2,capture);
                else{
                    return false;
                }
            }
        }
        else return false;
    }
    /**
     * takes in coordinates 
     * to move a knight (capture or move)
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    moveKnight(x1,y1,x2,y2)
    {
        if((Number(y1)-Number(2) === Number(y2)) && (Number(x1)+Number(1) === Number(x2) ||Number(x1)-Number(1) === Number(x2) ))
        {
            if(this.board[x2][y2].getName() !== "square")
            {
                if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))
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
                alert("Error: you can't capture your own piece dawg lol");
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
        else if((Number(y1)+Number(2) === Number(y2)) && (Number(x1)+Number(1) === Number(x2) ||Number(x1)-Number(1) === Number(x2)))
        {
            if(this.board[x2][y2].getName() !== "square")
            {
                if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))
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
                alert("Error: you can't capture your own piece dawg lol");
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
        else if((Number(x1)+Number(2) === Number(x2)) && (Number(y1)+Number(1) === Number(y2) ||Number(y1)-Number(1) === Number(y2)))
        {
            if(this.board[x2][y2].getName() !== "square")
            {
                if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))
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
                alert("Error: you can't capture your own piece dawg lol");
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
        else if((Number(x1)-Number(2) === Number(x2)) && (Number(y1)+Number(1) === Number(y2) ||Number(y1)-Number(1) === Number(y2)))
        {
            if(this.board[x2][y2].getName() !== "square")
            {
                if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))
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
                alert("Error: you can't capture your own piece dawg lol");
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
            alert("Error: Illegal Knight move");
            return false;
        }
    }
    /**
     * helper function that checks a valid pawn capture 
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    pawnHelper(x1,y1,x2,y2)
    {
            if(this.board[x2][y2].getPiece() === "square") return false;
            if(this.board[x1][y1].getPiece().getColor()==="black")//black pawn captures
            {
                if(this.board[x2][y2].getPiece().getColor()!=="black"){
                if(((x2-1) == x1) && ((y1-1) == y2 || (y2-1) == y1))
                {
                    return true;
                }
                else{
                    return false;
                }
            }
                else{
                    return false;
                }
            }
            else{//white pawn captures
                if(this.board[x2][y2].getPiece().getColor()!=="white"){
                    if(((x1-1) == x2) && ((y2-1) == y1 || (y1-1) == y2))
                    {
                        return true;
                    }
                    else{
                        return false;
                    }
                }
                else{
                    return false;
                }
            }
    }
    /**
     * helper function that checks a valid knight capture 
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    knightHelper(x1,y1,x2,y2)
    {
        if((Number(y1)-Number(2) === Number(y2)) && (Number(x1)+Number(1) === Number(x2) ||Number(x1)-Number(1) === Number(x2)))
        {
            //console.log("log1");
            return true;
        }
        else if((Number(y1)+Number(2) === Number(y2)) && (Number(x1)+Number(1) === Number(x2) ||Number(x1)-Number(1) === Number(x2)))
        {
            //console.log("log2");
            return true;
        }
        else if((Number(x1)+Number(2) === Number(x2)) && (Number(y1)+Number(1) === Number(y2) ||Number(y1)-Number(1) === Number(y2)))
        {

            //console.log("log3");
            return true;
        }
        else if((Number(x1)-Number(2) === Number(x2))&& (Number(y1)+Number(1) === Number(y2) ||Number(y1)-Number(1) === Number(y2)))
        {
            //console.log("log4");
            return true;
        }
        else {

            return false;
        }
    }
    /**
     * helper function that checks a valid Queen capture 
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    queenHelper(x1,y1,x2,y2)
    {
        if(this.board[x2][y2].getName() === "square") return false;
        if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))//black bishop captures
        {
                if(this.br(x1,y1,x2,y2,true)){
                    return true;
                }
                else if(this.bl(x1,y1,x2,y2,true))
                {
                    return true;
                }
                else if(this.tr(x1,y1,x2,y2,true))
                {
                    return true;
                }
                else if(this.tl(x1,y1,x2,y2,true))
                {
                    return true;
                }
                else if(this.rookLeft(x1,y1,x2,y2,true)){
                    return true;
                }
                else if(this.rookRight(x1,y1,x2,y2,true))
                {
                    return true;
                }
                else if(this.rookUp(x1,y1,x2,y2,true))
                {
                    return true;
                }
                else if(this.rookDown(x1,y1,x2,y2,true))
                {
                    return true;
                }
                else{
                    return false;
                }
        }
        else{
            return false;
        }
    }
    /**
     * helper function that checks a valid bishop capture 
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    bishopHelper(x1,y1,x2,y2)
    {
        if(this.board[x2][y2].getName() === "square") return false;
        if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))//black bishop captures
        {
                if(this.br(x1,y1,x2,y2,true)){
                    return true;
                }
                else if(this.bl(x1,y1,x2,y2,true))
                {
                    return true;
                }
                else if(this.tr(x1,y1,x2,y2,true))
                {
                    return true;
                }
                else if(this.tl(x1,y1,x2,y2,true))
                {
                    return true;
                }
                else{
                    return false;
                }
        }
        else{
            return false;
        }
    }
    /**
     * helper function that checks a valid rook capture 
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    rookHelper(x1,y1,x2,y2)
    {
        if(this.board[x2][y2].getName() === "square") return false;
        if((this.board[x1][y1].getPiece().getColor()==="black" && this.board[x2][y2].getPiece().getColor()!=="black") ||(this.board[x1][y1].getPiece().getColor()==="white" && this.board[x2][y2].getPiece().getColor()!=="white"))//black bishop captures
        {
               if(this.rookLeft(x1,y1,x2,y2,true)){
                    return true;
                }
                else if(this.rookRight(x1,y1,x2,y2,true))
                {
                    return true;
                }
                else if(this.rookUp(x1,y1,x2,y2,true))
                {
                    return true;
                }
                else if(this.rookDown(x1,y1,x2,y2,true))
                {
                    return true;
                }
                else{
                    return false;
                }
        }
        else{
            return false;
        }
    }
    /**
     * helper function that checks if a user can castle
     * @param {colour} color 
     * @param {departure x position} x1 
     * @param {departure y position} y1 
     * @param {destination x position} x2 
     * @param {destination y position} y2 
     */
    canCastle(color,x1,y1,x2,y2) {
        // Add this method in the Board class to check if castling is allowed
        // Implement logic to check if castling is allowed for the given color and side
        // For example, check if the rook and king have not moved, and there are no pieces in between them
        // Return true if allowed, false otherwise
        // this.castled = { white: false, black: false };
        if(this.castled[color] ) {
            alert("Error: already Castled, Castling not possible");
            return false;
        }
        if(this.board[x2][y2].getName()==="square")
        {
            if(Number(y1)>Number(y2))//long castling
            {
                var oldY1 = y1;
                for(;y1 >0;y1--)
                {
                    if( Number(oldY1)=== Number(y1))
                    continue;
                    else if(this.board[x2][y1].getName()==="square")
                    continue;
                    else if(this.board[x2][y1].getName()==="Rook" && Number(y1)===Number(0))
                    continue
                    else{
                        alert("Error: Castling not possible");
                        return false;
                    }
                }
                y1 = oldY1;
                if(this.board[x1][y1].getPiece().getColor()==="black" )
                {
                    this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                    this.board[x1][y1].setPiece(null);
    
                    // Update the span content at the original coordinates
                    document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";
    
                    // Update the span content at the new coordinates
                    document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();

                    //(0, 0) Destination Square: (0, 3)
                    this.board[0][3].setPiece(this.board[0][0].getPiece());
                    this.board[0][0].setPiece(null);
                    // Update the span content at the original coordinates
                    document.querySelector(`span[data-row="${0}"][data-col="${0}"]`).innerHTML = "";
    
                    // Update the span content at the new coordinates
                    document.querySelector(`span[data-row="${0}"][data-col="${3}"]`).innerHTML = this.board[0][3].getPiece().Utf();
                    this.makeMove(x1,y1,x2,y2);
                   
                    let color = "black";
                    this.castled[color] = true;
                    
                    return true;
                }
                else{
                    this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                    this.board[x1][y1].setPiece(null);
    
                    // Update the span content at the original coordinates
                    document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";
    
                    // Update the span content at the new coordinates
                    document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();

                    //(7, 0) Destination Square: (7, 3)
                    this.board[7][3].setPiece(this.board[7][0].getPiece());
                    this.board[7][0].setPiece(null);
                    // Update the span content at the original coordinates
                    document.querySelector(`span[data-row="${7}"][data-col="${0}"]`).innerHTML = "";
    
                    // Update the span content at the new coordinates
                    document.querySelector(`span[data-row="${7}"][data-col="${3}"]`).innerHTML = this.board[7][3].getPiece().Utf();
                    this.makeMove(x1,y1,x2,y2);
                    let color = "white";
                    this.castled[color] = true;
                    return true;
                }
            }
            else{//short castling
                var oldY1 = y1;
                for(;y1 <8;y1++)
                {
                    if( Number(oldY1)=== Number(y1))
                    continue;
                    else if(this.board[x2][y1].getName()==="square")
                    continue;
                    else if(this.board[x2][y1].getName()==="Rook" && Number(y1)===Number(7))
                    continue
                    else{
                        alert("Error: Castling not possible");
                        return false;
                    }
                }
                y1 = oldY1;
                if(this.board[x1][y1].getPiece().getColor()==="black" )
                {
                    this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                    this.board[x1][y1].setPiece(null);
    
                    // Update the span content at the original coordinates
                    document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";
    
                    // Update the span content at the new coordinates
                    document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();

                    //(0, 7) Destination Square: (0, 5)
                    this.board[0][5].setPiece(this.board[0][7].getPiece());
                    this.board[0][7].setPiece(null);
                    // Update the span content at the original coordinates
                    document.querySelector(`span[data-row="${0}"][data-col="${7}"]`).innerHTML = "";
    
                    // Update the span content at the new coordinates
                    document.querySelector(`span[data-row="${0}"][data-col="${5}"]`).innerHTML = this.board[0][5].getPiece().Utf();
                    this.makeMove(x1,y1,x2,y2);
                    let color = "black";
                    this.castled[color] = true;
                    return true;
                }
                else{
                    this.board[x2][y2].setPiece(this.board[x1][y1].getPiece());
                    this.board[x1][y1].setPiece(null);
    
                    // Update the span content at the original coordinates
                    document.querySelector(`span[data-row="${x1}"][data-col="${y1}"]`).innerHTML = "";
    
                    // Update the span content at the new coordinates
                    document.querySelector(`span[data-row="${x2}"][data-col="${y2}"]`).innerHTML = this.board[x2][y2].getPiece().Utf();

                    //(7, 7) Destination Square: (7, 5)
                    this.board[7][5].setPiece(this.board[7][7].getPiece());
                    this.board[7][7].setPiece(null);
                    // Update the span content at the original coordinates
                    document.querySelector(`span[data-row="${7}"][data-col="${7}"]`).innerHTML = "";
    
                    // Update the span content at the new coordinates
                    document.querySelector(`span[data-row="${7}"][data-col="${5}"]`).innerHTML = this.board[7][5].getPiece().Utf();
                    this.makeMove(x1,y1,x2,y2);
                    let color = "white";
                    this.castled[color] = true;
                    return true;
                }
            }
        }
        else{
            alert("Error: Castling not possible");
            return false;
        }
    }
    /**
     * checks if a king is in threat
     * @param {colour} color 
     * @param {King x position} x1 
     * @param {king y position} y1 
     */
    inCheck(color,x1,y1)
    {
        //console.log("Original x1:", x1, "y1:", y1);
        for (let i = 0; i < this.board.length; i++) {
            for(let k = 0;k < this.board[i].length;k++)
            {
                if(this.board[i][k].getName()!=="square"&&this.board[i][k].getPiece().getColor()!==color&& this.board[i][k].getName()==="Bishop")
                {
                    if(this.bishopHelper(i,k,x1,y1))
                    return true;
                }
                //console.log("x1:", x1, "y1:", y1);
                if(this.board[i][k].getName()!=="square"&&this.board[i][k].getPiece().getColor()!==color&& this.board[i][k].getName()==="Rook")
                {
                    if(this.rookHelper(i,k,x1,y1))
                    {
                        return true;
                    }
                }
                //console.log("x1:", x1, "y1:", y1);
                if(this.board[i][k].getName()!=="square"&&this.board[i][k].getPiece().getColor()!==color&& this.board[i][k].getName()==="Knight")
                {
                    if(this.knightHelper(i,k,x1,y1))
                    return true;
                }
                //console.log("x1:", x1, "y1:", y1);
                if(this.board[i][k].getName()!=="square"&&this.board[i][k].getPiece().getColor()!==color&& this.board[i][k].getName()==="Queen")
                {
                    if(this.queenHelper(i,k,x1,y1))
                    return true;
                }
                //console.log("x1:", x1, "y1:", y1);
                if((this.board[i][k].getName()!=="square"&&this.board[i][k].getPiece().getColor()!==color&& this.board[i][k].getName()==="Pawn")&&(Number(i)=== Number(x1)+ Number(1)||Number(i)=== Number(x1)-Number(1) && Number(k)=== Number(y1)+Number(1)||Number(k)=== Number(y1)-Number(1)))
                {
                    if(this.pawnHelper(i,k,x1,y1))
                    return true;
                }
            }
          }
    }
    /**
     * funtion to get the kings y position
     */
    getWhiteKingy()
    {
        for (let i = 0; i < this.board.length; i++) {
            for(let k = 0;k < this.board[i].length;k++)
            {
                if(this.board[i][k].getName()!=="square"&&this.board[i][k].getPiece().getColor() ==="white" && this.board[i][k].getName()==="King")
                return k;
            }
        }
    }
    /**
     * funtion to get the kings x position
     */
    getWhiteKingx()
    {
        for (let i = 0; i < this.board.length; i++) {
            for(let k = 0;k < this.board[i].length;k++)
            {
                if(this.board[i][k].getName()!=="square"&&this.board[i][k].getPiece().getColor() ==="white" && this.board[i][k].getName()==="King")
                return i;
            }
        }
    }
    /**
     * funtion to get the kings x position
     */
    getBlackKingx()
    {
        for (let i = 0; i < 8; i++) {
            for(let k = 0;k < 8;k++)
            {
                //console.log(this.board[i][k].getName()+" "+this.board[i][k].getColor());
                if(this.board[i][k].getName()!=="square"&&this.board[i][k].getPiece().getColor() ==="black" && this.board[i][k].getName()==="King")
                {
                    //console.log(i);
                    return i;
                }
            }
        }
    }
    /**
     * funtion to get the kings x position
     */
    getBlackKingy()
    {
        for (let i = 0; i < this.board.length; i++) {
            for(let k = 0;k < this.board[i].length;k++)
            {
                if(this.board[i][k].getName()!=="square"&&this.board[i][k].getPiece().getColor() ==="black" && this.board[i][k].getName()==="King")
                return k;
            }
        }
    }
}

export { ChessBoard, ChessPiece, Pawn, King, Queen, Rook, Bishop, Knight };