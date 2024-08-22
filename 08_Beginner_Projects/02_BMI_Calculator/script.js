const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const resultGuide = document.querySelector("#resultGuide");

  // Validate height
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please enter a valid height.`;
    resultGuide.textContent = ""; // Clear the guide if invalid
    return;
  }

  // Validate weight
  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please enter a valid weight.`;
    resultGuide.textContent = ""; // Clear the guide if invalid
    return;
  }

  // Calculate BMI
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Show the BMI result
  results.innerHTML = `<span>Your BMI is ${bmi}</span>`;

  // Determine and show the BMI guide
  if (bmi < 18.6) {
    resultGuide.innerHTML = `<span>You are in Under Weight Category!</span>`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    resultGuide.innerHTML = `<span>You are in Normal Weight Category!</span>`;
  } else {
    resultGuide.innerHTML = `<span>You are in Over Weight Category!</span>`;
  }
});
