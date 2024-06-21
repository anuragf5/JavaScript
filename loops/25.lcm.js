let hcf;

const number1 = 6;
const number2 = 8;

for (let i = 1; i <= number1 && i <= number2; i++) {
  if (number1 % i == 0 && number2 % i == 0) {
    hcf = i;
  }
}

let lcm = (number1 * number2) / hcf;

console.log(`LCM of ${number1} and ${number2} is ${lcm}.`);