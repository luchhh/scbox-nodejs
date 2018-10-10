/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("scbox = __webpack_require__(/*! ./scbox */ \"./scbox.js\");\n\ndocument.addEventListener('DOMContentLoaded', function(){\n    console.log(\"hello\");\n    scbox.init();\n    \n    // The main game loop\n    var main = function () {\n        var now = Date.now();\n        var delta = now - then;\n        delta = delta/scbox.speed;\n        scbox.update(delta / 1000);\n        scbox.render();\n    \n        then = now;\n    \n        // Request to do this again ASAP\n        requestAnimationFrame(main);\n    };\n    \n    var then = Date.now();\n    //reset();\n    main();\n}, false);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./scbox.js":
/*!******************!*\
  !*** ./scbox.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//FactorySprites = require(\"./sprites\");\n\nvar scbox = function(){\n\tvar speed = 1;\n\n\tvar sprites = [];\n\tvar hero;\n\tvar scene; \n\tvar navScene;\n\n\t// Listeners de teclado\n\tvar keysDown = {};\n\n\treturn {\n\t\tspeed: speed,\n\t\tinit: init,\n\t\tupdate: update,\n\t\trender: render,\n\t\tsprites: sprites,\n\t\tnavScrene: navScene,\n\t\tcreateImage: createImage\n\t}\n\t/*listener: {\n\t\t\trender: new Array(),\n\t\t},*/\n\tfunction init(){\n\t\tlet domParent = document.body;\n\n\t\tlet canvas = _createCanvas(\"canvas\",2); \n\t\tscene = canvas.getContext(\"2d\");\n\t\tdomParent.appendChild(canvas);\n\n\t\tcanvas = _createCanvas(\"canvasNav\",3); \n\t\tnavScene = canvas.getContext(\"2d\");\n\t\tdomParent.appendChild(canvas);\n\n\t\t// Background image\n\t\tscene.bgImage = createImage(\"bg.png\");\n\t\tnavScene.bgImage = createImage(\"nav.png\");\n\n\t\t// Game objects\n\t\t//hero = FactorySprites.createHero();\n\t\t/*let monster = FactorySprites.monster();\n\t\tlet monster2 = FactorySprites.monster({direction:right});\n\n\t\tsprites = [hero, moster, monster2];*/\n\t\t//sprites = [hero];\n\n\t\t_bindKeys();\n\t}\n\n\tfunction update(modifier){\n\t\tvar idIteracion =Math.floor((Math.random() * 1000) + 1); \n\n\t\tif (90 in keysDown) { // Player holding z (jump)\n\t\t\t//this.hero.jump();\n\t\t\t//console.log(\"Presionado el Jump en iteracion \"+idIteracion);\n\t\t\t//console.log(this.hero);\n\t\t\t//console.log(\"pixel en ctx \"+ctx.getImageData(150,150,1,1).data); \n\t\t\t//console.log(\"pixel en ctx nav \"+ctxnav.getImageData(150,150,1,1).data); \n\t\t}\n\t\n\t\tif (37 in keysDown) { // Player holding left\n\t\t\t//this.hero.direccion = \"left\";\n\t\t}else if (39 in keysDown) { // Player holding right\n\t\t\t//this.hero.direccion = \"right\";\n\t\t}else{\n\t\t\t//this.hero.direccion = \"none\";\n\t\t}\n\t\t//console.log(\"los sprites en update...\");\n\t\t//console.log(sprites);\n\t\t/*for(let sprite of this.sprites){\n\t\t\tsprite.move(modifier);\n\t\t}*/\n\t}\n\n\tfunction render(){\n\t\tif (scene.bgImage.ready) {\n\t\t\tscene.drawImage(scene.bgImage, 0, 0);\n\t\t}\n\t\tif (navScene.bgImage.ready) {\n\t\t\tnavScene.drawImage(navScene.bgImage, 0, 0);\n\t\t}\n\t\t//console.log(\"los sprites en render...\");\n\t\t//console.log(sprites);\n\n\t\t/*for(let sprite of this.sprites){\n\t\t\tif(sprite.drawReady()){\n\t\t\t\tscene.drawImage(sprite.image, sprite.getDrawX(), sprite.getDrawY());\n\t\t\t}\n\t\t}*/\n\t}\n\n\tfunction createImage(name){\n\t\tlet nImage = new Image();\n\t\tnImage.ready = false;\n\t\tnImage.onload = function () {\n\t\t\tthis.ready = true;\n\t\t};\n\t\tnImage.src = \"assets/img/\"+name;\n\n\t\tnImage.name = function(nName){\n\t\t\tthis.src = \"assets/img/\"+nName;\n\t\t}\n\t\treturn nImage;\n\t}\n\n\tfunction _bindKeys(){\n\t\taddEventListener(\"keydown\", function (e) {\n\t\t\tkeysDown[e.keyCode] = true;\n\t\t}, false);\n\t\t\n\t\taddEventListener(\"keyup\", function (e) {\n\t\t\tdelete keysDown[e.keyCode];\n\t\t}, false);\n\t}\n\n\tfunction _createCanvas(id, zindex){\n\t\tlet canvas = document.createElement(\"canvas\");\n\t\tcanvas.setAttribute(\"id\", id);\n\t\tcanvas.width = 1121;\n\t\tcanvas.height = 747;\n\t\tcanvas.style.zIndex = zindex;\n\t\tcanvas.style.position = 'absolute';\n\t\tcanvas.style.left = '0px';\n\t\tcanvas.style.top = '0px';\n\t\treturn canvas;\n\t}\n}();\n\nmodule.exports = scbox;\n\n// Update game objects\n// Keys and codes https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes\n//var update = function (modifier) {\n\n\t// Are they touching?\n\t/*if (\n\t\thero.x <= (monster.x + 32)\n\t\t&& monster.x <= (hero.x + 32)\n\t\t&& hero.y <= (monster.y + 32)\n\t\t&& monster.y <= (hero.y + 32)\n\t) {\n\t\t++monstersCaught;\n\t\t//reset();\n\t}*/\n//};\n\n// Draw everything\n//var render = function () {\n\n\t// OJOOO con los listeners!! scbox.doAction(\"render\");\n\t\n\t// Score\n\t/*ctx.fillStyle = \"rgb(250, 250, 250)\";\n\tctx.font = \"24px Helvetica\";\n\tctx.textAlign = \"left\";\n\tctx.textBaseline = \"top\";\n\tctx.fillText(\"Monsterrs caught: \" + monstersCaught, 32, 32);\t*/\n\t\n//};\n\n/*scbox.doAction = function(action){\n\t\n\tif(scbox.listener[action] != null && scbox.listener[action].length > 0){\n\t\tscbox.listener[action].forEach(function(listener) {\n\t\t\tlistener.call();\n\t\t});\n\t}\n}\n\nscbox.addListener = function(action, listener){\n\tif(scbox.listener[action] == null){throw \"No existe el listener \"+action+\" para SCBOX \";}\n\tscbox.listener[action].push(listener);\n}*/\n\n\n//# sourceURL=webpack:///./scbox.js?");

/***/ })

/******/ });