// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body");
function resizeHandler() {
  const currentWidth = window.innerWidth;
  if (currentWidth > 700 && currentWidth < 1200) {
    body.style.backgroundColor = "#904FAD";
  } else if (currentWidth >= 1200) {
    body.style.backgroundColor = "#EEBC12";
  } else {
    body.style.backgroundColor = "#2E8CD5";
  }
}
window.addEventListener("resize", resizeHandler);
resizeHandler();
