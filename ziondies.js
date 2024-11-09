function playAudio() {
    var audio = new Audio('UUAAAAAH.mp3');
    audio.play();
    var yippee = new Audio('YIPPEE.mp3');
    setTimeout(function() { yippee.play(); }, 2000);
    var HOORAY = new Audio('HOORAY.mp3');
    setTimeout(function() { HOORAY.play(); }, 500);
    setTimeout(function() { window.location.replace("index.html"); },6000);
}

// Emanuel 


