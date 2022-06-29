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

drawFace();

