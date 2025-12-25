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
let answers = document.querySelector("#answers");
let markInput = document.querySelector("#mark-input");

let questionNavNumbers = document.querySelector("#question-nav-numbers");
let questionMarkedNumbers = document.querySelector("#question-marked-numbers");

let progressBar = document.querySelector("#progress-bar");

//** ---------------------------------------------------- timer display ----------------------------------------------------

let timerDisplay = document.querySelector("#timer-display");
let timeoutOverlay = document.querySelector(".timeout-overlay");
let hourglassIcon = document.querySelector(".fa-hourglass-end");
const timerBorder = document.querySelector(".timer-border");

const totalTime = 30 * 60; // 30 minutes
let totalSeconds = 30 * 60; // 30 minutes

function timeDown() {
  const minutes = Math.floor(totalSeconds / 60); // get only the minutes
  const seconds = totalSeconds % 60; // get the remaining seconds from the minutes

  timerDisplay.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // Progress percentage
  const progress = totalSeconds / totalTime;
  const angle = progress * 360;

  // Color change near end
  const color = progress < 0.25 ? "#ef4444" : "#14b8a61a"; // red when <20%

  timerBorder.style.background = `
    conic-gradient(
      ${color} ${angle}deg,
      rgba(256, 256, 256, 0.5) 0deg
    )
  `;

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

//** fetch course data */
const searchParams = window.location.search;
const params = new URLSearchParams(searchParams);
const courseName = params.get("course");
const courseLevel = params.get("level");

//** Variables */
const courseData =
  (courses[courseName] && courses[courseName][courseLevel]) || courses.ds.easy;
const questionsLength = courseData.length;
let answeredQuestions =
  JSON.parse(localStorage.getItem("answeredQuestions")) || [];
let markedQuestions = JSON.parse(localStorage.getItem("markedQuestions")) || [];
let answersNum = ["A", "B", "C", "D"];
let currentQuestionIndex = 0;

//** handle navigation questions and prev & next btn */
questionNavNumbers.innerHTML = courseData.length;
questionMarkedNumbers.innerHTML = markedQuestions.length;

function displayNavigationQuestion() {
  let currentQuestion = courseData[currentQuestionIndex].id;
  courseData.forEach((item) => {
    questionsNavigation.innerHTML += `
      <button
        class="question-navigation-btn w-10 h-10 rounded-lg border flex items-center justify-center"
        title=${
          currentQuestion == item.id
            ? `current`
            : checkQuestionIsAnswered(item)
            ? `answered`
            : checkQuestionIsMarked(item)
            ? "marked"
            : "none"
        }
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

  markInput.checked = markedQuestions.includes(currentQuestion.id);

  displayAnswers(currentQuestion);

  // restore previously answered choice for this question
  let prev = checkQuestionIsAnswered(currentQuestion);
  if (prev) {
    const el = answers.querySelector(
      `#q${currentQuestion.id}-a${prev.questionId}`
    );
    if (el) el.checked = true;
  }

  // change listeners to save answers when selected
  const inputs = answers.querySelectorAll("input.custom-radio");
  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const qId = currentQuestion.id;
      const answerIsTrue = input.dataset.answerIsCorrect; // data-answer-is-correct
      const correctAnswer = input.dataset.answerCorrect; // data-answer-correct
      const answerText = input.value;

      const idx = answeredQuestions.findIndex((a) => a.questionId === qId);
      if (idx !== -1) {
        answeredQuestions[idx] = {
          questionId: qId,
          answerIsTrue,
          answerText,
          correctAnswer,
        };
      } else {
        answeredQuestions.push({
          questionId: qId,
          answerIsTrue,
          answerText,
          correctAnswer,
        });
      }

      localStorage.setItem(
        "answeredQuestions",
        JSON.stringify(answeredQuestions)
      );

      currentQuestion.status = "answered";
      calcProgress();
    });
  });
}

function checkQuestionIsAnswered(currentQuestion) {
  return answeredQuestions.find((a) => a.questionId === currentQuestion.id);
}

function checkQuestionIsMarked(currentQuestion) {
  console.log(currentQuestion);

  return markedQuestions.find((a) => a === currentQuestion.id);
}

function displayAnswers(currentQuestion) {
  answers.innerHTML = "";

  // ** get the correct answer */
  let correctAnswerText = currentQuestion.answers.find(
    (item) => item.isCorrect == true
  );

  currentQuestion.answers.forEach((item) => {
    answers.innerHTML += `
      <label class="cursor-pointer group relative block">
        <input
          class="custom-radio sr-only"
          name="q${currentQuestion.id}"
          type="radio"
          value="${item.text}"
          data-answer-is-correct="${item.isCorrect}"
          data-answer-correct="${correctAnswerText.text}"
          id="q${currentQuestion.id}-a${item.id}"
        />
        <div
          class="flex items-center gap-4 px-4 py-3 rounded-xl border-2 border-border bg-surface transition-all duration-200 hover:border-primary/50 hover:shadow-sm group-hover:bg-primary/5"
        >
          <span
            class="radio-indicator w-8 h-8 rounded-lg bg-surface border-2 border-border text-text-muted font-semibold text-sm flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors"
            >${answersNum[item.id - 1]}</span
          >
          <span
            class="text-base font-medium text-text-muted group-hover:text-text-main transition-colors"
            >${item.text}</span
          >
        </div>
      </label>
    `;
  });
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

function displayMarkedQuestion() {
  if (markedQuestions.length) {
    questionsMarked.className = "flex gap-1.5 flex-wrap gap-2";
    questionsMarked.innerHTML = "";
    markedQuestions.forEach((questionId) => {
      questionsMarked.innerHTML += `
        <button
          class="question-marked-btn px-3 py-1.5 rounded-lg border-2 border-warning text-warning text-xs font-semibold bg-warning/5 hover:bg-warning/10 transition-colors"
          id="${questionId}"
        >
          ${questionId}
        </button>`;
    });
    attachMarkedButtonListeners();
  } else {
    questionsMarked.className = "flex gap-1.5 items-center justify-center";
    questionsMarked.innerHTML = `
      <i
        class="fa-regular fa-bookmark text-5xl text-warning/30 my-5"
      ></i>`;
  }
}

function attachMarkedButtonListeners() {
  const questionMarked = document.querySelectorAll(".question-marked-btn");
  questionMarked.forEach((btn) => {
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

displayMarkedQuestion();

markInput.addEventListener("change", () => {
  const currentQuestion = courseData[currentQuestionIndex];

  if (!markInput.checked) {
    // remove from marked
    markedQuestions = markedQuestions.filter((id) => id !== currentQuestion.id);
    currentQuestion.status = "none";
  } else {
    // add to marked if not already there
    if (!markedQuestions.includes(currentQuestion.id)) {
      markedQuestions.push(currentQuestion.id);
    }
    courseData[currentQuestionIndex].status = "marked";
  }

  questionMarkedNumbers.innerHTML = markedQuestions.length;
  localStorage.setItem("markedQuestions", JSON.stringify(markedQuestions));
  displayMarkedQuestion();
});

//** ---------------------------------------------------- questions ----------------------------------------------------

function calcProgress() {
  let ratio = (answeredQuestions.length / questionsLength) * 100;
  progressBar.style.width = `${ratio}%`;
}
calcProgress();
