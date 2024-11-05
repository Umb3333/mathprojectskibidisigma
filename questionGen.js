import math from "mathjs";

document.getElementsByClassName("question")[0].innerHTML = questions[0];
document.getElementsByClassName("questionnumber")[0].innerHTML = "Question 1";
document.getElementsByClassName("input1")[0].placeholder = "Answer";

function randomArithmetic() {
    const operations = ['+', '-', '*', '/'];
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
  }
  function questionGen() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operation = randomArithmetic();
    const question = `What is ${num1} ${operation} ${num2}?`;
    const answer = eval(`${num1} ${operation} ${num2}`);
    console.log(question);
    console.log(`Answer: ${answer}`);
  }

  questionGen();