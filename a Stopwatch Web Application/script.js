let startTime, elapsedTime = 0, timerInterval;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(3, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}.${formattedMS}`;
}

function print(txt) {
    document.getElementById("time-display").innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
}

function stop() {
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00.000");
    elapsedTime = 0;
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    let lapTime = document.createElement("div");
    lapTime.innerText = timeToString(elapsedTime);
    document.getElementById("laps").appendChild(lapTime);
}

let startStopButton = document.getElementById("start-stop-btn");
let resetButton = document.getElementById("reset-btn");
let lapButton = document.getElementById("lap-btn");

startStopButton.addEventListener("click", function() {
    if (startStopButton.innerHTML === "Start") {
        start();
        startStopButton.innerHTML = "Pause";
    } else {
        stop();
        startStopButton.innerHTML = "Start";
    }
});

resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
