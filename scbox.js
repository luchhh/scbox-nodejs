//FactorySprites = require("./sprites");

var scbox = function(){
	var speed = 1;

	var sprites = [];
	var hero;
	var scene; 
	var navScene;

	// Listeners de teclado
	var keysDown = {};

	return {
		speed: speed,
		init: init,
		update: update,
		render: render,
		sprites: sprites,
		navScrene: navScene,
		createImage: createImage
	}
	/*listener: {
			render: new Array(),
		},*/
	function init(){
		let domParent = document.body;

		let canvas = _createCanvas("canvas",2); 
		scene = canvas.getContext("2d");
		domParent.appendChild(canvas);

		canvas = _createCanvas("canvasNav",3); 
		navScene = canvas.getContext("2d");
		domParent.appendChild(canvas);

		// Background image
		scene.bgImage = createImage("bg.png");
		navScene.bgImage = createImage("nav.png");

		// Game objects
		//hero = FactorySprites.createHero();
		/*let monster = FactorySprites.monster();
		let monster2 = FactorySprites.monster({direction:right});

		sprites = [hero, moster, monster2];*/
		//sprites = [hero];

		_bindKeys();
	}

	function update(modifier){
		var idIteracion =Math.floor((Math.random() * 1000) + 1); 

		if (90 in keysDown) { // Player holding z (jump)
			//this.hero.jump();
			//console.log("Presionado el Jump en iteracion "+idIteracion);
			//console.log(this.hero);
			//console.log("pixel en ctx "+ctx.getImageData(150,150,1,1).data); 
			//console.log("pixel en ctx nav "+ctxnav.getImageData(150,150,1,1).data); 
		}
	
		if (37 in keysDown) { // Player holding left
			//this.hero.direccion = "left";
		}else if (39 in keysDown) { // Player holding right
			//this.hero.direccion = "right";
		}else{
			//this.hero.direccion = "none";
		}
		//console.log("los sprites en update...");
		//console.log(sprites);
		/*for(let sprite of this.sprites){
			sprite.move(modifier);
		}*/
	}

	function render(){
		if (scene.bgImage.ready) {
			scene.drawImage(scene.bgImage, 0, 0);
		}
		if (navScene.bgImage.ready) {
			navScene.drawImage(navScene.bgImage, 0, 0);
		}
		//console.log("los sprites en render...");
		//console.log(sprites);

		/*for(let sprite of this.sprites){
			if(sprite.drawReady()){
				scene.drawImage(sprite.image, sprite.getDrawX(), sprite.getDrawY());
			}
		}*/
	}

	function createImage(name){
		let nImage = new Image();
		nImage.ready = false;
		nImage.onload = function () {
			this.ready = true;
		};
		nImage.src = "assets/img/"+name;

		nImage.name = function(nName){
			this.src = "assets/img/"+nName;
		}
		return nImage;
	}

	function _bindKeys(){
		addEventListener("keydown", function (e) {
			keysDown[e.keyCode] = true;
		}, false);
		
		addEventListener("keyup", function (e) {
			delete keysDown[e.keyCode];
		}, false);
	}

	function _createCanvas(id, zindex){
		let canvas = document.createElement("canvas");
		canvas.setAttribute("id", id);
		canvas.width = 1121;
		canvas.height = 747;
		canvas.style.zIndex = zindex;
		canvas.style.position = 'absolute';
		canvas.style.left = '0px';
		canvas.style.top = '0px';
		return canvas;
	}
}();

module.exports = scbox;

// Update game objects
// Keys and codes https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
//var update = function (modifier) {

	// Are they touching?
	/*if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		++monstersCaught;
		//reset();
	}*/
//};

// Draw everything
//var render = function () {

	// OJOOO con los listeners!! scbox.doAction("render");
	
	// Score
	/*ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Monsterrs caught: " + monstersCaught, 32, 32);	*/
	
//};

/*scbox.doAction = function(action){
	
	if(scbox.listener[action] != null && scbox.listener[action].length > 0){
		scbox.listener[action].forEach(function(listener) {
			listener.call();
		});
	}
}

scbox.addListener = function(action, listener){
	if(scbox.listener[action] == null){throw "No existe el listener "+action+" para SCBOX ";}
	scbox.listener[action].push(listener);
}*/
