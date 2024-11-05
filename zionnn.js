function playAudio() {
    var audio = new Audio('deathbyGLAMOUR.mp3');
    audio.play();
    audio.onended = function() {
        this.play();
    }
}
// typewriter effect
const div = document.querySelector('.dialogtextOther p');
const text = div.textContent;
function typewritergabagool(element, text, i = 0) 
{
    if (i === 0) {
        element.textContent = '';
    }
    element.textContent += text[i];
    //essentially just renders every letter in the index one by one.
    if (i === text.length - 1) 
    {
        return;
    }
    setTimeout(() => typewritergabagool(element, text, i + 1), 30);
    

    }
    
    typewritergabagool(div, text);

    const fightButton = document.querySelector('.fight');
    const dialogTextOther = document.querySelector('.dialogtextOther');
    const fightUI = document.querySelector('.fight-ui');
    const nerdButton = document.querySelector('.nerd-button');
    const playerhealth = document.getElementById("playerhealth");
    
    fightButton.addEventListener('click', () => {
        if (fightUI.style.display === 'none') {
            dialogTextOther.innerHTML = '';
            dialogTextOther.appendChild(nerdButton);
            fightUI.style.display = 'block';
        } else {
            nerdButton.remove();
            fightUI.style.display = 'none';
        }
    });
    
    nerdButton.addEventListener('click', () => {
        let damage = enemyAttack(playerhealth); // Pass playerhealth to enemyAttack
    });
    
    function enemyAttack(playerhealth) {
        let damage = parseFloat(Math.floor(Math.random() * 25) + 1);
        playerhealth.value -= damage;
        return damage;
    }