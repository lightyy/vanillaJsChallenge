// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const output = document.querySelector(".output");

const OPERATOR = {
  plus: function(a, b) {return a + b},
  minus: function(a, b) {return a - b},
  multiply: function(a, b) {return a * b},
  divison: function(a, b) {return a / b},
};

let RESULT = "",
  OP_TEXT = "",
  FLAG = true,
  CAN_CALC = false;

function calculate(btn) {
  const name = btn.className;

  if (name == "btn num") {
    const num = btn.textContent;
    if (FLAG) {
      output.textContent = num;
      FLAG = false;
    } else {
      output.textContent = output.textContent + btn.textContent;
    }
    if (output.textContent === "") FLAG = true;
  } else if (name == "btn operator") {
    equal();
    if (!CAN_CALC) {
      OP_TEXT = btn.textContent;
      RESULT = output.textContent + OP_TEXT;
      CAN_CALC = true;
    }
    FLAG = true;
  } else if (name == "btn cleaning") {
    RESULT = "";
    output.textContent = RESULT;
    FLAG = true;
    CAN_CALC = false;
  } else if (name == "btn equal") {
    equal();
  }
}

function equal() {
  if (CAN_CALC && !FLAG) {
    RESULT += output.textContent;
    const numArray = RESULT.split(OP_TEXT);
    const num1 = parseInt(numArray[0]);
    const num2 = parseInt(numArray[1]);
    switch (OP_TEXT) {
      case "+":
        RESULT = OPERATOR.plus(num1, num2);
        break;
      case "-":
        RESULT = OPERATOR.minus(num1, num2);
        break;
      case "*":
        RESULT = OPERATOR.multiply(num1, num2);
        break;
      case "/":
        RESULT = OPERATOR.divison(num1, num2);
        break;
    }
    FLAG = true;
    CAN_CALC = false;
    output.textContent = RESULT;
  }
}

function clickBtnHandler(e) {
  e.preventDefault();
  const target = e.target;
  if (target.tagName === "BUTTON") {
    calculate(target);
  }
}

function init() {
  addEventListener("click", clickBtnHandler);
}

init();
