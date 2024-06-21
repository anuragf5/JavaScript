let number = 12345;
let sum = 0;

while (number > 0) {
  // Get the last digit of the number
  let digit = number % 10;

  // Add the digit to the sum
  sum += digit;

  // Remove the last digit from the number
  number = Math.floor(number / 10);
}

console.log(sum);