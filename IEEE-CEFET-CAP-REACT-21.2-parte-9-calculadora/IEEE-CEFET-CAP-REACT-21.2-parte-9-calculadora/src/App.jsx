import { useEffect, useState } from "react";
import GlobalStyles from "./globalStyles"
import { Calculator } from "./styles"

function App() {
  const [n1, setN1] = useState("")
  const [n2, setN2] = useState("")
  const [operator, setOperator] = useState("")
  const [res, setRes] = useState("")

  function addNumber(number) {
    if (res !== "" && operator === "") {
      erase();
    }

    if (operator === "") {
      document.getElementById("display").innerHTML += number;
      setN1(n1 + number);
    } else if (operator !== "" && n2 === "") {
      document.getElementById("display").innerHTML = "";
      document.getElementById("display").innerHTML = number;
      setN2(number);
    } else {
      document.getElementById("display").innerHTML += number;
      setN2(n2 + number);
    }
  }

  function erase() {
    setN1("");
    setN2("");
    setOperator("");
    setRes("");

    document.getElementById("display").innerHTML = "";
  }

  function addOperator(operatorSelected) {
    if (n1 !== "") {
      setOperator(operatorSelected)
    }
  }

  function calculate(event) {
    event.preventDefault();

    if (n1 !== "" && n2 !== "" && operator !== "") {
      switch (operator) {
        case "+":
          setRes(parseInt(n1) + parseInt(n2));
          break;
          
          case "-":
          setRes(parseInt(n1) - parseInt(n2));
          break;
          
          case "*":
          setRes(parseInt(n1) * parseInt(n2));
          break;
          
          case "/":
          setRes(parseInt(n1) / parseInt(n2));
          break;

          case "^":
            setRes(Math.pow(parseInt(n1), parseInt(n2)))
            break;
        default:
          break;
      }   
    } else if(n1 !== "" && operator === "√"){
      setRes(Math.sqrt(n1))
    }
  }
  
  useEffect(() => {
    if (res !== "") {
      document.getElementById("display").innerHTML = "" + res.toFixed(2);
      setN1("" + res);
      setN2("");
      setOperator("");
    }
  }, [res]);

  return (
    <Calculator>
      <GlobalStyles/>
      <form action="" onSubmit={calculate}>
        <span id="display"></span>

        <section id="buttonsGrid">
          <article id="numbersGrid">
            <button type="button" className="operatorButton" onClick={() => erase()}> C </button>
            <button type="button" className="operatorButton" onClick={()=> addOperator('^')}> ^ </button>
            <button type="button" className="operatorButton" onClick={()=> addOperator('√')}> √ </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('7')}> 7 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('8')}> 8 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('9')}> 9 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('4')}> 4 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('5')}> 5 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('6')}> 6 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('1')}> 1 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('2')}> 2 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('3')}> 3 </button>
            <button type="button" className="numbersButtonOff">  </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('0')}> 0 </button>
            <button type="button" className="numbersButtonOff">  </button>
          </article>
          
          <article id="operatorsGrid">
            <button type="button" className="operatorButton" onClick={() => addOperator('/')}> ÷ </button>
            <button type="button" className="operatorButton" onClick={() => addOperator('*')}> x </button>
            <button type="button" className="operatorButton" onClick={() => addOperator('-')}> - </button>
            <button type="button" className="operatorButton" onClick={() => addOperator('+')}> + </button>
            <button type="submit" className="submitButton"> = </button>
          </article>
        </section>
      </form>
    </Calculator>
  )
}

export default App
