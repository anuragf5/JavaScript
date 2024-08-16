// script.js
document.addEventListener("DOMContentLoaded", () => {
  let passwordInput = document.getElementById("password");
  let strengthText = document.getElementById("strength-text");
  let strengthMeter = document.getElementById("strength-meter");

  function checkPasswordStrength(password) {
    let lengthCriteria = /(?=.{8,})/; // Minimum length 8
    let uppercaseCriteria = /(?=.*[A-Z])/; // At least one uppercase letter
    let lowercaseCriteria = /(?=.*[a-z])/; // At least one lowercase letter
    let digitCriteria = /(?=.*\d)/; // At least one digit
    let specialCharCriteria = /(?=.*[@$!%*?&])/; // At least one special character

    let strength = 0;

    if (lengthCriteria.test(password)) strength++;
    if (uppercaseCriteria.test(password)) strength++;
    if (lowercaseCriteria.test(password)) strength++;
    if (digitCriteria.test(password)) strength++;
    if (specialCharCriteria.test(password)) strength++;

    return strength;
  }

  function getStrengthMessage(strength) {
    switch (strength) {
      case 0:
      case 1:
        return "Very Weak";
      case 2:
        return "Weak";
      case 3:
        return "Moderate";
      case 4:
        return "Strong";
      case 5:
        return "Very Strong";
      default:
        return "Unknown";
    }
  }

  function updateStrengthMeter(strength) {
    let strengthMessage = getStrengthMessage(strength);
    strengthText.textContent = strengthMessage;

    strengthMeter.className = "strength-text"; // Reset classes
    switch (strengthMessage) {
      case "Very Weak":
        strengthMeter.classList.add("very-weak");
        break;
      case "Weak":
        strengthMeter.classList.add("weak");
        break;
      case "Moderate":
        strengthMeter.classList.add("moderate");
        break;
      case "Strong":
        strengthMeter.classList.add("strong");
        break;
      case "Very Strong":
        strengthMeter.classList.add("very-strong");
        break;
    }
  }

  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);
    updateStrengthMeter(strength);
  });
});
