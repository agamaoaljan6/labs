// DOM elements

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

const showAmPm = true;


// Show Time
function showTime () {
    // let today = new Date(2019,19,06,7,33,30), for testing purposes
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
        sec
        )} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add zeroes
function addZero (n) {
    return (parseInt(n, 10) < 10 ? '0': '') + n ;
}

// Set background and greeting
function setBgGreet() {
    // let today = new Date(2019,19,06,10,33,30), for testing purposes
    let today = new Date(),
        hour = today.getHours();

    switch (true) {
        case hour < 12:
            // Morning;
            document.body.style.backgroundImage = "url(../img/jonas-weckschmied-117633-unsplash.jpg)";
            greeting.textContent = "Good Morning";
            document.body.style.color = "white";

        break;
        case hour < 18:
            // Afternoon;
            document.body.style.backgroundImage = "url(../img/claudio-testa-150192-unsplash.jpg)";
            greeting.textContent = "Good Afternoon";
            document.body.style.color = "white";
        break;
        default:
            // Evening;
            document.body.style.backgroundImage = "url(../img/joran-quinten-786485-unsplash.jpg)";
            greeting.textContent = "Good Evening";
            document.body.style.color = "white";
        break;
    }


}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) { // 13 is the ENTER key unique identifier
        localStorage.setItem('name', e.target.innerText);
        name.blur();
        }
    } else { 
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) { // 13 is the ENTER key unique identifier
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
        }
    } else { 
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}


name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);

focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus);

// Run 
showTime();
setBgGreet();
getName();
getFocus();



























