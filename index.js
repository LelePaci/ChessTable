let chessBoard = [
    ['r', 'h', 'b', 'q', 'k', 'b', 'h', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'h', 'b', 'q', 'k', 'b', 'h', 'r']
]

function onLoad() {
    setSize();
    loadTable();
    loadPieces('white');
    loadPieces('black');
}

function setSize() {
    var mainTable = document.getElementById('main-table');
    mainTable.style.height = '600px';
    mainTable.style.width = '600px';
}

function loadTable() {
    var table = document.getElementById("cess-board");
    for (let i = 0; i < 8; i++) {
        var row = table.insertRow(i);
        for (let j = 0; j < 8; j++) {
            var cell = row.insertCell(j);
            cell.setAttribute("id", i + "" + j);
            cell.style.height = '75px';
            cell.style.width = '75px';
            if ((i % 2) === 0) {
                if ((j % 2) == 0) {
                    //cell.style.backgroundColor = "#8a785d";
                    cell.style.backgroundColor = '#769656';
                }
                else {
                    //cell.style.backgroundColor = '#fccc74';
                    cell.style.backgroundColor = '#eeeed2';
                }
            } else {
                if ((j % 2) != 0) {
                    cell.style.backgroundColor = '#769656';
                } else {
                    cell.style.backgroundColor = '#eeeed2';
                }
            }
        }
    }
}

function loadPieces(color) {
    var rowKing, rowPawns;
    if (color === 'white') {
        rowKing = '7';
        rowPawns = '6';
    } else if (color === 'black') {
        rowKing = '0';
        rowPawns = '1';
    }
    loadPieceImage(color + '-king.png', rowKing + '4'); //KING
    loadPieceImage(color + '-queen.png', rowKing + '3'); //QUEEN
    loadPieceImage(color + '-rook.png', rowKing + '0'); //ROOK1
    loadPieceImage(color + '-rook.png', rowKing + '7'); //ROOK2
    loadPieceImage(color + '-knight.png', rowKing + '1'); //KNIGHT1
    loadPieceImage(color + '-knight.png', rowKing + '6'); //KNIGHT2
    loadPieceImage(color + '-bishop.png', rowKing + '2'); //BISHOP1
    loadPieceImage(color + '-bishop.png', rowKing + '5'); //BISHOP2
    for (let i = 0; i < 8; i++) {
        loadPieceImage(color + '-pawn.png', rowPawns + i); //KNIGHT2
    }
}
function loadPieceImage(path, cell) {
    var img = document.createElement('img');
    img.src = 'pieces/' + path;
    document.getElementById(cell).appendChild(img);
}

function movePiece() {
    //testing
    loadPieceImage('white-pawn.png', '44');
    document.getElementById('64').removeChild('img');
}

function isEmpty(row, col) {

    console.log(chessBoard[row][col]);
    if (chessBoard[row][col] == ' ') {
        console.log('si');
        return true;
    }
    console.log('no');
    return false;
}