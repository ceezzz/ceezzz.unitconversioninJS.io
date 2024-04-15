document.addEventListener("DOMContentLoaded", function() {
    const inputMass = document.getElementById("mass");
    const btnLbsToKgs = document.getElementById("lbs_to_kgs");
    const btnKgsToLbs = document.getElementById("kgs_to_lbs");
    const massResult = document.getElementById("massresult");

    btnLbsToKgs.addEventListener("click", function() {
        const lbs = parseFloat(inputMass.value);
        if (!isNaN(lbs)) {
            const kgs = lbs / 2.2;
            massResult.textContent = `${lbs} lbs = ${kgs.toFixed(2)} kgs`;
        } else {
            massResult.textContent = "Please enter a valid number of lbs.";
        }
    });

    btnKgsToLbs.addEventListener("click", function() {
        const kgs = parseFloat(inputMass.value);
        if (!isNaN(feet)) {
            const lbs = kgs * 2.2;
            massResult.textContent = `${kgs} kgs = ${lbs.toFixed(2)} lbs`;
        } else {
            massResult.textContent = "Please enter a valid number of kgs.";
        }
    });
});
