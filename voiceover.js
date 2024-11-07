document.addEventListener('DOMContentLoaded', () => { // skriven av Leo
    const voiceoverToggle = document.getElementById('voiceover-toggle');

    
    const savedState = localStorage.getItem('voiceoverState');
    if (savedState === 'true') {
        voiceoverToggle.checked = true; 
        console.log('Voiceover Mode Enabled');
    } else {
        voiceoverToggle.checked = false; 
        console.log('Voiceover Mode Disabled');
    }

    // Event listener som sparar i localStorage
    voiceoverToggle.addEventListener('change', function () {
        if (this.checked) {
            console.log('Voiceover Mode Enabled');
            localStorage.setItem('voiceoverState', 'true'); // sparar state = true
        } else {
            console.log('Voiceover Mode Disabled');
            localStorage.setItem('voiceoverState', 'false'); // sparar state = false
        }
    });

    // definerar alphabet
    const sounds = {
        'a': 'sounds/a.wav',
        'b': 'sounds/b.wav',
        'c': 'sounds/c.wav',
        'd': 'sounds/d.wav',
        'e': 'sounds/e.wav',
        'f': 'sounds/f.wav',
        'g': 'sounds/g.wav',
        'h': 'sounds/h.wav',
        'i': 'sounds/i.wav',
        'j': 'sounds/j.wav',
        'k': 'sounds/k.wav',
        'l': 'sounds/l.wav',
        'm': 'sounds/m.wav',
        'n': 'sounds/n.wav',
        'o': 'sounds/o.wav',
        'p': 'sounds/p.wav',
        'q': 'sounds/q.wav',
        'r': 'sounds/r.wav',
        's': 'sounds/s.wav',
        't': 'sounds/t.wav',
        'u': 'sounds/u.wav',
        'v': 'sounds/v.wav',
        'w': 'sounds/w.wav',
        'x': 'sounds/x.wav',
        'y': 'sounds/y.wav',
        'z': 'sounds/z.wav',
        '0': 'sounds/0.wav',
        '1': 'sounds/1.wav',
        '2': 'sounds/2.wav',
        '3': 'sounds/3.wav',
        '4': 'sounds/4.wav',
        '5': 'sounds/5.wav',
        '6': 'sounds/6.wav',
        '7': 'sounds/7.wav',
        '8': 'sounds/8.wav',
        '9': 'sounds/9.wav',
        '.': 'sounds/..wav',
    };

    // Event listener för keydown
    document.addEventListener('keydown', (event) => {
        if (voiceoverToggle.checked) { 
            const key = event.key.toLowerCase(); 
            const soundPath = sounds[key]; 

            if (soundPath) { 
                const audio = new Audio(soundPath);
                audio.play();
            }
        }
    });
});