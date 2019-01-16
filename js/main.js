var mouseImg = new Image();
mouseImg.src = "img/pointer.png";
var posMouseX=0;
var posMouseY=0;
var gameWidth=800;
var gameHeight=600;
var context;
var gameCanvas;


function begin() {
	gameCanvas = document.getElementById("gameCanvas");
    //context.drawImage(mouseImg, Math.random() * 800, Math.random() * 600);
	window.addEventListener('keydown',keyDown, false);
	//window.addEventListener('keydown',keyUp, false);
	gameCanvas.addEventListener("mousemove", mouseMove);
	gameCanvas.addEventListener("mousedown", mouseDown);
	gameCanvas.addEventListener("mouseup", mouseUp);
	draw();	
}

function draw(){
	requestAnimationFrame(draw);
	context = gameCanvas.getContext('2d');
    context.clearRect(0, 0, gameWidth, gameHeight); 
	
	context.drawImage(mouseImg, posMouseX, posMouseY,12,19);
	/*-----------------------------------------------------------------------------*/
}
function mouseMove(mouseEvent) {
	posMouseX=mouseEvent.offsetX;
	posMouseY=mouseEvent.offsetY;
}
function mouseDown(mouseEvent) {
	tela.MouseDown(mouseEvent);
}
function mouseUp(mouseEvent) {
	tela.MouseUp(mouseEvent);
}
function keyDown(e) {
	//alert("entered here");
	//var code = e.keyCode;	
	tela.KeyDown(e.keyCode);
    switch (code) {
        //case 37: posX--; break; //Left key
        //case 38: alert("Up"); break; //Up key
        //case 39: posX++; break; //Right key
        //case 40: alert("Down"); break; //Down key
        //default: alert(code); //Everything else
    }
}/*
window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}*/