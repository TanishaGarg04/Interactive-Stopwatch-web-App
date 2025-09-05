let timer;          
let seconds = 0;     
let running = false;  
let lapCounter = 1;   
const timeDisplay = document.getElementById("time");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapsContainer = document.getElementById("laps");
function formatTime(sec) {
  let hrs = Math.floor(sec / 3600);
  let mins = Math.floor((sec % 3600) / 60);
  let secs = sec % 60;

  return (
    (hrs < 10 ? "0" : "") + hrs + ":" +
    (mins < 10 ? "0" : "") + mins + ":" +
    (secs < 10 ? "0" : "") + secs
  );
}

function updateTime() {
  seconds++;
  timeDisplay.innerText = formatTime(seconds);
}


function startStop() {
  if (!running) {
    timer = setInterval(updateTime, 1000); 
    running = true;
    startStopBtn.innerText = "Pause";
  } else {
    clearInterval(timer);
    running = false;
    startStopBtn.innerText = "Start";
  }
}
function reset() {
  clearInterval(timer);
  running = false;
  seconds = 0;
  timeDisplay.innerText = "00:00:00";
  startStopBtn.innerText = "Start";
  lapsContainer.innerHTML = "";
  lapCounter = 1;
}
function lap() {
  if (running) {
    let lapDiv = document.createElement("div");
    lapDiv.classList.add("lap");
    lapDiv.innerText = "Lap " + lapCounter++ + " - " + formatTime(seconds);
    lapsContainer.appendChild(lapDiv);
  }
}
startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);
