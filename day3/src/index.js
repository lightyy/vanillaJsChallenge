// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>
/*
- 마우스가 위에있을 때 제목의 텍스트가 변경되어야합니다. 
- 마우스를 떠날 때 제목의 텍스트가 변경되어야합니다. 
- 창의 크기가 조정되면 제목이 변경되어야합니다. 
- 마우스 오른쪽 버튼을 클릭하면 제목도 변경됩니다. 
- 제목의 색상은 색상 배열의 색상에서 가져와야합니다. 
- .css 또는 .html 파일을 변경하지 마십시오. 
- 요구 사항이 충족되지 않으면 모든 함수 처리기는 "superEventHandler"안에 있어야합니다.

✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");
title.style.color = colors[0];

const superEventHandler = {
  mouseEnter: () => {
    title.textContent = "The mouse is here!";
    title.style.color = colors[1];
  },
  mouseLeave: () => {
    title.textContent = "The mouse is gone!";
    title.style.color = colors[2];
  },
  windowResize: () => {
    title.textContent = "You just resize!";
    title.style.color = colors[3];
  },
  windowContextmenu: () => {
    title.textContent = "That was a right click!";
    title.style.color = colors[4];

  },
};

title.addEventListener('mouseenter', superEventHandler.mouseEnter);
title.addEventListener('mouseleave', superEventHandler.mouseLeave);
window.addEventListener('resize', superEventHandler.windowResize);
window.addEventListener('contextmenu', superEventHandler.windowContextmenu);
