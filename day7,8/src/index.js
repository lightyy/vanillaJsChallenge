const form = document.querySelector(".toDoForm");
const input = form.querySelector("input");
const pendingUl = document.querySelector(".pendingUl");
const finishedUl = document.querySelector(".finishedUl");

let pendingArray = [];
let finishedArray = [];

function saveTask() {
  localStorage.setItem("PENDING", JSON.stringify(pendingArray));
  localStorage.setItem("FINISHED", JSON.stringify(finishedArray));
}

function delTask(event) {
  const btn = event.target;
  const li = btn.parentNode;
  if (li.parentNode.className === "pendingUl") {
    pendingUl.removeChild(li);
    const cleanTask = pendingArray.filter((task) => {
      return task.id !== parseInt(li.id);
    });
    pendingArray = cleanTask;
  } else if (li.parentNode.className === "finishedUl") {
    finishedUl.removeChild(li);
    const cleanTask = finishedArray.filter((task) => {
      return task.id !== parseInt(li.id);
    });
    finishedArray = cleanTask;
  }
  saveTask();
}

function paintFinishiTask(text) {
  const newId = finishedArray.length + 1;
  const li = document.createElement("li");
  li.id = newId;
  const span = document.createElement("span");
  span.textContent = text;
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.addEventListener("click", delTask);
  const rewindBtn = document.createElement("button");
  rewindBtn.textContent = "⏪";
  rewindBtn.addEventListener("click", (e) => {
    paintTask(span.textContent);
    finishedUl.removeChild(li);
    const cleanTask = finishedArray.filter((task) => {
      return task.id !== parseInt(li.id);
    });
    finishedArray = cleanTask;
    saveTask();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(rewindBtn);
  finishedUl.appendChild(li);
  input.value = "";
  taskObj = {
    text: text,
    id: newId,
  };
  finishedArray.push(taskObj);
  saveTask();
}

function paintTask(text) {
  const newId = pendingArray.length + 1;
  const li = document.createElement("li");
  li.id = newId;
  const span = document.createElement("span");
  span.textContent = text;
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.addEventListener("click", delTask);
  const finishBtn = document.createElement("button");
  finishBtn.textContent = "✅";
  finishBtn.addEventListener("click", (e) => {
    paintFinishiTask(span.textContent);
    pendingUl.removeChild(li);
    const cleanTask = pendingArray.filter((task) => {
      return task.id !== parseInt(li.id);
    });
    pendingArray = cleanTask;
    saveTask();
  });
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finishBtn);
  pendingUl.appendChild(li);
  input.value = "";
  taskObj = {
    text: text,
    id: newId,
  };
  pendingArray.push(taskObj);
  saveTask();
}

function handleSubmit() {
  event.preventDefault();
  const currentValue = input.value;
  paintTask(currentValue);
  input.value = "";
}

function loadTask() {
  const loadedPending = localStorage.getItem("PENDING");
  const loadedFinish = localStorage.getItem("FINISHED");
  if (loadedPending !== null) {
    const parsedPending = JSON.parse(loadedPending);
    parsedPending.forEach((task) => {
      paintTask(task.text);
    });
  }
  if (loadedFinish !== null) {
    const parsedFinish = JSON.parse(loadedFinish);
    parsedFinish.forEach((task) => {
      paintFinishiTask(task.text);
    });
  }
}

function init() {
  loadTask();
  form.addEventListener("submit", handleSubmit);
}

init();
