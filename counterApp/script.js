const number = document.getElementById('number');
const reset = document.getElementById('reset');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
console.log(number);


plus.addEventListener("click", () => {
  number.innerHTML++;
  changeColor();
})

minus.addEventListener("click", () => {
  number.innerHTML--;
  changeColor();
})

reset.addEventListener("click", () => {
  number.innerHTML = 0;
  changeColor();
})

function changeColor (){
  if(number.innerHTML > 0) {
    number.style.backgroundColor = 'rgb(75, 207, 75)';
    number.style.color = '#fff';
  }
  else if (number.innerHTML < 0){
    number.style.backgroundColor = 'rgb(246, 50, 50)';
    number.style.color = '#fff';
  }
  else{
    number.style.color ="black"
    number.style.backgroundColor = '#fff';
  }
}