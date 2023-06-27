let tableBody = document.querySelector("tbody");
const btn = document.getElementById("uname6");
btn.addEventListener("click", saveData);

function saveData(e) {
  const inputBox = document.getElementById("uname1");
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `<td style="width: 75%">${inputBox.value}</td><td><button class="btn btn-warning btn-sm"  onClick="editData(this)" style="margin-right: 5px">Edit</button><button class="btn btn-danger btn-sm" onClick="deleteData(this)">Delete</button></td>`;
  tableBody.appendChild(tableRow);
  storeData();
  inputBox.value = "";

  if (tableBody.children[0].className == "empty") {
    tableBody.children[0].remove();
  }
}

function deleteData(currElement) {
  currElement.closest("tr").remove();
  if (tableBody.children.length <= 0) {
    const noData = document.createElement("div");
    noData.classList.add("empty");
    noData.innerHTML = `<div class="text-center">No record Listed</div>`;
    tableBody.appendChild(noData);
  }
  storeData();
}

function editData(curElement) {
  curElement.textContent = "Add";
  const getEleValue = curElement.parentElement.previousElementSibling;
  let rowTd = document.createElement("td");
  let repalceInput = document.createElement("input");
  repalceInput.classList = "form-control inp";
  repalceInput.type = "text";
  rowTd.appendChild(repalceInput);
  repalceInput.value = getEleValue.textContent;
  getEleValue.parentNode.replaceChild(rowTd, getEleValue);
  storeData();
}

function storeData() {
  localStorage.setItem("tdCrud", tableBody.innerHTML);
}

function showData() {
  tableBody.innerHTML = localStorage.getItem("tdCrud");
}
showData();
