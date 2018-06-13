//Variables Videos
var circle1X;
var circle1Y;

var circle2X;
var circle2Y;

var circle3X;
var circle3Y;

var circle4X;
var circle4Y;

var circle5X;
var circle5Y;

var circle6X;
var circle6Y;

var circle7X;
var circle7Y;

var circle8X;
var circle8Y;

var circle9X;
var circle9Y;

var circle10X;
var circle10Y;

var diameter = 70;
var angle = 0;
var smallDiameter = 30;

var videoInicial;
var videoCancion;
var song;
var imageLoading;

var songPlay = false;
var videoPlay = true;
var gameStart = false;

var title;
var description;

function preload() {
  videoInicial = createVideo("assets/video1.mp4");
  videoCancion = createVideo("assets/video2.mp4");
  song = loadSound("assets/song.mp3");
}

function setup() {
  //Setup Video
  title = select("#titulo");
  description = select("#descripcion");

  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  videoInicial.loop();
  videoInicial.hide();
  videoCancion.loop();
  videoCancion.hide();
  song.loop();
  document.getElementById("window").style.display = 'none';
}

function draw() {
  background(0);
  circle1X = windowWidth * 0.9;
  circle1Y = windowHeight * 0.55;

  circle2X = windowWidth * 0.2;
  circle2Y = windowHeight * 0.85;

  circle3X = windowWidth * 0.65;
  circle3Y = windowHeight * 0.7;
  
  circle4X = windowWidth * 0.17;
  circle4Y = windowHeight * 0.37;
  
  circle5X = windowWidth * 0.9;
  circle5Y = windowHeight * 0.1;
  
  circle6X = windowWidth * 0.57;
  circle6Y = windowHeight * 0.83;
  
  circle7X = windowWidth * 0.26;
  circle7Y = windowHeight * 0.21;
  
  circle8X = windowWidth * 0.35;
  circle8Y = windowHeight * 0.5;
  
  circle9X = windowWidth * 0.70;
  circle9Y = windowHeight * 0.87;
  
  circle10X = windowWidth * 0.73;
  circle10Y = windowHeight * 0.47;
  
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
    song.setVolume(0.4);
    ellipse(circle2X, circle2Y, d1, d1);
    ellipse(circle3X, circle3Y, d1, d1);
    ellipse(circle4X, circle4Y, d1, d1);
    ellipse(circle5X, circle5Y, d1, d1);
    ellipse(circle6X, circle6Y, d1, d1);
    ellipse(circle7X, circle7Y, d1, d1);
    ellipse(circle8X, circle8Y, d1, d1);
    ellipse(circle9X, circle9Y, d1, d1);
    ellipse(circle10X, circle10Y, d1, d1);
  }

  angle += 0.05;
}

function mouseClicked() {
  if (mouseX > (circle1X - diameter / 2) && mouseX < (circle1X + diameter / 2) && mouseY > (circle1Y - diameter / 2) && mouseY < (circle1Y + diameter / 2)) {
    videoPlay = false;
    gameStart = true;
  }

  if (mouseX > (circle2X - diameter / 2) && mouseX < (circle2X + diameter / 2) && mouseY > (circle2Y - diameter / 2) && mouseY < (circle2Y + diameter / 2)) {
    title.html('Perro Robot');
    description.html('Encontrado abandonado en la calle. Tiene problemas cardíacos por los cuales tiene implantes robóticos internos cortesía de la novia.');
    document.getElementById("imagen").src = "assets/perro.jpg";
    document.getElementById("window").style.display = 'block';
    document.getElementById("link").href = "https://www.amazon.com/Star-Wars-At-At-Costume-Medium/dp/B00910SSI6";
  }

  if (mouseX > (circle3X - diameter / 2) && mouseX < (circle3X + diameter / 2) && mouseY > (circle3Y - diameter / 2) && mouseY < (circle3Y + diameter / 2)) {
    title.html('Primera Cita');
    description.html('Foto de su primera cita. Fue tomada con flash, lo que hizo que la robot estuviera funcionando de forma extraña por la próxima media hora.');
    document.getElementById("imagen").src = "assets/Cita.jpg";
    document.getElementById("window").style.display = 'block';
    document.getElementById("link").href = "https://www.wikihow.com/Impress-Someone-on-a-First-Date";
  }

  if (mouseX > (circle4X - diameter / 2) && mouseX < (circle4X + diameter / 2) && mouseY > (circle4Y - diameter / 2) && mouseY < (circle4Y + diameter / 2)) {
    title.html('Familia Robot');
    description.html('Aquí aparecen todos los integrantes de la familia. Al principio no estaban seguros sobre tener un yerno humano y pensaban que no estarían juntos mucho tiempo pero ahora ya están acostumbrados a él');
    document.getElementById("imagen").src = "assets/familia.jpg";
    document.getElementById("window").style.display = 'block';
    document.getElementById("link").href = "https://www.amazon.com/NIUBEE-Floating-Document-Certificate-9-4x13-4/dp/B01N11BXZ3/ref=sr_1_35?s=home-garden&ie=UTF8&qid=1528523846&sr=1-35&keywords=photo+frame";
  }

  if (mouseX > (circle5X - diameter / 2) && mouseX < (circle5X + diameter / 2) && mouseY > (circle5Y - diameter / 2) && mouseY < (circle5Y + diameter / 2)) {
    title.html('Poster de los Granujas');
    description.html('La banda favorita de la pareja. Su canción favorita de ellos es Mi Novia es un Robot');
    document.getElementById("imagen").src = "assets/granujas.jpg";
    document.getElementById("window").style.display = 'block';
    document.getElementById("link").href = "https://www.youtube.com/user/losgranujassurf/videos";
  }

  if (mouseX > (circle6X - diameter / 2) && mouseX < (circle6X + diameter / 2) && mouseY > (circle6Y - diameter / 2) && mouseY < (circle6Y + diameter / 2)) {
    title.html('Terminator 2');
    description.html('Es una de las películas favoritas de él. Aunque ella cree que es un poco racista acepta verla con él de vez en cuando.');
    document.getElementById("imagen").src = "assets/terminator.jpg";
    document.getElementById("window").style.display = 'block';
    document.getElementById("link").href = "https://www.amazon.com/Terminator-Judgment-Day-Skynet-Blu-ray/dp/B001URA1WO/ref=sr_1_8?s=movies-tv&ie=UTF8&qid=1528524184&sr=1-8&keywords=terminator+2+blu+ray";
  }

  if (mouseX > (circle7X - diameter / 2) && mouseX < (circle7X + diameter / 2) && mouseY > (circle7Y - diameter / 2) && mouseY < (circle7Y + diameter / 2)) {
    title.html('Piedra');
    description.html('Es un recuerdo de la primera discusión que tuvieron. Ella se enojó tanto que le dio un golpe a la pared y la deshizo.');
    document.getElementById("imagen").src = "assets/piedra.jpg";
    document.getElementById("window").style.display = 'block';
    document.getElementById("link").href = "https://www.amazon.com/gp/product/B0026T3PN2/ref=s9_acsd_top_hd_bw_b2K4G_c_x_8_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-3&pf_rd_r=JMMDTJSW0QB53SW17SNR&pf_rd_t=101&pf_rd_p=fabcf9e7-ba58-5067-a929-540028287b00&pf_rd_i=553800";
  }

  if (mouseX > (circle8X - diameter / 2) && mouseX < (circle8X + diameter / 2) && mouseY > (circle8Y - diameter / 2) && mouseY < (circle8Y + diameter / 2)) {
    title.html('Computadora');
    description.html('La herramienta de trabajo principal de él. Hay días en los que llega a pasar horas sentado frente a ella. La novia siempre siente un poco de celos cuando eso pasa.');
    document.getElementById("imagen").src = "assets/PC.jpg";
    document.getElementById("window").style.display = 'block';
    document.getElementById("link").href = "https://www.amazon.com/Acer-Desktop-i5-7400-Windows-TC-780-ACKI5/dp/B073YHNPC6/ref=sr_1_3?s=electronics&ie=UTF8&qid=1528524508&sr=1-3&keywords=desktop+pc";
  }

  if (mouseX > (circle9X - diameter / 2) && mouseX < (circle9X + diameter / 2) && mouseY > (circle9Y - diameter / 2) && mouseY < (circle9Y + diameter / 2)) {
    title.html('Herramientas');
    description.html('Es la herramienta más versátil que podrías tener. No solo sirve para reparar al perro, la novia y lo que se descomponga en la casa, además cómo a ella le gusta la sensación se le pueden dar usos más creativos.');
    document.getElementById("imagen").src = "assets/tools.jpg";
    document.getElementById("window").style.display = 'block';
    document.getElementById("link").href = "https://www.amazon.com/STANLEY-STMT73795-Mixed-Tool-210-Piece/dp/B00JN3FGA4";
  }

  if (mouseX > (circle10X - diameter / 2) && mouseX < (circle10X + diameter / 2) && mouseY > (circle10Y - diameter / 2) && mouseY < (circle10Y + diameter / 2)) {
    title.html('Paraguas');
    description.html('Ella nunca se puede mojar, así que cada vez que salen siempre llevan el paraguas. Uno nunca sabe cuando puede caer agua de la nada, y no les agradaria ella haciendo corto circuito.');
    document.getElementById("imagen").src = "assets/umbrella.jpg";
    document.getElementById("window").style.display = 'block';
    document.getElementById("link").href = "https://www.amazon.com/Authentic-Original-MoMA-Starry-Umbrella/dp/B00KMXUVJK";
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function beginDrag(elementToDrag, event) {
  var deltaX = event.clientX - parseInt(elementToDrag.style.left);
  var deltaY = event.clientY - parseInt(elementToDrag.style.top);
  if (document.addEventListener) {
    document.addEventListener("mousemove", moveHandler, true);
    document.addEventListener("mouseup", upHandler, true);
  } else if (document.attachEvent) {
    document.attachEvent("onmousemove", moveHandler);
    document.attachEvent("onmouseup", upHandler);
  } else {
    var oldmovehandler = document.onmousemove;
    var olduphandler = document.onmouseup;
    document.onmousemove = moveHandler;
    document.onmouseup = upHandler;
  }
  if (event.stopPropagation) event.stopPropagation();
  else event.cancelBubble = true;
  if (event.preventDefault) event.preventDefault();
  else event.returnValue = false;

  function moveHandler(e) {
    if (!e) e = window.event;
    elementToDrag.style.left = (e.clientX - deltaX) + "px";
    elementToDrag.style.top = (e.clientY - deltaY) + "px";
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;
  }

  function upHandler(e) {
    if (!e) e = window.event;
    if (document.removeEventListener) {
      document.removeEventListener("mouseup", upHandler, true);
      document.removeEventListener("mousemove", moveHandler, true);
    } else if (document.detachEvent) {
      document.detachEvent("onmouseup", upHandler);
      document.detachEvent("onmousemove", moveHandler);
    } else {
      document.onmouseup = olduphandler;
      document.onmousemove = oldmovehandler;
    }
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;
  }
}
