let startTime = 0;
let updatedTime = 0;
let difference = 0;
let tInterval;
let running = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');

startStopBtn.addEventListener('click', () => {
    if (!running) {
        startTime = Date.now() - difference;
        tInterval = setInterval(updateTime, 1000);
        startStopBtn.textContent = 'Stop';
        running = true;
    } else {
        clearInterval(tInterval);
        difference = Date.now() - startTime;
        startStopBtn.textContent = 'Start';
        running = false;
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(tInterval);
    running = false;
    startStopBtn.textContent = 'Start';
    display.textContent = '00:00:00';
    difference = 0;
});

function updateTime() {
    updatedTime = Date.now() - startTime;
    const seconds = Math.floor((updatedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((updatedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((updatedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
