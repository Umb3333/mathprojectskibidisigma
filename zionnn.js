function playAudio() {
    var audio = new Audio('deathbyGLAMOUR.mp3');
    audio.play();
    audio.onended = function() {
        this.play();
    }
}

