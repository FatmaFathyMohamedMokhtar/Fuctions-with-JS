// TASK 2 //
  function calculate(firstNum,secondNum,operation)  {
    if (secondNum === undefined) {
      console.log(" Second Number  Not Found.");
      return;
    }
  
        if (operation =="add" ||operation == null ){
             result=(firstNum+secondNum);
             console.log(` ${result } `);
            } else if(operation ==="subtract" ){
            result=(firstNum-secondNum);
            console.log(` ${result }`);
          } else if(operation ==="subtract" ){
            result=(firstNum+secondNum);
            console.log(` ${result }`);
          } else if(operation ==="multiply" ){
          result=(firstNum * secondNum);
          console.log(` ${result }`);}
          
            }
  
  calculate(20);
  calculate(20,30); 
  calculate(20,30,"add");
  calculate(20,30,"subtract");
  calculate(20,30,"multiply");