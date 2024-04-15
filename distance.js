document.addEventListener("DOMContentLoaded", function() {
    const inputDistance = document.getElementById("distance");
    const btnInToFT = document.getElementById("in_to_ft");
    const btnFtToIn = document.getElementById("ft_to_in");
    const distResult = document.getElementById("distresult");

    btnInToFT.addEventListener("click", function() {
        const inches = parseFloat(inputDistance.value);
        if (!isNaN(inches)) {
            const feet = inches / 12;
            distResult.textContent = `${inches} inches = ${feet.toFixed(2)} feet`;
        } else {
            distResult.textContent = "Please enter a valid number of inches.";
        }
    });

    btnFtToIn.addEventListener("click", function() {
        const feet = parseFloat(inputDistance.value);
        if (!isNaN(feet)) {
            const inches = feet * 12;
            distResult.textContent = `${feet} feet = ${inches.toFixed(2)} inches`;
        } else {
            distResult.textContent = "Please enter a valid number of feet.";
        }
    });
});
