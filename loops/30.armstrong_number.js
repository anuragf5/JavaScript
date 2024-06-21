let num = 153;
let sum = 0;
let temp = num;


while (num) {
  let rem = num % 10;
  sum = sum + (rem * rem * rem);
  num = parseInt(num / 10);
}

if (temp == sum) {
  console.log(`Number is armstrong ${temp}`);
} else {
  console.log(`Number is not armstrong ${temp}`);
}