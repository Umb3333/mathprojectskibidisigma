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
    if (newQuestionNumber > 10) {
      window.location.replace("zionboss.html");
    }
    questionGen(); }
  else {
    submit.classList.add('wrong-answer');
  setTimeout(() => {
    submit.classList.remove('wrong-answer');
  }, 1500);
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
    const answerAfterRound = answerBeforeRound.toFixed(1);
    // for debugging/testing
    console.log(answerAfterRound);
    answer = answerAfterRound;

    document.querySelector(".question").textContent = question;
    
  }

  