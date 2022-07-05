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

        const centre = document.createElement('div');
        centre.classList.add('city-centre');
        cityClock.appendChild(centre);

        const citySecHand = document.createElement('div');
        citySecHand.classList.add('city-sec-hand');
        citySecHand.classList.add('city-sec-hand-' + i);
        cityClock.appendChild(citySecHand);

        const cityMinHand = document.createElement('div');
        cityMinHand.classList.add('city-min-hand');
        cityMinHand.classList.add('city-min-hand-' + i);
        cityClock.appendChild(cityMinHand);

        const cityHourHand = document.createElement('div');
        cityHourHand.classList.add('city-hour-hand');
        cityHourHand.classList.add('city-hour-hand-' + i);
        cityClock.appendChild(cityHourHand);

        drawFaceCity(cityClock);
    }
    //Gets dynamically created class names and assigns city name to each div
    document.querySelector('.city-heading-0').textContent = 'London';
    document.querySelector('.city-heading-1').textContent = 'Paris';
    document.querySelector('.city-heading-2').textContent = 'New York';
    document.querySelector('.city-heading-3').textContent = 'Tokyo';

    setInterval(cityClockTime, 1000);
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
function localTime() {
    //Multiply the given time to equally increment the 360 degrees of the clock face. 
    let date = new Date();
    seconds = date.getSeconds() * 6;
    minutes = date.getMinutes() * 6;
    hours = date.getHours() * 30;

    secHand.style.transform = `rotate(${seconds}deg)`;
    minHand.style.transform = `rotate(${minutes}deg)`;
    hourHand.style.transform = `rotate(${hours}deg)`;
}

function runProgram() {
    drawFace();
    setInterval(localTime, 1000);
    drawCityClocks();
}

runProgram();

//Gets time as string from timezone and changes the css of the hands.
function cityClockTime() {
    let date = new Date();
    let parisDate = date.toLocaleTimeString('en-US', {timeZone: 'America/New_York'});

    newDate = parisDate.split(':');

    seconds = date.getSeconds() * 6;
    minutes = newDate[1] * 6;
    hours = newDate[0] * 30;

    document.querySelector('.city-sec-hand').style.transform = `rotate(${seconds}deg)`;
    document.querySelector('.city-min-hand').style.transform = `rotate(${minutes}deg)`;
    document.querySelector('.city-hour-hand').style.transform = `rotate(${hours}deg)`;
}