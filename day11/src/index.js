// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const calculator = document.querySelector(".calculator"),
  btn = calculator.querySelectorAll("button"),
  output = calculator.querySelector("output");

function calculate(num) {
  if (typeof parseInt(num) === "number" && parseInt(num)) {
    output.value += parseInt(num);
  } else {
    if (num === "C") {
      output.value = "";
    } else if (num === "+") {
      output.value;
    }
  }
}

function clickBtnHandler(e) {
  e.preventDefault();
  //   console.dir(output);
  if (e.target.tagName === "BUTTON") {
    calculate(e.target.textContent);
  }
}

function init() {
  addEventListener("click", clickBtnHandler);
}

init();
