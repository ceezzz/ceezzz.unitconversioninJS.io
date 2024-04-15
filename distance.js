document.addEventListener("DOMContentLoaded", funtion()) {
  const inputDistance = document.getElementById("distance");
  const btnInToFT = document.getElementById("in_to_ft");
  const btnFTToIn = document.getElementById("ft_to_in");
  const distResult = document.getElementById("distresult");

  btnInToFT.addEventListener("click", funtion() {
    const inches = parseFloat(inputDistance.value);
    if (!isNAN(inches)) {
      const feet = inches / 12;
      distResult = feet;
    }
    else {
      distResult.textContent = "Invalid input!";
    }
  });
});
