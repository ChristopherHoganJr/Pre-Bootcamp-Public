// initialize points
var score = 0;
var sushiEaten = 0;
var onigiriEaten = 0;
// create score board
function drawScore() {
  // Sushi points = 10
  // Onigiri points = 5
  // add shushi and onigiri points for total score
  score = sushiEaten * 10 + onigiriEaten * 5;
  // create scoreboard
  document.getElementById('scoreboard').innerHTML =
    "<p class='scores'>Total Score: " +
    score +
    "</p><p class='scores'>Sushi Eaten: " +
    sushiEaten +
    "</p><p class='scores'>Onigiri Eaten: " +
    onigiriEaten +
    '</p>';
}
drawScore();
// static world game board
/*var world = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];*/
// dynamic world game board
var world = [];
var dynamicRow = [];
for (var i = 0; i < 15; i++) {
  for (var j = 0; j < 15; j++) {
    let itemOdds = Math.floor(Math.random() * 99);
    let itemFloor = Math.floor(Math.random() * 3) + 1 + itemOdds;
    let anyFloor = Math.floor(Math.random() * 4);
    if (itemFloor > 3) {
      itemFloor = 1;
    }
    if (i == 0 || j == 0 || i == 14 || j == 14) {
      dynamicRow.push(0);
    } else {
      if (world[i - 1][j] == 0 && dynamicRow[j - 1] == 0) {
        dynamicRow.push(itemFloor);
      } else if (
        (world[i - 1][j] != 0 && dynamicRow[j - 1] == 0) ||
        (world[i - 1][j] == 0 && dynamicRow[j - 1] != 0)
      ) {
        dynamicRow.push(itemFloor);
      } else if (world[i - 1][j] != 0 && dynamicRow[j - 1] != 0) {
        dynamicRow.push(anyFloor);
      }
    }
  }
  world.push(dynamicRow);
  dynamicRow = [];
}

// game objects
var worldDict = {
  0: 'wall',
  1: 'blank',
  2: 'sushi',
  3: 'onigiri',
};
// creating the dynamic world based off the world array
function drawWorld() {
  output = '';
  // For 1 row per each item in array
  for (var row = 0; row < world.length; row++) {
    // Add a new opening div tag
    output += "<div class='row'>";
    // for every item in row array
    for (var x = 0; x < world[row].length; x++) {
      // add 1 div with class to create game path
      output +=
        "<div class='square " + worldDict[world[row][x]] + "'></div>";
    }
    // adds closing tag to div
    output += '</div>';
  }
  // draw all rows to the world div
  document.getElementById('world').innerHTML = output;
}
// run the drawWorld function
drawWorld();

function enemySpawn() {
  let yCord = Math.floor(Math.random() * 8) + 6;
  let xCord = Math.floor(Math.random() * 8) + 6;

  return [yCord, xCord];
}

// enemy spawn locations
var bluey = enemySpawn();
var pinky = enemySpawn();
var pumpky = enemySpawn();
var red = enemySpawn();

var enemyList = [
  ['bluey', bluey],
  ['pinky', pinky],
  ['pumpky', pumpky],
  ['red', red],
];

function enemySpawnLocations() {
  for (var enemy = 0; enemy < enemyList.length; enemy++) {
    var enemyName = enemyList[enemy][0];
    console.log(enemyList[enemy][1][0]);
    document.getElementById(enemyName).style.top =
      enemyList[enemy][1][0] * 40 + 'px';
    document.getElementById(enemyName).style.left =
      enemyList[enemy][1][1] * 40 + 'px';
  }
}

// Ninjaman's starting position
var ninjaman = {
  x: 1,
  y: 1,
};
// How ninjaman will move
function drawNinjaman() {
  document.getElementById('ninjaman').style.top = ninjaman.y * 40 + 'px';
  document.getElementById('ninjaman').style.left = ninjaman.x * 40 + 'px';
}
// run the drawNinjaman function
drawNinjaman();
enemySpawnLocations();
// when an arrow key is pressed
document.onkeydown = function (e) {
  // when the left arrow key is pressed
  if (e.keyCode == 37) {
    // if the next left space is not a wall
    if (world[ninjaman.y][ninjaman.x - 1] != 0) {
      // ninjaman can move left
      ninjaman.x--;
    }
  }
  // when the right arrow key is pressed
  if (e.keyCode == 39) {
    // if the next right space is not a wall
    if (world[ninjaman.y][ninjaman.x + 1] != 0) {
      // ninjaman can move right
      ninjaman.x++;
    }
  }
  // when the down arrow key is pressed
  if (e.keyCode == 40) {
    // if the next down space is not a wall
    if (world[ninjaman.y + 1][ninjaman.x] != 0) {
      // ninjaman can move down
      ninjaman.y++;
    }
  }
  // when the up arrow key is pressed
  if (e.keyCode == 38) {
    // if the next up space is not a wall
    if (world[ninjaman.y - 1][ninjaman.x] != 0) {
      // ninjaman can move up
      ninjaman.y--;
    }
  }
  //
  if (world[ninjaman.y][ninjaman.x] == 2) {
    sushiEaten++;
  } else if (world[ninjaman.y][ninjaman.x] == 3) {
    onigiriEaten++;
  }
  // turn spaces ninjaman has walked on black
  world[ninjaman.y][ninjaman.x] = 1;
  drawScore();
  // redraw ninjaman at new cordinates
  drawNinjaman();
  // redraw world to reflect what has happened
  drawWorld();
  enemyLocations();
};