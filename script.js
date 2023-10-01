const gameBoard = document.getElementById("gameboard");
const infoDisplay = document.getElementById("info");
const startCells = ["", "", "", "", "", "", "", "", ""];

let go = "circle";

// infoDisplay.textContent = "Circle first";

console.log("maaz");

const createBoard = () => {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGo);
    gameBoard.append(cellElement);
  });
};

const addGo = (e) => {
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  e.target.append(goDisplay);
  go = go === "circle" ? "cross" : "circle";
  //   infoDisplay.textContent = "now" + go + "'s go.";
  e.target.removeEventListener("click", addGo);
  checkScore();
};

const checkScore = () => {
  const allSquares = document.getElementsByClassName("square");
  console.log(allSquares);
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  console.log(allSquares[0]);

  winningCombos.forEach((array) => {
    let circleWins = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("circle")
    );
    if (circleWins) {
      window.alert("circle win");
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });

  winningCombos.forEach((array) => {
    let crossWins = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("cross")
    );
    if (crossWins) {
      window.alert("Cross win");
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });
};

createBoard();
