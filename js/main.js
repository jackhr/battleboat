// ===== Game Logic ===== //



// ===== constants ===== //
let colorLookup = {
    "0": "#5dbcde",
    "1": "red",
    "2": "pink"
}

let playerBoardArr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 9
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 0
//   a  b  c  d  e  f  g  h  i  j
];

let pcBoardArr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 9
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 0
//   a  b  c  d  e  f  g  h  i  j
];

let boatsArray = [];



// ===== state variables ===== //
let turn, winner, playerBoard, pcBoard;

// ===== cached elements ===== //
pcStatusEl = document.querySelector("#pc-boats-status")
pcBoardEl = document.querySelector("#pc-board");
msgEl = document.querySelector("#msg");
playerStatusEl = document.querySelector("#player-boats-status")
playerBoardEl = document.querySelector("#player-board");
replayButton = document.querySelector("#reset");

// ===== functions ===== //

function init () {

}

function render () {

}

function hitOrMiss () {

}

    // ===== pc functionality ===== //
