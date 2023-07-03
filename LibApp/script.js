// let bookData = [
//   {
//     id: 1,
//     name: "Physics",
//     author: "Xray",
//     pageCount: "120",
//     publishedDate: "12/10/22",
//     status: "published",
//   },
//   {
//     id: 2,
//     name: "Chemistry",
//     author: "Xray",
//     pageCount: "120",
//     publishedDate: "12/10/22",
//     status: "published",
//   },
//   {
//     id: 3,
//     name: "Math",
//     author: "Xray",
//     pageCount: "120",
//     publishedDate: "12/10/22",
//     status: "published",
//   },
// ];

const getBooks = [];

const add1 = document.getElementById("inp1");
const add2 = document.getElementById("inp2");
const add3 = document.getElementById("inp3");
const add4 = document.getElementById("inp4");
const add5 = document.getElementById("inp5");
const addBtn = document.getElementById("inp6");
const bookEntry = document.getElementById("bookEntry");

addBtn.onclick = function () {
  e.preventDefault();
  addBookEntry();
  bookEntry.reset("");
};

function addBookEntry() {
  getBooks.push({
    name: add1.value,
    author: add2.value,
    pageCount: add3.value,
    publishedDate: add4.value,
  });
}

let strData = JSON.stringify(getBooks);
localStorage.setItem("booksTable", strData);

console.log(getBooks);
