

document.getElementsByClassName("question")[0].innerHTML = question[0];
document.getElementsByClassName("questionnumber")[0].innerHTML = "Question 1";
document.getElementsByClassName("input1")[0].placeholder = "Answer";

function randomArithmetic() {
    const operations = ['+', '-', '*', '/'];
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
  }
  function questionGen() {
    const num1 = Math.random(1, 1000);
    const num2 = Math.random(1, 1000);
    const operation = randomArithmetic();
    const question = `What is ${num1} ${operation} ${num2}?`;
    const answer = eval(`${num1} ${operation} ${num2}`);
    console.log(question);
    console.log(`Answer: ${answer}`);
  }

  questionGen();