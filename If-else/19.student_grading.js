let physics = 90,
  chemistry = 70,
  biology = 90,
  mathematics = 70,
  computer = 90;

let total_marks = physics + chemistry + biology + mathematics + computer;

let percentage = (total_marks * 100) / 500;

console.log(`Percentage is ${percentage}`);

if (percentage >= 90) {
  console.log("Grade A");
} else if (percentage >= 80 && percentage < 90) {
  console.log("Grade B");
} else if (percentage >= 70 && percentage < 80) {
  console.log("Grade C");
} else if (percentage >= 60 && percentage < 70) {
  console.log("Grade D");
} else if (percentage >= 50 && percentage < 60) {
  console.log("Grade E");
} else if (percentage >= 40 && percentage < 50) {
  console.log("Grade F");
} else if (percentage < 40) {
  console.log("Grade G");
}
