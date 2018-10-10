scbox = require("./scbox");

document.addEventListener('DOMContentLoaded', function(){
    scbox.init();
    
    // The main game loop
    var main = function () {
        var now = Date.now();
        var delta = now - then;
        delta = delta/scbox.speed;
        scbox.update(delta / 1000);
        scbox.render();
    
        then = now;
    
        // Request to do this again ASAP
        requestAnimationFrame(main);
    };
    
    var then = Date.now();
    //reset();
    main();
}, false);