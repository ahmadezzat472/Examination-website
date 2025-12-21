import { courses } from "./data.js";

let submitExam = document.querySelector("#submit-exam");

// timer display -------------------------------------------
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

// questions ----------------------------------------------------
const searchParams = window.location.search;
const params = new URLSearchParams(searchParams);
const courseName = params.get("course");
const courseLevel = params.get("level");
const courseData = courses[courseName][courseLevel];

let currentQuestion = courseData[0].id;
console.log(courseData);

let questionsNavigation = document.querySelector("#questions-navigation");
courseData.forEach((item) => {
  questionsNavigation.innerHTML += `<button
                class="current-question w-10 h-10 rounded-lg border flex items-center justify-center"
                title=${currentQuestion == item.id ? `current` : item.status}
              >
                ${item.id}
              </button>`;
});

let marked = [];
let answered = [];
