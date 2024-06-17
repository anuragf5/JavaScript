let num1 = 10,
  num2 = 50,
  num3 = 40;

if (num1 > num2 && num1 > num3) {
  console.log(`Number one ${num1} is maximum`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`Number two ${num2} is maximum`);
} else if (num3 > num1 && num3 > num2) {
  console.log(`Number three ${num3} is maximum`);
} else {
  console.log(
    `Number one ${num1}, number two ${num2} and number three ${num3} are equals`
  );
}
