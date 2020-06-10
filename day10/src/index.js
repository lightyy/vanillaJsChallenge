// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const form = document.querySelector("form"),
  range = form.querySelector(".range"),
  textInput = form.querySelector(".textInput"),
  playBtn = form.querySelector(".playBtn"),
  curentText = document.querySelector(".currentText"),
  resultText = document.querySelector(".resultText");

function paintResult() {
  const randomNum = createRandomNum(range.value);
  const inputNum = textInput.value;
  console.log(inputNum);
  if (inputNum <= range.value && inputNum !== "") {
    curentText.textContent = `You chose : ${inputNum}, the machine chose : ${randomNum}.`;
    if (Number(inputNum) === randomNum) {
      resultText.textContent = `You Win 🏆`;
    } else {
      resultText.textContent = `You Lose 😥`;
    }
  } else {
    curentText.textContent = `Input reasonable number 😅`;
    resultText.textContent = "";
  }
}

function createRandomNum(number) {
  return Math.round(Math.random() * number);
}

function submitHandler(event) {
  event.preventDefault();
  paintResult();
}

function init() {
  playBtn.addEventListener("click", submitHandler);
  form.addEventListener("submit", submitHandler);
}
init();
