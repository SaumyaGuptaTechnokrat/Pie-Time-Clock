import Card  from 'react-bootstrap/Card';
import './App.css';
function Stopwatche(){
    let timerInterval;
let startTime;
let running = false;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');
const updateTime=()=> {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    
    const hours = Math.floor(elapsedTime / (60 * 60 * 1000));
    const minutes = Math.floor((elapsedTime % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((elapsedTime % (60 * 1000)) / 1000);
    
    document.getElementById('display').innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

const startStop=()=> {
    if (running) {
        clearInterval(timerInterval);
        document.getElementById('startStopButton').innerHTML = 'Start';
    } else {
        startTime = new Date().getTime();
        timerInterval = setInterval(updateTime, 1000);
        document.getElementById('startStopButton').innerHTML = 'Stop';
    }
    running = !running;
}

const reset=()=> {
    clearInterval(timerInterval);
    display.textContent = '00:00:00';
    document.getElementById('startStopButton').textContent = 'Start';
    running = false;
}

return (
    <>
         <div class="stopwatch" id="stopwatch-container">
                    <div id="display">00:00:00</div>
                    <button id="startStopButton" onClick={startStop}>Start</button>
                    <button id="resetButton" onClick={reset} >Reset</button>
        </div>
    </>
);
}
export default Stopwatche;