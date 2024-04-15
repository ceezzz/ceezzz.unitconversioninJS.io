document.addEventListener("DOMContentLoaded", function() {
    const inputTemperature = document.getElementById("temperature");
    const btnFToK = document.getElementById("f_to_k");
    const btnKToF = document.getElementById("k_to_f");
    const tempResult = document.getElementById("tempresult");

    btnFToK.addEventListener("click", function() {
        const fahrenheit = parseFloat(inputTemperature.value);
        if (!isNaN(fahrenheit)) {
            const kelvin = (fahrenheit - 32) * 5/9 + 273.15;
            tempResult.textContent = '${fahrenheit} F = ${kelvin.toFixed(2)} K';
        } else {
            tempResult.textContent = "Please enter a valid number for fahrenheit.";
        }
    });

    btnKToF.addEventListener("click", function() {
        const kelvin = parseFloat(inputTemperature.value);
        if (!isNaN(kelvin)) {
            const fehranheit = (kelvin - 273.15) * 9/5 + 32;
            tempResult.textContent = '${kelvin} K = ${fehranheit.toFixed(2)} F';
        } else {
            tempResult.textContent = "Please enter a valid number of kelvin.";
        }
    });
});
