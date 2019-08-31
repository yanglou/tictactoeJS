var e = document.getElementById('container');
var grid
var xo = "";
var winnerFound = "";
var player1;
var player2;

const gameBoard = (() => {

  var length = 3;

  for (i = 0; i < length; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (j = 0; j < length; j++) {
      let cell = document.createElement('div');
      cell.className = 'gridsquare';
      cell.id = 'cell' + i + '-' + j;
      cell.addEventListener('click', function() {
        if (cell.innerHTML == "" && xo != "") {
          if (xo == "x") {
            cell.innerHTML = 'X'
            xo = "o";
          } else {
            cell.innerHTML = 'O'
            xo = "x";
          }
          winnerFound = readGrid();
        } else {
          winnerFound = readGrid();
        }

        if (winnerFound != "") {
          if (player1.xo == winnerFound) {
            document.getElementById("whowins").innerHTML = player1.name + " wins!";
          } else if (player2.xo == winnerFound) {
            document.getElementById("whowins").innerHTML = player2.name + " wins!";
          } else if (winnerFound == "tie") {
            document.getElementById("whowins").innerHTML = "Tie!";
          } else {
            document.getElementById("whowins").innerHTML = "Error";
          }
          xo="";
        }
      });

      row.appendChild(cell);
    }
    e.appendChild(row);
  }
})();


const playerFactory = (name, xo) => {
  return {
    name,
    xo
  };
}


const displayController = (() => {
  const player1Name = window.prompt("Name of Player X:");
  const player2Name = window.prompt("Name of Player O:");
  xo = window.prompt("Who starts, X or O?");

  xo = xo.toLowerCase();

  if (xo == "x" || xo == "o") {
    player1 = playerFactory(player1Name, "x");
    player2 = playerFactory(player2Name, "o");
  } else {
    document.getElementById("whowins").innerHTML = "Error. Please restart."
    xo = "";
  }

})();

function readGrid() {
  var cell00 = document.getElementById('cell0-0').innerHTML;
  var cell01 = document.getElementById('cell0-1').innerHTML;
  var cell02 = document.getElementById('cell0-2').innerHTML;
  var cell10 = document.getElementById('cell1-0').innerHTML;
  var cell11 = document.getElementById('cell1-1').innerHTML;
  var cell12 = document.getElementById('cell1-2').innerHTML;
  var cell20 = document.getElementById('cell2-0').innerHTML;
  var cell21 = document.getElementById('cell2-1').innerHTML;
  var cell22 = document.getElementById('cell2-2').innerHTML;

  grid = [
    [cell00, cell01, cell02],
    [cell10, cell11, cell12],
    [cell20, cell21, cell22]
  ];

  if (cell00 == cell01 && cell00 == cell02) {
    winnerFound = cell00;
  } else if (cell10 == cell11 && cell10 == cell12) {
    winnerFound = cell10;
  } else if (cell20 == cell21 && cell20 == cell22) {
    winnerFound = cell20;
  } else if (cell00 == cell10 && cell00 == cell20) {
    winnerFound = cell00;
  } else if (cell01 == cell11 && cell01 == cell21) {
    winnerFound = cell01;
  } else if (cell02 == cell12 && cell02 == cell22) {
    winnerFound = cell02
  } else if (cell00 == cell11 && cell00 == cell22) {
    winnerFound = cell00;
  } else if (cell02 == cell11 && cell02 == cell20) {
    winnerFound = cell02;
  } else if (!grid[0].includes("") && !grid[1].includes("") && !grid[2].includes("")) {
    winnerFound = "tie"
  }

  /*winnerFound == "X" || winnerFound == "O" ? winnerFound += " wins" : 1;*/

  return winnerFound.toLowerCase();
}
