let stopwatchTime = 0;
let stopwatchInterval;
let stopwatchDisplay = document.getElementById('stopwatch');
let startBtn = document.getElementById('startBtn');

function startStopwatch() {
    startBtn.disabled = true;
    stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function updateStopwatch() {
    stopwatchTime++;
    displayStopwatch();
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    startBtn.disabled = false;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    displayStopwatch();
    startBtn.disabled = false;
}

function displayStopwatch() {
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime % 3600) / 60);
    const seconds = (stopwatchTime % 60);

    // Formatting the time to show only non-zero hours and minutes
    let timeString = '';
    if (hours > 0) {
        timeString += hours.toString().padStart(2, '0') + ':';
    }
    if (minutes > 0 || hours > 0) {
        timeString += minutes.toString().padStart(2, '0') + ':';
    }
    timeString += seconds.toString().padStart(2, '0');

    stopwatchDisplay.innerText = timeString;
}