// const width = 28;
// const grid = document.querySelector(".grid");
// const scoreDisplay = document.getElementById("score");
// let squares = [];
// let score = 0;

// var fib = [0, 1];
// var i = 0;
// var sum = 0;
// while (fib[0] + fib[1] < 4000000) {
//   i = fib[0] + fib[1];
//   fib[0] = fib[1];
//   fib[1] = i;

//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

let total = 0;

for (i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    total += i;
  }
  return total;
}

console.log(total);

// //28 * 28 = 784
// // 0 - pac-dots
// // 1 - wall
// // 2 - ghost-lair
// // 3 - power-pellet
// // 4 - empty

// const layout = [
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   1,
//   1,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   3,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   3,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   1,
//   1,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   4,
//   4,
//   4,
//   4,
//   4,
//   4,
//   4,
//   4,
//   4,
//   4,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   4,
//   1,
//   1,
//   1,
//   2,
//   2,
//   1,
//   1,
//   1,
//   4,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   4,
//   1,
//   2,
//   2,
//   2,
//   2,
//   2,
//   2,
//   1,
//   4,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   4,
//   4,
//   4,
//   4,
//   4,
//   4,
//   0,
//   0,
//   0,
//   4,
//   1,
//   2,
//   2,
//   2,
//   2,
//   2,
//   2,
//   1,
//   4,
//   0,
//   0,
//   0,
//   4,
//   4,
//   4,
//   4,
//   4,
//   4,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   4,
//   1,
//   2,
//   2,
//   2,
//   2,
//   2,
//   2,
//   1,
//   4,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   4,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   4,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   4,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   4,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   4,
//   4,
//   4,
//   4,
//   4,
//   4,
//   4,
//   4,
//   4,
//   4,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   3,
//   0,
//   0,
//   1,
//   1,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   1,
//   1,
//   0,
//   0,
//   3,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   1,
//   1,
//   0,
//   0,
//   0,
//   0,
//   1,
//   1,
//   0,
//   0,
//   0,
//   0,
//   1,
//   1,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   0,
//   1,
//   1,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
// ];

// function createBoard() {
//   for (let i = 0; i < layout.length; i++) {
//     const square = document.createElement("div");
//     grid.appendChild(square);
//     squares.push(square);
//     if (layout[i] === 0) {
//       squares[i].classList.add("pac-dot");
//     } else if (layout[i] === 1) {
//       squares[i].classList.add("wall");
//     } else if (layout[i] === 2) {
//       squares[i].classList.add("ghost-lair");
//     } else if (layout[i] === 3) {
//       squares[i].classList.add("power-pellet");
//     }
//   }
// }
// createBoard();

// let pacmanCurrentIndex = 489;
// squares[pacmanCurrentIndex].classList.add("pacman");

// function control(e) {
//   squares[pacmanCurrentIndex].classList.remove("pacman");
//   switch (e.keyCode) {
//     case 40:
//       if (
//         !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair") &&
//         !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
//         pacmanCurrentIndex + width < width * width
//       )
//         pacmanCurrentIndex += width;
//       break;
//     case 38:
//       if (
//         !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair") &&
//         !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
//         pacmanCurrentIndex - width >= 0
//       )
//         pacmanCurrentIndex -= width;
//       break;
//     case 37:
//       if (
//         !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair") &&
//         !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
//         pacmanCurrentIndex % width !== 0
//       )
//         pacmanCurrentIndex -= 1;
//       if (pacmanCurrentIndex === 364) {
//         pacmanCurrentIndex = 391;
//       }
//       break;
//     case 39:
//       if (
//         !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair") &&
//         !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
//         pacmanCurrentIndex % width < width - 1
//       )
//         pacmanCurrentIndex += 1;
//       if (pacmanCurrentIndex === 391) {
//         pacmanCurrentIndex = 364;
//       }
//       break;
//   }
//   squares[pacmanCurrentIndex].classList.add("pacman");
//   pacdotEaten();
//   powerPelletEaten();
//   checkForWin();
//   checkForGameOver();
// }
// document.addEventListener("keydown", control);

// function pacdotEaten() {
//   if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
//     squares[pacmanCurrentIndex].classList.remove("pac-dot");
//     score += 1;
//     scoreDisplay.innerHTML = score;
//   }
// }

// class Ghost {
//   constructor(className, startIndex, speed) {
//     this.className = className;
//     this.startIndex = startIndex;
//     this.speed = speed;
//     this.currentIndex = startIndex;
//     this.isScared = false;
//     this.timerId = NaN;
//   }
// }

// function powerPelletEaten() {
//   //if square pacman is in contains a power pellet
//   if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
//     squares[pacmanCurrentIndex].classList.remove("power-pellet");
//     //add a score of 1000
//     score += 10;
//     //change each of the four ghosts to isScared
//     ghosts.forEach((ghost) => (ghost.isScared = true));
//     //use setTimeout to unscare ghosts after 10 seconds
//     setTimeout(unScareGhosts, 10000);
//   }
// }

// function unScareGhosts() {
//   ghosts.forEach((ghost) => (ghost.isScared = false));
// }

// const ghosts = [
//   new Ghost("blinky", 348, 250),
//   new Ghost("pinky", 376, 400),
//   new Ghost("inky", 351, 300),
//   new Ghost("clyde", 379, 500),
// ];

// ghosts.forEach((ghost) => {
//   squares[ghost.startIndex].classList.add(ghost.className);
//   squares[ghost.startIndex].classList.add("ghost");
// });

// ghosts.forEach((ghost) => moveGhost(ghost));

// function moveGhost(ghost) {
//   const directions = [-1, +1, -width, +width];
//   let direction = directions[Math.floor(Math.random() * directions.length)];

//   ghost.timerId = setInterval(function () {
//     if (
//       !squares[ghost.currentIndex + direction].classList.contains("wall") &&
//       !squares[ghost.currentIndex + direction].classList.contains("ghost")
//     ) {
//       //remove any ghost
//       squares[ghost.currentIndex].classList.remove(ghost.className);
//       squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
//       //add direction to current Index
//       ghost.currentIndex += direction;
//       //add ghost class
//       squares[ghost.currentIndex].classList.add(ghost.className);
//       squares[ghost.currentIndex].classList.add("ghost");
//     } else direction = directions[Math.floor(Math.random() * directions.length)];

//     if (ghost.isScared) {
//       squares[ghost.currentIndex].classList.add("scared-ghost");
//     }
//     if (
//       ghost.isScared &&
//       squares[ghost.currentIndex].classList.contains("pacman")
//     ) {
//       //remove classnames - ghost.className, 'ghost', 'scared-ghost'
//       squares[ghost.currentIndex].classList.remove(
//         ghost.className,
//         "ghost",
//         "scared-ghost"
//       );
//       // change ghosts currentIndex back to its startIndex
//       ghost.currentIndex = ghost.startIndex;
//       //re-add classnames of ghost.className and 'ghost' to the ghosts new postion
//       squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
//     }
//     checkForGameOver();
//   }, ghost.speed);
// }

// function checkForGameOver() {
//   //if the square pacman is in contains a ghost AND the square does NOT contain a scared ghost
//   if (
//     squares[pacmanCurrentIndex].classList.contains("ghost") &&
//     !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
//   ) {
//     //for each ghost - we need to stop it moving
//     ghosts.forEach((ghost) => clearInterval(ghost.timerId));
//     //remove eventlistener from our control function
//     document.removeEventListener("keydown", control);
//     //tell user the game is over
//     scoreDisplay.innerHTML = "You LOSE";
//   }
// }

// function checkForWin() {
//   if (score === 274) {
//     //stop each ghost
//     ghosts.forEach((ghost) => clearInterval(ghost.timerId));
//     //remove the eventListener for the control function
//     document.removeEventListener("keydown", control);
//     //tell our user we have won
//     scoreDisplay.innerHTML = "You WON!";
//   }
// }
