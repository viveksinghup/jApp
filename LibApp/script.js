const add1 = document.getElementById("inp1");
const add2 = document.getElementById("inp2");
const add3 = document.getElementById("inp3");
const add4 = document.getElementById("inp4");
const add5 = document.getElementById("inp5");
const addBtn = document.getElementById("inp6");
const updateBtn = document.getElementById("inp7");
const bookEntry = document.getElementById("bookEntry");
const tableBody = document.getElementById("tableData");

addBtn.onclick = function (e) {
  e.preventDefault();
  addBookEntry();
  getLocalData();
  bookEntry.reset();
};

let bookData = [];
updateBtn.hidden = true;

if (localStorage.getItem("booksTable") != null) {
  bookData = JSON.parse(localStorage.getItem("booksTable"));
}

// Add new Entry

const addBookEntry = () => {
  bookData.push({
    name: add1.value,
    author: add2.value,
    pageCount: add3.value,
    publishedDate: add4.value,
    status: add5.value,
  });
  let strData = JSON.stringify(bookData);
  localStorage.setItem("booksTable", strData);
};

const validateName = () => {
  let val1 = add1.value;
  let val2 = add2.value;
  if (val1.length == "" && val2.length == "") {
    addBtn.disabled = true;
  }
  addBtn.disabled = false;
};

add1.addEventListener("keyUp", validateName);

//Data from local storage

const getLocalData = () => {
  tableBody.innerHTML = "";
  bookData.forEach((data, index) => {
    tableBody.innerHTML += `
    <tr index=${index}>
      <td>${index + 1}</td>
      <td>${data.name}</td>
      <td>${data.author}</td>
      <td>${data.pageCount}</td>
      <td>${data.publishedDate}</td>
      <td>${data.status}</td>
      <td>
        <span style="display: inline-block; margin-right: 20px"><i class="edit fa-solid fa-pen-to-square"></i></span>
        <span><i class="delete fa-sharp fa-solid fa-trash"></i></span>
      </td>
    </tr>`;
  });
};
getLocalData();

//Delete an row
let getAllDeleteBtn = document.querySelectorAll(".delete");

for (i = 0; i < getAllDeleteBtn.length; i++) {
  getAllDeleteBtn[i].onclick = function () {
    var tr = this.parentElement.parentElement.parentElement;
    var rowKey = tr.getAttribute("index");
    bookData.splice(rowKey, 1);
    tr.remove();
    let updatedDb = JSON.stringify(bookData);
    localStorage.setItem("booksTable", updatedDb);
  };
}

// // Edit Details

var getAllEditBtn = document.querySelectorAll(".edit");
for (i = 0; i < getAllEditBtn.length; i++) {
  getAllEditBtn[i].onclick = function () {
    addBtn.hidden = true;
    updateBtn.hidden = false;
    var tr = this.parentElement.parentElement.parentElement;
    var index = tr.getAttribute("index");
    var td = tr.getElementsByTagName("td");
    var name = td[1].innerHTML;
    var author = td[2].innerHTML;
    var pageCount = td[3].innerHTML;
    var publishedDate = td[4].innerHTML;
    var status = td[5].innerHTML;
    add1.value = name;
    add2.value = author;
    add3.value = pageCount;
    add4.value = publishedDate;
    add5.value = status;
    updateBtn.onclick = function (e) {
      e.preventDefault();
      bookData[index] = {
        name: add1.value,
        author: add2.value,
        pageCount: add3.value,
        publishedDate: add4.value,
        status: add5.value,
      };
      let strData = JSON.stringify(bookData);
      localStorage.setItem("booksTable", strData);
    };
  };
}