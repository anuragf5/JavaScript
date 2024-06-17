let side1 = 60,
  side2 = 60,
  side3 = 90;

if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
  console.log(`This is valid traingle`);
} else {
  console.log(`This is not valid traingle`);
}
