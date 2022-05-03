var player = {
  left: 450,
  top: 620,
};

var enemies = [
  { left: 350, top: 200 },
  { left: 450, top: 250 },
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

// player movement
document.onkeydown = function (e) {
  // move left
  if (e.keyCode == 37) {
    player.left -= 10;
  }
  // move right
  else if (e.keyCode == 39) {
    player.left += 10;
  }
  // move up
  else if (e.keyCode == 38) {
    player.top -= 10;
  }
  // move down
  else if (e.keyCode == 40) {
    player.top += 10;
  }
  // redraw player on map
  drawPlayer();
};
