const unitToggle = document.getElementById("unitToggle");
const metricInputs = document.getElementById("metricInputs");
const imperialInputs = document.getElementById("imperialInputs");

unitToggle.addEventListener("change",()=>{
    metricInputs.classList.toggle("hidden",unitToggle.checked);
    imperialInputs.classList.toggle("hidden",!unitToggle.checked);
});

document.getElementById("calcBtn").addEventListener("click",()=>{
    let heightM, weightKg;
    
    if(unitToggle.checked){
        const ft = parseFloat(document.getElementById("heightFt").value) || 0;
        const inch = parseFloat(document.getElementById("heightIn").value) || 0;
        const lbs = parseFloat(document.getElementById("weightLbs").value) || 0;
        heightM = (ft*12+inch)*0.0254;
        weightKg = lbs * 0.453592;
    }
    else{
        const cm=parseFloat(document.getElementById("heightCm").value)|| 0;
        weightKg= parseFloat(document.getElementById("weightKg").value)|| 0;
        heightM = cm/100;
    }
    
    if(heightM <= 0 || weightKg <= 0){
        document.getElementById("bmiValue").textContent = "--"
        document.getElementById("bmiCategory").textContent = "Enter Valid Numbers";
        return;
    }

    const bmi = weightKg / (heightM * heightM);
    document.getElementById("bmiValue").textContent = bmi.toFixed(1);

    let category;
    if(bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";


    document.getElementById("bmiCategory").textContent = category;

    const percent = Math.min(100, Math.max(0,(bmi - 15)/ (40-15))*100);
    document.getElementById("marker").style.left = percent + "%";
});

document.getElementById("calcBtn").click();