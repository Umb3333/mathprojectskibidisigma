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
const enemyhealth = document.querySelector('.enemyhealth');
function playAudio() {
    var audio = new Audio('zionboss.mp3');
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
            document.querySelector('.inputP').style.left = '-100%';
            submit.style.left = '-100%';

        }
    });
const question = document.querySelector(".questiontext h3");
    
const input1 = document.querySelector(".input1");
const submit = document.querySelector(".submit");


const inputP = document.querySelector(".inputP");
document.querySelector('.nerd-button').addEventListener('click', function() {
  
  document.querySelector('.inputP').style.left = '0%';
  submit.style.left = '85%';
  
});


nerdButton.addEventListener('click', () => {
  console.log("hijfdrhjifde"); 
  let question = document.querySelector('questiontext');
  question.textContent = questionGen();
        
  
  
  nerdButton.disabled = true;
});



     balls = true;


// Attack functions


function enemyAttack(buff) {
  if (document.querySelector(".playerhealth").value <= 0)
    {
          window.location.replace("retry.html");
      } 
        let damage = parseFloat(Math.floor(Math.random() * 25) + 1);
        playerhealth.value -= damage;
        return damage;
    
        
    }
    damage = parseFloat(Math.floor(Math.random() * 25) + 1); 
function attackenemy() {
      let damage = parseFloat(Math.floor(Math.random() * 25) + 1);

      document.querySelector(".enemyhealth").value -= damage;
      console.log(damage);
      if (document.querySelector(".enemyhealth").value <= 0)
        {
            window.location.replace("zionfuckingdies.html");
        } 
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
        
        
        document.querySelector(".dialogtextOther").textContent = questionprint;
        typewritergabagool(questionprint, document.querySelector(".questiontext"));
        
    }
      
    const submittext = document.querySelector(".submit");
function resetToMenu() 
{
      document.querySelector('.inputP').style.left = '-100%';
      submit.style.left = '-100%';
      dialogTextOther.innerHTML = '';
      
  }

  function randomArithmetic() {
    // this function randomly selects an operation from the array.
      const operations = ["+", "-", "*", "/"];
      //                  Rounds down ||  Random number || The amount of operations listed.
      const randomIndex = Math.floor(Math.random() * operations.length);
      return operations[randomIndex];
    }
    

  /*
  

   _____       _               _ _                                          
  / ____|     | |             (_) |       /\                                
 | (___  _   _| |__  _ __ ___  _| |_     /  \   _ __  _____      _____ _ __ 
  \___ \| | | | '_ \| '_ ` _ \| | __|   / /\ \ | '_ \/ __\ \ /\ / / _ \ '__|
  ____) | |_| | |_) | | | | | | | |_   / ____ \| | | \__ \\ V  V /  __/ |   
 |_____/ \__,_|_.__/|_| |_| |_|_|\__| /_/    \_\_| |_|___/ \_/\_/ \___|_|   
                                                                            
                                                                            


  */ 
function submitAnswer() {
      // this function checks if the answer is correct
      if (input1.value == answer) {
          attackenemy();
          resetToMenu();
          zionattackswipeskibidi();
          setTimeout(YEEOWWCH, 1000);
          
          

         }
         input1.value = "";
         setTimeout(damagekeyframe, 4000);
         

         setTimeout(clearback2menu, 1000);
         function YEEOWWCH (){
            document.querySelector(".dialogtextOther").innerHTML = 'YEEOWWCH.... TAKE THIS NERDD';
         } 

        
         
         
         typewritergabagool(div, text);
         

      } 
      function clearback2menu () {
        lines = ["You're starting to piss me off.", "BEHOLD THE POWER OF AN ANGEL", "RAAAAAAAAAAAGH",
           "volp zolrp leep worp 'Faggot?' zarp zlirp", "jag när jag anväder mcree ult och ultar på skärmen"];
        const randomline = Math.floor(Math.random() * lines.length);
        document.querySelector(".dialogtextOther").innerHTML = lines[randomline];
      }
      submit.addEventListener("click", submitAnswer);
    
      if (balls == true)
        {
            imagechange();
        }


  function damagekeyframe () 
  {
    document.querySelector(".mainBox", ".buttons").animate([
      // key frames
      { transform: 'translateX(0px)' },
      { transform: 'translateX(50px)' },
      { transform: 'translateX(-50px)' }
    ], 
     {
      // sync options
      duration: 10,
      iterations: 30
    });
    enemyAttack();
  }

function ziondeath () {
  
  
  document.querySelector(".dialogtextOther").innerHTML = 'DAMN YOU NEERDDD';
  document.querySelector('.zionplayer').style.animationName = 'death';
  document.querySelector('.zionplayer').style.animationDuration = '3s';

}



/*


  _____                               _____ _     _ _   
 |_   _|                             / ____| |   (_) |  
   | |  _ __ ___   __ _  __ _  ___  | (___ | |__  _| |_ 
   | | | '_ ` _ \ / _` |/ _` |/ _ \  \___ \| '_ \| | __|
  _| |_| | | | | | (_| | (_| |  __/  ____) | | | | | |_ 
 |_____|_| |_| |_|\__,_|\__, |\___| |_____/|_| |_|_|\__|
                         __/ |                          
                        |___/                           


*/ 
      function imagechange() {
        const images = ["aergg.png", "fuckingdies.png"];
        const imageElement = document.querySelector(".zion");
        
        setInterval(() => {
            const randomimage = Math.floor(Math.random() * images.length);
            imageElement.src = images[randomimage];
        }, 2000);
    }
    const hidesprite = document.querySelector(".zionSwipeImage").style.visibility = "hidden";





    function zionattackswipeskibidi() {
      const images = ["SFX303_nyknck/01.png", "SFX303_nyknck/02.png", "SFX303_nyknck/03.png", "SFX303_nyknck/04.png", "SFX303_nyknck/05.png"];
      const imageElement = document.querySelector(".zionSwipeImage");
      let currentIndex = 0;
      function hidesprite() {
        document.querySelector(".zionSwipeImage").style.visibility = "hidden";
      }
      document.querySelector(".zionSwipeImage").style.visibility = "visible";

      function playAnimation() {
        imageElement.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
        if (currentIndex !== 0) {
          setTimeout(playAnimation, 100);
          setTimeout(hidesprite, 500);
          
          //document.querySelector(".zionSwipeImage").style.visibility = "hidden";

        }
      }
    
      playAnimation();
      
    }



/* 
Die = redirect to retry page
win = redirect to win page (zionfuckingdies.html)
*/ 
        
        
/*


  _____ _                     
 |_   _| |                    
   | | | |_ ___ _ __ ___  ___ 
   | | | __/ _ \ '_ ` _ \/ __|
  _| |_| ||  __/ | | | | \__ \
 |_____|\__\___|_| |_| |_|___/
                              
                              


*/ 


const itembutton = document.querySelector(".items");
const HPbutton = document.querySelector(".health-potion");
const itemUI = document.querySelector(".item-ui");
const DMGbutton = document.querySelector(".damage-potion");


itembutton.addEventListener('click', () => {
  if (itemUI.style.visibility === 'hidden') {
      dialogTextOther.innerHTML = '';
      dialogTextOther.appendChild(HPbutton);
      dialogTextOther.appendChild(DMGbutton);
      itemUI.style.visibility = 'visible';
      itemUI.style.display = 'grid';
      HPbutton.style.display = 'block';
      
      
  } else {
      HPbutton.style.visibility = 'hidden';
      DMGbutton.style.visibility = 'hidden';
      itemUI.style.display = 'none';
  }
});


HPbutton.addEventListener('click', () => {
  playerhealth.value += '5';
  HPbutton.style.display = 'none';
});
function buff() {
  DMGbutton.addEventListener('click', () => {
    damage += '5';
    DMGbutton.style.display = 'none';
  });
}
