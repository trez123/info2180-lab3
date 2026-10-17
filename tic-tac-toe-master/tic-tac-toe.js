let elements = [];
let elementPositions = [];
const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

window.onload = function loadGame() {
  const board = document.querySelector("#board");
  const status = document.querySelector("#status");
  if (board) {
    const squares = board.querySelectorAll("*");
    squares.forEach((square, currentPosition) => {
      square.classList.add("square");
      square.addEventListener("click", () => {
        const lastElement = elements.at(-1);
        if (lastElement) {
          const lastElementPosition = elementPositions.at(-1);
          if (lastElementPosition !== currentPosition) {
            if (elements.length < 9) {
              if (lastElement === "X") {
                console.log("O Added");
                elements.push("O");
                square.textContent = "O";
                square.classList.add("O");
              } else {
                console.log("X Added");
                elements.push("X");
                square.textContent = "X";
                square.classList.add("X");
              }
              elementPositions.push(currentPosition);
            }
          }
        } else {
          console.log("X Added");
          elements.push("X");
          square.textContent = "X";
          square.classList.add("X");
          elementPositions.push(currentPosition);
        }

        const currentBoard = [];
        elements.forEach((element, index) => {
          const boardIndex = elementPositions[index];
          currentBoard[boardIndex] = elements[index];
        });

        winningLines.forEach((lane) => {
          if (
            currentBoard[lane[0]] === "X" &&
            currentBoard[lane[1]] === "X" &&
            currentBoard[lane[2]] === "X"
          ) {
            console.log("X is the Winner");
            status.textContent = "Congratulations! X is the Winner!";
            status.classList.add("you-won");
          } else if (
            currentBoard[lane[0]] === "O" &&
            currentBoard[lane[1]] === "O" &&
            currentBoard[lane[2]] === "O"
          ) {
            console.log("O is the winner");
            status.textContent = "Congratulations! O is the Winner!";
            status.classList.add("you-won");
          }
        });

        console.log("elements array", elements);
        console.log("element positions array", elementPositions);
      });
      square.addEventListener("mouseenter", () => {
        square.classList.add("hover");
      });
      square.addEventListener("mouseleave", () => {
        square.classList.remove("hover");
      });

      const newGameButton = document.querySelector(".btn");

      newGameButton.addEventListener("click", () => {
        square.textContent = "";
        square.classList.remove("O");
        square.classList.remove("X");
        elements = [];
        elementPositions = [];
        status.textContent =
          "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");
      });
    });
  }
};
