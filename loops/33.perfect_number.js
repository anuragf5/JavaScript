let temp = 0,
  number = 28;

for (let j = 1; j <= 50; j++) {
  for (let i = 1; i <= j / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }
}

if (temp === number && temp !== 0) {
  console.log(`${temp} is a perfect number`);
} else {
  console.log(`${temp} is not a perfect number`);
}
