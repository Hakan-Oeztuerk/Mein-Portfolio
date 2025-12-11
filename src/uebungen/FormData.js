const capitalInput = document.getElementById("capitalInput");
const setCapitalButton = document.getElementById("setCapitalButton");
const capitalOutput = document.getElementById("capitalOutput");


setCapitalButton.addEventListener("click", function () {
    
    const capital = parseFloat(capitalInput.value) || 0;
   
    capitalOutput.textContent = "Ihr Startguthaben beträgt: " + capital + " €";
});




const agbCheckbox = document.getElementById("agbCheckbox");
const checkAgbButton = document.getElementById("checkAgbButton");
const agbOutput = document.getElementById("agbOutput");


checkAgbButton.addEventListener("click", function () {
    if (agbCheckbox.checked) {
        agbOutput.textContent = "Vielen Dank! Sie haben die AGB akzeptiert.";
    } else {
        agbOutput.textContent = "Bitte stimmen Sie zuerst den AGB zu.";
    }
});
