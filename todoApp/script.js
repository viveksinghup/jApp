// console.log("hello");

const inputBox = document.getElementById("inpBox");
const textList = document.getElementById("textList");
const btn = document.getElementById("addBtn");
const errorMsg = document.getElementById("error");

function addTask() {
  if (inputBox.value == "") {
    errorMsg.innerHTML = "Please enter text";
  } else {
    let list = document.createElement("li");
    list.innerHTML = inputBox.value;
    textList.appendChild(list);
    let cross = document.createElement("span");
    cross.innerHTML = "+";
    list.appendChild(cross);
  }
  errorMsg = "";
  inputBox.value = "";
  saveData();
}

textList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("todoData", textList.innerHTML);
}

function showData() {
  textList.innerHTML = localStorage.getItem("todoData");
}
showData();
