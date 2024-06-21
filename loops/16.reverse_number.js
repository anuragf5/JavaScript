let num = 123,
  rem,reverse;

while (num) {
  rem = num % 10;
  reverse = reverse * 10 + rem;
  num = num / 10;
}
console.log(reverse);
