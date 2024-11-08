function playAudio() {
    var audio = new Audio('UUAAAAAH.mp3');
    audio.play();
    var yippee = new Audio('YIPPEE.mp3');
    setTimeout(function() { yippee.play(); }, 2000);
}

// Emanuel 