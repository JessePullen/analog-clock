const clock = document.querySelector('.clock');
const clockFace = document.querySelector('.clock-face');
const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const bottomSection = document.querySelector('.bottom-section');

//Creates a div to group the city name to its time and inside creates the html elements of the clocks.
function drawCityClocks() {
    for (let i = 0; i < 4; i++) {
        const cityGrouping = document.createElement('div');
        bottomSection.appendChild(cityGrouping);

        const cityClock = document.createElement('div');
        cityClock.classList.add('city-clock');
        cityClock.classList.add('city-clock-' + i);
        cityGrouping.appendChild(cityClock);

        const cityHeading = document.createElement('div');
        cityHeading.classList.add('city-heading');
        cityHeading.classList.add('city-heading-' + i);
        cityGrouping.appendChild(cityHeading);

        const cityClockFace = document.createElement('div');
        cityClockFace.classList.add('city-clock-face');
        cityClock.appendChild(cityClockFace);

        drawFaceCity(cityClock);
    }
    //Gets dynamically created class names and assigns city name to each div
    document.querySelector('.city-heading-0').textContent = 'London';
    document.querySelector('.city-heading-1').textContent = 'Paris';
    document.querySelector('.city-heading-2').textContent = 'New York';
    document.querySelector('.city-heading-3').textContent = 'Tokyo';
}

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

//Instead applies a different class and a parameter for the clock number in the for loop.
function drawFaceCity(clockNumber) {
    degrees = 0;
    for (let i = 0; i < 6; i++) {
        const hourIndicator = document.createElement('div');
        hourIndicator.classList.add('city-hour-indicator');
        hourIndicator.style.transform = `rotate(${degrees}deg)`;
        clockNumber.appendChild(hourIndicator);
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
    drawCityClocks();
}

runProgram();