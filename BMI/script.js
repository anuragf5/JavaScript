let weight = document.getElementById("weight");
let height = document.getElementById("height");
let button = document.getElementById("submit");
let result = document.getElementById("result");

weight.focus();

button.onclick = function (e) {
  weight.focus();

  let w = weight.value;

  let h = height.value;

  if (w == "" || h == "" || isNaN(w) || isNaN(h)) {
    alert("Please fill your weight and height");
    return;
  }

  const bmi = w / ((h * h)/10000);
  let bmiCategory = "";

  if (bmi < 18.5) {
    bmiCategory = "Underweight";
    result.style.color = "black";
  } else if (bmi < 24.9) {
    bmiCategory = "Normal weight";
    result.style.color = "green";
  } else if (bmi < 29.9) {
    bmiCategory = "Overweight";
    result.style.color = "yellow";
  } else {
    bmiCategory = "Obesity";
    result.style.color = "red";
  }

  result.textContent = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory})`;

  e.preventDefault();

  console.log(e);
};
