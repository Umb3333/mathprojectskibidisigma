// Emanuel Ferris wrote this code :3

const input = document.querySelector(".input1");

function randomArithmetic() {
  // this function randomly selects an operation from the array.
    const operations = ["+", "-", "*", "/"];
    //                  Rounds down ||  Random number || The amount of operations listed.
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
  }

  function addMoreToProblem(){

  }

  function questionGen() {
    const num1 = Math.floor(Math.random() * 1000);
    const num2 = Math.floor(Math.random() * 1000);
    const num3 = Math.floor(Math.random() * 1000);
    
    const operation = randomArithmetic();
    const question = `What is ${num1} ${operation} ${num2}?`;
    const answer = eval(`${num1} ${operation} ${num2}`);

    document.querySelector(".question").textContent = question;
    
  }

  