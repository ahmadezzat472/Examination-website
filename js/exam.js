let submitExam = document.querySelector("#submit-exam");

// handle timer display -------------------------------------------
let timerDisplay = document.querySelector("#timer-display");
let timeoutOverlay = document.querySelector(".timeout-overlay");
let hourglassIcon = document.querySelector(".fa-hourglass-end");

let totalSeconds = 30 * 60; // 30 minutes

function timeDown() {
  const minutes = Math.floor(totalSeconds / 60); // get only the minutes
  const seconds = totalSeconds % 60; // get the remaining seconds from the minutes

  timerDisplay.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  if (totalSeconds <= 0) {
    clearInterval(timer);

    document.body.classList.add("overflow-hidden");
    timeoutOverlay.classList.replace("hidden", "flex");

    const toggleIcons = setInterval(() => {
      hourglassIcon.classList.toggle("fa-hourglass-start");
      hourglassIcon.classList.toggle("fa-hourglass-end");
    }, 500);

    setTimeout(() => {
      clearInterval(toggleIcons);
      location.replace("/pages/timeout.html");
    }, 3000);
  }

  totalSeconds--;
}

const timer = setInterval(timeDown, 1000);
timeDown();
