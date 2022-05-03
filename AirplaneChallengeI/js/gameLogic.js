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

function drawPlayer() {
  content =
    "<div class='player' style='left:" +
    player.left +
    'px; top:' +
    player.top +
    "px;'></div>";
  document.getElementById('players').innerHTML = content;
}
drawPlayer();

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
drawEnemies();

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
  else if (e.keyCode == 38 && player.top > 10) {
    player.top -= 10;
  }
  // move down
  else if (e.keyCode == 40 && player.top < 620) {
    player.top += 10;
  }
  // redraw player on map
  drawPlayer();
};
