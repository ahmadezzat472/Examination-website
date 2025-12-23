import { courses } from "./data.js";

//** ---------------------------------------------------- select element ----------------------------------------------------

let submitExam = document.querySelector("#submit-exam");

let questionsNavigation = document.querySelector("#questions-navigation");
let questionsMarked = document.querySelector("#questions-marked");
let prevBtn = document.querySelector("#prev-btn");
let nextBtn = document.querySelector("#next-btn");

let questionNumber = document.querySelector("#question-number");
let questionText = document.querySelector("#question-text");
let questionCode = document.querySelector("#question-code");

//** ---------------------------------------------------- timer display ----------------------------------------------------

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

//** ---------------------------------------------------- questions ----------------------------------------------------

let currentQuestionIndex = 0;

//** fetch course data */
const searchParams = window.location.search;
const params = new URLSearchParams(searchParams);
const courseName = params.get("course");
const courseLevel = params.get("level");
const courseData = courses[courseName][courseLevel];
const questionsLength = courseData.length;

console.log(courseData);

//** handle navigation questions and prev & next btn */
function displayNavigationQuestion() {
  let currentQuestion = courseData[currentQuestionIndex].id;
  courseData.forEach((item) => {
    console.log(item.id);

    questionsNavigation.innerHTML += `
      <button
        class="question-navigation-btn w-10 h-10 rounded-lg border flex items-center justify-center"
        title=${currentQuestion == item.id ? `current` : item.status}
        id="${item.id}"
      >
        ${item.id}
      </button>`;
  });
}

function updateNextPrevBehavior() {
  prevBtn.disabled = currentQuestionIndex === 0;
  prevBtn.classList.toggle("opacity-50", prevBtn.disabled);
  prevBtn.classList.toggle("cursor-not-allowed", prevBtn.disabled);

  nextBtn.disabled = currentQuestionIndex === questionsLength - 1;
  nextBtn.classList.toggle("opacity-50", nextBtn.disabled);
  nextBtn.classList.toggle("cursor-not-allowed", nextBtn.disabled);
}

function updateQuestionArea() {
  const currentQuestion = courseData[currentQuestionIndex];

  questionNumber.textContent = currentQuestion.id;
  questionText.textContent = currentQuestion.text;

  if (currentQuestion.code) {
    questionCode.classList.remove("hidden");

    questionCode.innerHTML = `
      <pre class="m-0"><code>${currentQuestion.code}</code></pre>
    `;
  } else {
    questionCode.classList.add("hidden");
    questionCode.innerHTML = "";
  }
}

function goTOQuestionListener(btns) {
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentQuestionIndex = courseData.findIndex(
        (q) => q.id === Number(btn.id)
      );

      if (currentQuestionIndex !== -1) {
        renderQuestions();
      }
    });
  });
}

function renderQuestions() {
  questionsNavigation.innerHTML = "";
  displayNavigationQuestion();
  updateNextPrevBehavior();
  updateQuestionArea();

  let questionNavigation = document.querySelectorAll(
    ".question-navigation-btn"
  );
  console.log(questionNavigation);

  goTOQuestionListener(questionNavigation);
}

function nextQuestion() {
  currentQuestionIndex++;
  renderQuestions();
}

function prevQuestion() {
  currentQuestionIndex--;
  renderQuestions();
}

nextBtn.addEventListener("click", nextQuestion);
prevBtn.addEventListener("click", prevQuestion);
renderQuestions();

//** marked questions --------------------------- */
let marked = [];
function getMarkedQuestion() {
  courseData.forEach((item) => {
    if (item.status == "marked") marked.push(item);
  });
}
function displayMarkedQuestion() {
  getMarkedQuestion();
  if (marked.length) {
    marked.forEach((item) => {
      if (item.status == "marked") {
        questionsMarked.className = "flex gap-1.5 flex-wrap gap-2";
        questionsMarked.innerHTML += `
          <button
            class="question-marked-btn px-3 py-1.5 rounded-lg border-2 border-warning text-warning text-xs font-semibold bg-warning/5 hover:bg-warning/10 transition-colors"
            id="${item.id}"
          >
            ${item.id}
          </button>`;
      }
    });
  } else {
    questionsMarked.className = "flex gap-1.5 items-center justify-center";
    questionsMarked.innerHTML = `
          <i
            class="fa-regular fa-bookmark text-5xl text-warning/30 my-5"
          ></i>`;
  }
}
displayMarkedQuestion();

let questionNavigation = document.querySelectorAll(".question-marked-btn");
questionNavigation.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentQuestionIndex = Number(btn.id) - 1;
    renderQuestions();
  });
});
