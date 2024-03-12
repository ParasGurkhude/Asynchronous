
let initialTotalSeconds;
let totalSeconds;
let timer;

function start() {
    initialTotalSeconds = Number(document.getElementById("hours").value) * 3600 +
                          Number(document.getElementById("minutes").value) * 60 +
                          Number(document.getElementById("seconds").value);
    totalSeconds = initialTotalSeconds;

    if(totalSeconds <= 0){
        alert("Please enter a valid time");
        return;
    }

    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if(totalSeconds <= 0){
        clearInterval(timer);
        alert("Time is up. Resetting to previous value.");
        totalSeconds = initialTotalSeconds;
        updateDisplay();
        return;
    }

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    document.getElementById("hours").value = hours;
    document.getElementById("minutes").value = minutes;
    document.getElementById("seconds").value = seconds;

    totalSeconds--;
}

function pause() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
    totalSeconds = initialTotalSeconds;
    updateDisplay();
}

function updateDisplay() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    document.getElementById("hours").value = hours;
    document.getElementById("minutes").value = minutes;
    document.getElementById("seconds").value = seconds;
}

