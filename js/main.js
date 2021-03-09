// ===== Game Logic ===== //



// ===== constants ===== //
let boatsArr = [];


// ===== state variables ===== //
let turn, winner, playerBoard, pcBoard;

// ===== cached elements ===== //
pcStatusEl = document.querySelector("#pc-boats-status")
pcBoardEl = document.querySelector("#pc-board");
msgEl = document.querySelector("#msg");
playerStatusEl = document.querySelector("#player-boats-status")
playerBoardEl = document.querySelector("#player-board");
rotateButton = document.querySelector("#rotate");
replayButton = document.querySelector("#reset");

// ===== event listeners ===== //
playerBoardEl.addEventListener("click", handleClick);
rotateButton.addEventListener("click", rotate);
replayButton.addEventListener("click", init);


// ===== functions ===== //

function init () {
console.log("resetting!")
    winner = null;
    turn = 1;

    playerBoard = [
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

    pcBoard = [
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

    // invoke render() function
}

function shipPlacement() {
    // 
    // if any portion of boat is not within board, cannot place

    // if any portion of boat is on top of another boat, cannot place

    
}

function handleClick (evt) {
    console.log(evt.target.id);
    // 

    // alternate turn; turn *= -1
    // reassign winner = checkWinner() function
    // invoke render() function
}

function render () {

}

function hitOrMiss () {
    // set square backgroundColor to red if hit or pink if miss

    // disable square

}

function rotate () {
    console.log("rotating!")

}



function checkWinner() {
    // if (boatsArr) return
    // if (!boatsArr)
}

// ===== pc functionality ===== //

// if no hit on board select a random player board square

// if there's a hit on a ship that's not the 1-length boat, hit adjacent squares until hit
    // continue hitting down column or row until boat is destroyed
        // edgecase: parallel/perpendicular adjacent boats
