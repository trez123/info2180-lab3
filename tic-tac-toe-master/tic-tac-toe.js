let elements = [];
let elementPositions = [];

function loadGame() {
  const board = document.querySelector("#board");
  if (board) {
    const squares = board.querySelectorAll("*");
    squares.forEach((square, key) => {
      square.classList.add("square");
      square.addEventListener("click", () => {
        const lastElement = elements.at(-1);
        if (lastElement) {
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
            elementPositions.push(key);
          }
        } else {
          console.log("X Added");
          elements.push("X");
          square.textContent = "X";
          square.classList.add("X");
          elementPositions.push(key);
        }
      });
    });
  }
}
