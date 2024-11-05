// Emanuel Ferris wrote this code :3

const input = document.querySelector(".input1");
const submit = document.querySelector(".submit");
const questionnumber = document.querySelector(".questionnumber");

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
    const answer = eval(`${num1} ${operation} ${num2}`);

    document.querySelector(".question").textContent = question;
    
  }

  