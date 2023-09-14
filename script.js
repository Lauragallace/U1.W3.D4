const createCell = function () {
  const myDiv = document.getElementById("Numbers");
  for (let i = 0; i < 77; i++) {
    const Cell = document.createElement("div");
    Cell.classList.add("container");
    Cell.innerText = i;
    myDiv.appendChild(Cell);
  }
};
createCell();
const selectNumber = function (e) {
  e.preventDefault();
  const arrayNumber = [];
  for (let i = 0; i < 1; i++) {
    random = Math.floor(Math.random() * 76 + 1);
    arrayNumber.push(random);
  }
  console.log(arrayNumber);
  if (arrayNumber === Numbers) {
  }
};
