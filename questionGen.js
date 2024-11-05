// Emanuel Ferris wrote this code :3

const input = document.querySelector(".input1");
const submit = document.querySelector(".submit");
const questionnumber = document.querySelector(".questionnumber");


submit.addEventListener("click", submitAnswer);
function submitAnswer() {
  // this function checks if the answer is correct
  if (input.value == answer) {
    questionnumber.textContent = `Question ${questionnumber.textContent.slice(8, 10)}`;
    questionGen(); }
  else {
    document.querySelector(".questiondiv").animate([
      // key frames
      { transform: 'translateX(0px)' },
      { transform: 'translateX(-300px)' },
      { transform: 'translateX(300px)' },
      { transform: 'translateX(0px)' }
    ], {
      // sync options
      duration: 1.2,
      iterations: 2
  
    });
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
    const num1 = Math.floor(Math.random() * 1000);
    const num2 = Math.floor(Math.random() * 1000);
    const num3 = Math.floor(Math.random() * 1000);
    
    const operation = randomArithmetic();
    const question = `What is ${num1} ${operation} ${num2}?`;
    //  Holds the answer to the question. (duh)
    const answerBeforeRound =  eval(`${num1} ${operation} ${num2}`);
    const answerAfterRound = Math.round(answerBeforeRound * 100) / 100;
    answer = answerAfterRound;

    document.querySelector(".question").textContent = question;
    
  }

  