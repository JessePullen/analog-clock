const clock = document.querySelector('.clock');
const clockFace = document.querySelector('.clock-face');
const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

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

function localTime() {

    //Gets time using date function and times by degrees for each tick, 
    let d = new Date();
    seconds = d.getSeconds() * 6;
    minutes = d.getMinutes() * 6;
    hours = d.getHours() * 30;

    secHand.style.transform = `rotate(${seconds}deg)`;
    minHand.style.transform = `rotate(${minutes}deg)`;
    hourHand.style.transform = `rotate(${hours}deg)`;
}

function runProgram() {
    drawFace();
    localTime();
}

runProgram();