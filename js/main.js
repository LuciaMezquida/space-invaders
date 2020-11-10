"use strict";
/*El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado*/
document.addEventListener("DOMContentLoaded", () => {
  //Pick up classes and ids with querySelectors
  const squares = document.querySelectorAll(".grid div");
  const resultDisplay = document.querySelector("#result");
  let width = 15; //we want the width of the grid to be 15
  let currentShooterIndex = 202; //we want the shooter to start at index 202
  let currentInvaderIndex = 0; //we want our invader to start at index 0
  let alienInvadersTakenDown = []; //invaders we have shot down
  let result = 0;
  let direction = 1; //the direction we want to go
  let invaderId = null;

  //Defining the alien invaders
  //Indexes we want our invaders to be in
  const alienInvaders = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
  ];
});
