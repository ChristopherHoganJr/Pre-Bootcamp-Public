var player = {
  left: 450,
  top: 620,
};

var enemies = [
  { left: 250, top: 200 },
  { left: 350, top: 200 },
  { left: 450, top: 200 },
  { left: 550, top: 200 },
  { left: 650, top: 200 },
  { left: 750, top: 200 },
];

var missiles = [];

function drawPlayer() {
  content =
    "<div class='player' style='left:" +
    player.left +
    'px; top:' +
    player.top +
    "px;'></div>";
  document.getElementById('players').innerHTML = content;
}

function drawEnemies() {
  content = '';
  for (var idx = 0; idx < enemies.length; idx++) {
    content +=
      "<div class='enemy' style='left:" +
      enemies[idx].left +
      'px; top:' +
      enemies[idx].top +
      "px;'></div>";
  }
  document.getElementById('enemies').innerHTML = content;
}

function drawMissiles() {
  content = '';
  for (var idx = 0; idx < missiles.length; idx++) {
    content +=
      "<div class='missile' style='left:" +
      missiles[idx].left +
      'px; top:' +
      missiles[idx].top +
      "px'></div>";
  }
  document.getElementById('missiles').innerHTML = content;
}

function moveEnemies() {
  for (var idx = 0; idx < enemies.length; idx++) {
    enemies[idx].top = enemies[idx].top + 3;
  }
}

function moveMissiles() {
  for (var idx = 0; idx < missiles.length; idx++) {
    missiles[idx].top -= 15;
  }
}

function gameLoop() {
  drawPlayer();
  moveEnemies();
  drawEnemies();
  moveMissiles();
  drawMissiles();

  setTimeout(gameLoop, 100);
}
gameLoop();

// player movement
document.onkeydown = function (e) {
  // move left
  if (e.keyCode == 37 && player.left > 10) {
    player.left -= 10;
  }
  // move right
  else if (e.keyCode == 39 && player.left < 830) {
    player.left += 10;
  }
  // move up
  else if (e.keyCode == 38 && player.top > 500) {
    player.top -= 10;
  }
  // move down
  else if (e.keyCode == 40 && player.top < 620) {
    player.top += 10;
  }
  // shoot missiles
  else if (e.keyCode == 32) {
    missiles.push({ left: player.left + 34, top: player.top - 8 });
    console.log(missiles);
  }
  // redraw player on map
  drawPlayer();
};
