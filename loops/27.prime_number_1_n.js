let num = 5;
let is_prime = true;

if (num <= 1) {
  console.log(`${num} is prime number: ${is_prime}`);
}

for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    is_prime = false;
    break;
  }
}

if (is_prime) {
  console.log(`${num} is a prime number`);
} else {
  console.log(`${num} is a not prime number`);
}
