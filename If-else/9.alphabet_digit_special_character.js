let input = 0;

if ((input >= "a" && input <= "z") || (input >= "A" && input <= "Z")) {
  console.log(`Input ${input} is alphabet`);
} else if (input >= 0 && input <= 9) {
  console.log(`Input ${input} is number`);
} else {
  console.log(`Input ${input} is special character`);
}
