// Emanuel Ferris wrote this code :3

const input = document.querySelector(".input1");
const submit = document.querySelector(".submit");
const questionnumber = document.querySelector(".questionnumber");


submit.addEventListener("click", submitAnswer);
function submitAnswer() {
  // this function checks if the answer is correct
  if (input.value == answer) {
    const currentQuestionNumber = parseInt(questionnumber.textContent.slice(8, 10));
    const newQuestionNumber = currentQuestionNumber + 1;
     questionnumber.textContent = `Question ${newQuestionNumber}`;
    if (newQuestionNumber > 2) {
      window.location.replace("zionboss.html");
    }
    questionGen(); 
  
  }
  else {
    submit.classList.add('wrong-answer');
  setTimeout(() => {
    submit.classList.remove('wrong-answer');
  }, 1200);
  } 
}

function randomArithmetic() {
  // this function randomly selects an operation from the array.
    const operations = ["+", "-", "*", "/"];
    //                  Rounds down ||  Random number || The amount of operations listed.
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
  }

  //function addMoreToProblem(){}

  function questionGen() {
    // this part generates the numbers for the problem.
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 10);
    const num3 = Math.floor(Math.random() * 100);
    
    const operation = randomArithmetic();
    const question = `What is ${num1} ${operation} ${num2}?`;
    //  Holds the answer to the question. (duh)
    const answerBeforeRound =  eval(`${num1} ${operation} ${num2}`);
    const answerAfterRound = answerBeforeRound.toFixed(1);
    // for debugging/testing
    answer = parseFloat(answerAfterRound);
    console.log(answer);

    document.querySelector(".question").textContent = question;
    
  }

  document.querySelector(".input1").addEventListener("keyup", function(event) 
  {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.querySelector(".submit").click();  
    }
});

  // a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  alert(answer);
}