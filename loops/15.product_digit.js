let number = 12345;
let product = 1;

while (number > 0) {
  // Get the last digit of the number
  let digit = number % 10;

  // Multiply the digit to the product
  product *= digit;

  // Remove the last digit from the number
  number = Math.floor(number / 10);
}

console.log(product);