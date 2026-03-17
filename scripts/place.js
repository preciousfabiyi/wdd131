const temperature = 8;
const windSpeed = 12;

function calculateWindChill(temp, speed){
return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed,0.16) + 0.3965 * temp * Math.pow(speed,0.16);
}

let windChillDisplay;

if (temperature <= 10 && windSpeed > 4.8){
windChillDisplay = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
windChillDisplay = "N/A";
}

document.getElementById("windChill").textContent = windChillDisplay;


document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
"Last Modified: " + document.lastModified;