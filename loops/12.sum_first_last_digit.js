let num = 12334;

let convert = num.toString();

console.log(`First digit is ${convert[0]}`);

let last_digit = convert.length - 1;

console.log(`Last digit is ${last_digit}`);

console.log(
  `Addition of first and last digit is ${
    parseInt(last_digit) + parseInt(convert[0])
  }`
);
