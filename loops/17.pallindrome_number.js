let num = 12321,
  temp,
  rem,
  sum;

temp = num;

while (num) {
  rem = num % 10;
  sum = sum * 10 + rem;
  num = num / 10;
}

if (temp == sum) {
  console.log(`Number is pallindrome`);
} else {
  console.log(`Number is not pallindrome`);
}
