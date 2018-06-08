//Variables Videos
var circle1X;
var circle1Y;

var circle2X;
var circle2Y;

var diameter = 100;
var angle = 0;
var smallDiameter = 30;

var videoInicial;
var videoCancion;
var song;

var songPlay = false;
var videoPlay = true;
var gameStart = false;

function preload() {
  videoInicial = createVideo("assets/video1.mp4");
  videoCancion = createVideo("assets/video2.mp4");
  song = loadSound("assets/song.mp3");
}

function setup() {
  //Setup Video
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  videoInicial.loop();
  videoInicial.hide();
  videoCancion.loop();
  videoCancion.hide();
  song.loop();
}

function draw() {
  background(0);
  circle1X = windowWidth * 0.66;
  circle1Y = windowHeight * 0.75;

  circle2X = windowWidth * 0.85;
  circle2Y = windowHeight * 0.4;

  var d1 = smallDiameter + (sin(angle) * diameter / 2) + diameter / 2;
  noFill();
  strokeWeight(5);
  stroke(255, 0, 0);

  if (videoPlay) {
    image(videoInicial, windowWidth / 2, windowHeight / 2);
    song.setVolume(0);
    ellipse(circle1X, circle1Y, d1, d1);
  }

  if (gameStart) {
    image(videoCancion, windowWidth / 2, windowHeight / 2);
    if (!songPlay) {
      song.jump(0);
      songPlay = true;
    }
    song.setVolume(1);
    ellipse(circle2X, circle2Y, d1, d1);
  }

  angle += 0.05;
}

function mouseClicked() {
  if (mouseX > (circle1X - diameter / 2) && mouseX < (circle1X + diameter / 2) && mouseY > (circle1Y - diameter / 2) && mouseY < (circle1Y + diameter / 2)) {
    videoPlay = false;
    gameStart = true;
  }

  if (mouseX > (circle2X - diameter / 2) && mouseX < (circle2X + diameter / 2) && mouseY > (circle2Y - diameter / 2) && mouseY < (circle2Y + diameter / 2)) {
    print("INTERACCION!!!!")
    document.getElementById("window").style.display = 'block';
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function beginDrag(elementToDrag, event){
	var deltaX = event.clientX - parseInt(elementToDrag.style.left);
	var deltaY = event.clientY - parseInt(elementToDrag.style.top);
	if (document.addEventListener){
		document.addEventListener("mousemove", moveHandler, true);
		document.addEventListener("mouseup", upHandler, true);
	}
	else if (document.attachEvent){
		document.attachEvent("onmousemove", moveHandler);
		document.attachEvent("onmouseup", upHandler);
	}
	else {
		var oldmovehandler = document.onmousemove;
		var olduphandler = document.onmouseup;
		document.onmousemove = moveHandler;
		document.onmouseup = upHandler;
	}
	if (event.stopPropagation) event.stopPropagation();
	else event.cancelBubble = true;
	if (event.preventDefault) event.preventDefault();
	else event.returnValue = false;
	function moveHandler(e){
		if (!e) e = window.event;
		elementToDrag.style.left = (e.clientX - deltaX) + "px";
		elementToDrag.style.top = (e.clientY - deltaY) + "px";
		if (e.stopPropagation) e.stopPropagation();
		else e.cancelBubble = true;
	}
	function upHandler(e){
		if (!e) e = window.event;
		if (document.removeEventListener){
			document.removeEventListener("mouseup", upHandler, true);
			document.removeEventListener("mousemove", moveHandler, true);
		}
		else if (document.detachEvent){
			document.detachEvent("onmouseup", upHandler);
			document.detachEvent("onmousemove", moveHandler);
		}
		else {
			document.onmouseup = olduphandler;
			document.onmousemove = oldmovehandler;
		}
		if (e.stopPropagation) e.stopPropagation();
		else e.cancelBubble = true;
	}
}