const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const editPlayer1NameBtnElement = document.getElementById("edit-player1-btn");
const editPlayer2NameBtnElement = document.getElementById("edit-player2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
const gameBoardElement = document.getElementById("game-board");

editPlayer1NameBtnElement.addEventListener("click", openPlayerConfig);
editPlayer2NameBtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closedPlayerConfig);
backdropElement.addEventListener("click", closedPlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);
startNewGameBtnElement.addEventListener("click", startNewGame);

gameBoardElement.addEventListener("click", selectGameField);
