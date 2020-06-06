// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const select = document.querySelector("select");

function reflesh() {
  if (localStorage.getItem("country")) {
    if (localStorage.getItem("country") === select.options[1].value) {
      select.selectedIndex = 1;
    } else if (localStorage.getItem("country") === select.options[2].value) {
      select.selectedIndex = 2;
    } else if (localStorage.getItem("country") === select.options[3].value) {
      select.selectedIndex = 3;
    } else if (localStorage.getItem("country") === select.options[4].value) {
      select.selectedIndex = 4;
    } else {
      select.selectedIndex = 0;
    }
  }
}

function changeHandler(e) {
  localStorage.setItem("country", e.target.value);
}

(() => {
  reflesh();
  select.addEventListener("change", changeHandler);
})();

// Save the country selection to localStorage.
// Load the saved selection on refresh.
