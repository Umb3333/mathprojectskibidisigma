

function randomArithmetic() {
    const operations = ["+", "-", "*", "/"];
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
  }
  function questionGen() {
    const num1 = Math.floor(Math.random() * 1000);
    const num2 = Math.floor(Math.random() * 1000);
    const operation = randomArithmetic();
    const question = `What is ${num1} ${operation} ${num2}?`;
    const answer = eval(`${num1} ${operation} ${num2}`);

    document.querySelector(".question").textContent = question;
    
  }

  