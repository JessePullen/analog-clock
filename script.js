const clock = document.querySelector('.clock');
const clockFace = document.querySelector('.clock-face');
const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

//Draws each hour indicator for the clock face by changing degrees every step of the loop.
function drawFace() {
    degrees = 0;
    for (let i = 0; i < 6; i++) {
        const hourIndicator = document.createElement('div');
        hourIndicator.classList.add('hour-indicator');
        hourIndicator.style.transform = `rotate(${degrees}deg)`;
        clock.appendChild(hourIndicator);
        degrees += 30;
    }
}

//Gets time using date function and changes css of the hands accordingly.
setInterval(function localTime() {
    //Multiply the given time to equally increment the 360 degrees of the clock face. 
    let d = new Date();
    seconds = d.getSeconds() * 6;
    minutes = d.getMinutes() * 6;
    hours = d.getHours() * 30;

    secHand.style.transform = `rotate(${seconds}deg)`;
    minHand.style.transform = `rotate(${minutes}deg)`;
    hourHand.style.transform = `rotate(${hours}deg)`;
}, 1000);

function runProgram() {
    drawFace();
    localTime();
}

runProgram();