console.log("it works!");
var canvas = document.getElementById("canvas");

canvas.width = 480;
canvas.height = 480;
var x = 0;
var y = 0;
var speed = 2;
var dir = "";
var ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, 700, 700);

update();

function update() {
  window.requestAnimationFrame(update);
  ctx.fillStyle = "#000000";

  ctx.fillRect(0, 0, 480, 480);

  console.log("This is looping");
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(x, y, 20, 20);

  if (x < 0) {
    x = 0;
  }
  if (y < 0) {
    y = 0;
  }

  if (x + 50 > 480) {
    x = 460;
  }

  if (y + 50 > 480) {
    y = 460;
  }

  if (dir == "down") {
    y += speed;
  } else if (dir == "up") {
    y -= speed;
  } else if (dir == "right") {
    x += speed;
  } else if (dir == "left") {
    x -= speed;
  }
}

document.onkeydown = function(e) {
  console.log(e.keyCode);
  if (e.keyCode == 40) {
    dir = "down";
  }

  if (e.keyCode == 38) {
    dir = "up";
  }

  if (e.keyCode == 37) {
    dir = "left";
  }

  if (e.keyCode == 39) {
    dir = "right";
  }
};
