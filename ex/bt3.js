let arr = [];

function add() {
  event.preventDefault(); // Prevent the form from submitting
  let addNum = parseFloat(document.getElementById("in").value);
  if (!isNaN(addNum)) {
    arr = [...arr, addNum];
    console.log(addNum);
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("arr").innerText = "Array: " + arr.join(", ");
  let sum = arr.reduce((temp, a) => temp + a, 0);
  document.getElementById("sum").innerText = "Sum: " + sum;
  document.getElementById("in").value = "";
}
