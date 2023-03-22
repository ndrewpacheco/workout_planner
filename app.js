const startBtn = document.getElementById("startBtn");



// repeat with the interval of 2 seconds
const workoutLength = 7000;





// after 5 seconds stop


function startWorkout(e) {
  let secondsLeft = (workoutLength - 1000) / 1000;
  startBtn.disabled = true;
  let timerId = setInterval(() => {
    if (secondsLeft < 5) console.log(`${secondsLeft} seconds left`);
    secondsLeft -= 1;
  }, 1000);

  setTimeout(() => {
    clearInterval(timerId);
    console.log("stop");
    // reset

    startBtn.disabled = false;
  }, workoutLength);

}

startBtn.addEventListener('click', startWorkout);

/** instead of:
let timerId = setInterval(() => console.log('tick'), 2000);
*/

// let timerId = setTimeout(function tick() {
//   console.log("tick");
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);
