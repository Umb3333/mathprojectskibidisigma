/* 
                    _ _               _                       
     /\            | (_)             | |                      
    /  \  _   _  __| |_  ___    _ __ | | __ _ _   _  ___ _ __ 
   / /\ \| | | |/ _` | |/ _ \  | '_ \| |/ _` | | | |/ _ \ '__|
  / ____ \ |_| | (_| | | (_) | | |_) | | (_| | |_| |  __/ |   
 /_/    \_\__,_|\__,_|_|\___/  | .__/|_|\__,_|\__, |\___|_|   
                               | |             __/ |          
                               |_|            |___/           
*/

function playAudio() {
    var audio = new Audio('deathbyGLAMOUR.mp3');
    audio.play();
    

    audio.onended = function() {
        this.play();
    }
}
/*   
  _                                  _ _                    __  __          _   
 | |                                (_) |                  / _|/ _|        | |  
 | |_ _   _ _ __   _____      ___ __ _| |_ ___ _ __    ___| |_| |_ ___  ___| |_ 
 | __| | | | '_ \ / _ \ \ /\ / / '__| | __/ _ \ '__|  / _ \  _|  _/ _ \/ __| __|
 | |_| |_| | |_) |  __/\ V  V /| |  | | ||  __/ |    |  __/ | | ||  __/ (__| |_ 
  \__|\__, | .__/ \___| \_/\_/ |_|  |_|\__\___|_|     \___|_| |_| \___|\___|\__|
       __/ | |                                                                  
      |___/|_|                                                                  
                                                                                
                                                                                */
const div = document.querySelector('.dialogtextOther p') || document.querySelector('.dialogtextOther h3');
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


/* 
  ______ _       _     _     _    _ _____ 
 |  ____(_)     | |   | |   | |  | |_   _|
 | |__   _  __ _| |__ | |_  | |  | | | |  
 |  __| | |/ _` | '_ \| __| | |  | | | |  
 | |    | | (_| | | | | |_  | |__| |_| |_ 
 |_|    |_|\__, |_| |_|\__|  \____/|_____|
            __/ |                         
           |___/                          
*/

    const fightButton = document.querySelector('.fight');
    const dialogTextOther = document.querySelector('.dialogtextOther');
    const fightUI = document.querySelector('.fight-ui');
    const nerdButton = document.querySelector('.nerd-button');
    const playerhealth = document.querySelector(".playerhealth");
    
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
    const question = document.querySelector(".questiontext h3");
    
    const input1 = document.querySelector(".input1");
    const submit = document.querySelector(".submit");

/*function showinput() {

    if (input1.style.visibility === 'hidden') {
        
        $('.input1').css('visibility', 'visible');
        $('.submit').css('display', '');
    } 
}*/
const inputP = document.querySelector(".inputP");

nerdButton.addEventListener('click', () => {
          
        let question = document.querySelector('questiontext');
          question.textContent = questionGen();
        
        inputP.appendChild(input1);
        //console.log("hijfdrhjifde");
        
        
        
        nerdButton.disabled = true;
    });



     balls = true;
// Attack functions
function enemyAttack() {
        let damage = parseFloat(Math.floor(Math.random() * 25) + 1);
        playerhealth.value -= damage;
        return damage;
    }
    
function attackenemy() {
      let damage = parseFloat(Math.floor(Math.random() * 25) + 1);
      document.querySelector(".enemyhealth").value -= damage;
      console.log(damage);
    }

    /* 
   ____                  _   _                _____ ______ _   _ 
  / __ \                | | (_)              / ____|  ____| \ | |
 | |  | |_   _  ___  ___| |_ _  ___  _ __   | |  __| |__  |  \| |
 | |  | | | | |/ _ \/ __| __| |/ _ \| '_ \  | | |_ |  __| | . ` |
 | |__| | |_| |  __/\__ \ |_| | (_) | | | | | |__| | |____| |\  |
  \___\_\\__,_|\___||___/\__|_|\___/|_| |_|  \_____|______|_| \_|
                                                                 
                                                                 
    */
function questionGen() 
    {
        // this part generates the numbers for the problem.
        const num1 = Math.floor(Math.random() * 100);
        const num2 = Math.floor(Math.random() * 100);
        const num3 = Math.floor(Math.random() * 100);
        
        const operation = randomArithmetic();
        const questionprint = `What is ${num1} ${operation} ${num2}?`;
        //  Holds the answer to the question. (duh)
        const answerBeforeRound =  eval(`${num1} ${operation} ${num2}`);
        const answerAfterRound = answerBeforeRound.toFixed(1);
        // for debugging/testing
        answer = parseFloat(answerAfterRound);
        console.log(answer);
        
        typewritergabagool(div, text);
        document.querySelector(".dialogtextOther").textContent = questionprint;
        
    }
      
      if (balls == true)
        {
            imagechange();
        }



      function imagechange() {
        const images = ["aergg.png", "fuckyou.png"];
        const imageElement = document.querySelector(".zion");
        
        setInterval(() => {
            const randomimage = Math.floor(Math.random() * images.length);
            imageElement.src = images[randomimage];
        }, 2000);
    }



      function randomArithmetic() {
        // this function randomly selects an operation from the array.
          const operations = ["+", "-", "*", "/"];
          //                  Rounds down ||  Random number || The amount of operations listed.
          const randomIndex = Math.floor(Math.random() * operations.length);
          return operations[randomIndex];
        }
        
        
        
        const submittext = document.querySelector(".submit").textContent;

        function submitAnswer() {
          // this function checks if the answer is correct
          if (input.value == answer) {
            
            
            questionGen(); }
          else {
            submittext.classList.add('wrong-answer');
          setTimeout(() => {
            submittext.classList.remove('wrong-answer');
          }, 1200);
          } 
        }
        