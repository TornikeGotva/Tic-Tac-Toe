"use strict";

const gameCells = document.querySelectorAll(".cell");
const gameInfo = document.querySelector(".info");

const currentPlayer = ["x", "circle"];

console.log(gameCells.textContent);

let curPlayer;
let roundWon = false;
let running = true;

gameCells.forEach((cell) => {
  cell.addEventListener(
    "click",
    function (e) {
      const id = e.target.dataset.id;
      console.log(id);

      // Add Symbols according to current player
      const currentSymbol = (curPlayer = curPlayer === 0 ? 1 : 0);
      cell.style.fontSize = "4rem";
      if (currentSymbol === 0) cell.textContent = "o";
      if (currentSymbol === 1) cell.textContent = "x";

      // Check a winner
      if (
        gameCells[0].textContent === "x" &&
        gameCells[1].textContent === "x" &&
        gameCells[2].textContent === "x"
      )
        gameInfo.textContent = "Winner : x";
      running = false;

      if (
        gameCells[3].textContent === "x" &&
        gameCells[4].textContent === "x" &&
        gameCells[5].textContent === "x"
      )
        gameInfo.textContent = "Winner : x";
      running = false;

      if (
        gameCells[6].textContent === "x" &&
        gameCells[7].textContent === "x" &&
        gameCells[8].textContent === "x"
      )
        gameInfo.textContent = "Winner : x";
      running = false;

      if (
        gameCells[0].textContent === "x" &&
        gameCells[3].textContent === "x" &&
        gameCells[6].textContent === "x"
      )
        gameInfo.textContent = "Winner : x";
      running = false;

      if (
        gameCells[1].textContent === "x" &&
        gameCells[4].textContent === "x" &&
        gameCells[7].textContent === "x"
      )
        gameInfo.textContent = "Winner : x";
      running = false;

      if (
        gameCells[2].textContent === "x" &&
        gameCells[5].textContent === "x" &&
        gameCells[8].textContent === "x"
      )
        gameInfo.textContent = "Winner : x";
      running = false;

      if (
        gameCells[0].textContent === "x" &&
        gameCells[4].textContent === "x" &&
        gameCells[8].textContent === "x"
      )
        gameInfo.textContent = "Winner : x";
      running = false;

      if (
        gameCells[2].textContent === "x" &&
        gameCells[4].textContent === "x" &&
        gameCells[6].textContent === "x"
      )
        gameInfo.textContent = "Winner : x";
      running = false;

      if (
        gameCells[0].textContent === "o" &&
        gameCells[1].textContent === "o" &&
        gameCells[2].textContent === "o"
      )
        gameInfo.textContent = "Winner : o";
      running = false;

      if (
        gameCells[3].textContent === "o" &&
        gameCells[4].textContent === "o" &&
        gameCells[5].textContent === "o"
      )
        gameInfo.textContent = "Winner : o";
      running = false;

      if (
        gameCells[6].textContent === "o" &&
        gameCells[7].textContent === "o" &&
        gameCells[8].textContent === "o"
      )
        gameInfo.textContent = "Winner : o";
      running = false;

      if (
        gameCells[0].textContent === "o" &&
        gameCells[3].textContent === "o" &&
        gameCells[6].textContent === "o"
      )
        gameInfo.textContent = "Winner : o";
      running = false;

      if (
        gameCells[1].textContent === "o" &&
        gameCells[4].textContent === "o" &&
        gameCells[7].textContent === "o"
      )
        gameInfo.textContent = "Winner : o";
      running = false;

      if (
        gameCells[2].textContent === "o" &&
        gameCells[5].textContent === "o" &&
        gameCells[8].textContent === "o"
      )
        gameInfo.textContent = "Winner : o";
      running = false;

      if (
        gameCells[0].textContent === "o" &&
        gameCells[4].textContent === "o" &&
        gameCells[8].textContent === "o"
      )
        gameInfo.textContent = "Winner : o";
      running = false;

      if (
        gameCells[2].textContent === "o" &&
        gameCells[4].textContent === "o" &&
        gameCells[6].textContent === "o"
      )
        gameInfo.textContent = "Winner : o";
      running = false;

      if ((gameCells.textContent = "")) gameInfo.textContent = "Winner : o";
    },
    { once: true }
  );
});
