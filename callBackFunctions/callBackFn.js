function addition(num1, num2, sum) {
  return sum(num1, num2);
}

function sum(x, y) {
  return x + y;
}
let result = addition(5, 100, sum);
document.getElementById(
  "sum"
).innerHTML = `The result of the addition is ${result}`;
