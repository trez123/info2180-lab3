function loadGame() {
  const board = document.querySelector("#board");
  if (board) {
    const squares = board.querySelectorAll("*");
    squares.forEach((square) => {
      square.classList.add("square");
    });
  }
}
