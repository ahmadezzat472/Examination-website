//** _________________________________ get courses _________________________________

import { courses } from "./data.js";

//** _________________________________ Guard - Auth _________________________________

//** get course name and level from url
const searchParams = window.location.search;
const params = new URLSearchParams(searchParams);
const courseName = params.get("course");
const courseLevel = params.get("level");

//** get the Completed Courses from currentUser
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
document.querySelector(
  "#user-name"
).innerHTML = `${currentUser.fName} ${currentUser.lName}`;
let CompletedCourses = currentUser.CompletedCourses || [];

//** popup show message error
function showErrorPopup(message, path) {
  const errorOverlay = document.querySelector(".error-popup");
  const container = errorOverlay.querySelector(".error-popup-container");
  const para = container.querySelector("p");
  para.textContent = message;
  errorOverlay.classList.replace("hidden", "flex");

  setTimeout(() => {
    // window.unlockExam();
    location.replace(path);
  }, 4000);
}

//** check: course is exist | course is completed ?  */
function CheckThisCourse() {
  if (
    courses[courseName] == undefined ||
    courses[courseName][courseLevel] == undefined
  ) {
    showErrorPopup("oh!! Course or level not found.", "/");
    document.querySelector("#redirect-to").innerHTML = "Redirecting To Home";
    return;
  }

  const isCourseCompleted = CompletedCourses.some(
    (course) => course.name === courseName && course.level === courseLevel
  );

  if (isCourseCompleted) {
    showErrorPopup(
      "You have already completed this course.",
      `/pages/result.html?course=${courseName}&level=${courseLevel}`
    );
    document.querySelector("#redirect-to").innerHTML = "Redirecting To Result";

    return;
  }
}
CheckThisCourse();

//** _________________________________ select element _________________________________

let questionsNavigation = document.querySelector("#questions-navigation");
let questionsMarked = document.querySelector("#questions-marked");

let prevBtn = document.querySelectorAll(".prev-btn");
let nextBtn = document.querySelectorAll(".next-btn");

let questionNumber = document.querySelector("#question-number");
let questionText = document.querySelector("#question-text");
let questionCode = document.querySelector("#question-code");
let answers = document.querySelector("#answers");
let markInput = document.querySelector("#mark-input");

let questionNavNumbers = document.querySelector("#question-nav-numbers");
let questionMarkedNumbers = document.querySelector("#question-marked-numbers");

let progressBar = document.querySelector("#progress-bar");

//** _________________________________ timer display _________________________________

let timerDisplay = document.querySelector("#timer-display");
let timeoutOverlay = document.querySelector(".timeout-overlay");
let hourglassIcon = document.querySelector(".fa-hourglass-end");
const timerBorder = document.querySelector(".timer-border");

const totalTime = 10 * 60; // 30 minutes
let totalSeconds = 10 * 60; // 30 minutes

const timer = setInterval(timeDown, 1000);

function timeDown() {
  //**  get the minutes and remaining seconds from the minutes
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  timerDisplay.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  //** calc Progress percentage
  const progress = totalSeconds / totalTime;
  const angle = progress * 360;

  //** Color change near end
  const color = progress < 0.25 ? "#ef4444" : "#14b8a61a";

  timerBorder.style.background = `
    conic-gradient(
      ${color} ${angle}deg,
      rgba(256, 256, 256, 0.5) 0deg
    )
  `;

  if (totalSeconds <= 0) {
    document.body.classList.add("overflow-hidden");
    timeoutOverlay.classList.replace("hidden", "flex");

    clearInterval(timer);
    saveExamDetails();

    const toggleIcons = setInterval(() => {
      hourglassIcon.classList.toggle("fa-hourglass-start");
      hourglassIcon.classList.toggle("fa-hourglass-end");
    }, 500);

    setTimeout(() => {
      clearInterval(toggleIcons);
      // window.unlockExam();
      location.replace("/pages/result.html");
    }, 3000);
  }

  totalSeconds--;
}
timeDown();

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

//** _________________________________ questions _________________________________

//** Variables
const courseFullData = courses[courseName];
const courseData = courses[courseName] && courses[courseName][courseLevel];
const questionsLength = courseData.length;
let answeredQuestions =
  JSON.parse(localStorage.getItem("answeredQuestions")) || [];
let markedQuestions = JSON.parse(localStorage.getItem("markedQuestions")) || [];

let answersNum = ["A", "B", "C", "D"];
let currentQuestionIndex = 0;

//** display length of questions and marked questions
questionNavNumbers.innerHTML = courseData.length;
questionMarkedNumbers.innerHTML = markedQuestions.length;

//** handle prev & next btn
nextBtn.forEach((btn) => {
  btn.addEventListener("click", nextQuestion);
});
prevBtn.forEach((btn) => {
  btn.addEventListener("click", prevQuestion);
});

function nextQuestion() {
  currentQuestionIndex++;
  renderQuestions();
}

function prevQuestion() {
  currentQuestionIndex--;
  renderQuestions();
}

//** handle navigation questions and display the navigation questions
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
renderQuestions();

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

//** display navigation questions
function displayNavigationQuestion() {
  let currentQuestion = courseData[currentQuestionIndex].id;
  courseData.forEach((item) => {
    questionsNavigation.innerHTML += `
      <button
        class="question-navigation-btn w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-200 border-[1.5px] border-gray-300 hover:border-gray-400 shadow-md shadow-gray-100 flex items-center justify-center  transition-all duration-200"
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

//** disabled and un disabled the next and prev btns
function updateNextPrevBehavior() {
  const isFirst = currentQuestionIndex === 0;
  const isLast = currentQuestionIndex === questionsLength - 1;

  prevBtn.forEach((btn) => {
    btn.disabled = isFirst;
    btn.classList.toggle("opacity-50", isFirst);
    btn.classList.toggle("cursor-not-allowed", isFirst);
  });

  nextBtn.forEach((btn) => {
    btn.disabled = isLast;
    btn.classList.toggle("opacity-50", isLast);
    btn.classList.toggle("cursor-not-allowed", isLast);
  });
}

//** display the question title and answers
function updateQuestionArea() {
  const currentQuestion = courseData[currentQuestionIndex];

  questionNumber.textContent = currentQuestion.id;
  questionText.textContent = currentQuestion.text;

  if (currentQuestion.code) {
    questionCode.classList.remove("hidden");
    questionCode.innerHTML = `
      <pre class="m-0 text-xs sm:text-sm"><code>${currentQuestion.code}</code></pre>
    `;
  } else {
    questionCode.classList.add("hidden");
    questionCode.innerHTML = "";
  }

  displayAnswers(currentQuestion);

  //** get previously answered (if exist) for this question
  let prev = checkQuestionIsAnswered(currentQuestion);
  if (prev) {
    const el = answers.querySelector(
      `#q${currentQuestion.id}-a${prev.questionId}`
    );
    if (el) el.checked = true;
  }

  //** change listeners to save answers when selected
  const inputs = answers.querySelectorAll("input.custom-radio");
  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const qId = currentQuestion.id;
      const answerIsTrue = input.dataset.answerIsCorrect; //** data-answer-is-correct
      const correctAnswer = input.dataset.answerCorrect; //** data-answer-correct
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
      updateSubmitButtonStyle();
    });
  });

  markInput.checked = markedQuestions.includes(currentQuestion.id);
}

function displayAnswers(currentQuestion) {
  answers.innerHTML = "";

  // ** get the correct answer
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
          class="flex items-center gap-3 lg:gap-4 px-3 py-2 lg:px-4 lg:py-3 rounded-xl border md:border-2 border-border bg-surface transition-all duration-200 hover:border-primary/50 hover:shadow-sm group-hover:bg-primary/5"
        >
          <span
            class="radio-indicator w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-lg bg-surface border-2 border-border text-muted font-semibold text-sm flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors"
            >${answersNum[item.id - 1]}</span
          >
          <span
            class="text-base font-medium max-md:text-[15px] lg:font-bold group-hover:text-text-main transition-all duration-200"
            >${item.text}</span
          >
        </div>
      </label>
    `;
  });
}

function checkQuestionIsAnswered(currentQuestion) {
  return answeredQuestions.find((a) => a.questionId === currentQuestion.id);
}

function checkQuestionIsMarked(currentQuestion) {
  return markedQuestions.find((a) => a === currentQuestion.id);
}

//**  _________________________________ marked questions _________________________________

function displayMarkedQuestion() {
  if (markedQuestions.length) {
    questionsMarked.className =
      "grid [grid-template-columns:repeat(auto-fill,minmax(2rem,1fr))] lg:[grid-template-columns:repeat(auto-fill,minmax(2.5rem,1fr))] gap-x-1.5 gap-y-3 justify-center font-semibold text-sm";
    questionsMarked.innerHTML = "";
    markedQuestions.forEach((questionId) => {
      questionsMarked.innerHTML += `
        <button
          class="question-marked-btn  w-9 h-9 lg:w-10 lg:h-10 rounded-lg border-2 border-warning text-warning text-xs font-semibold bg-warning/5 hover:bg-warning/20 transition-all duration-200"
          id="${questionId}"
        >
          ${questionId}
        </button>`;
    });

    attachMarkedButtonListeners();
  } else {
    questionsMarked.className = "flex items-center justify-center";
    questionsMarked.innerHTML = `
      <i
        class="fa-regular fa-bookmark text-4xl text-warning/30 my-5"
      ></i>`;
  }
}
displayMarkedQuestion();

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

markInput.addEventListener("change", () => {
  const currentQuestion = courseData[currentQuestionIndex];

  if (!markInput.checked) {
    markedQuestions = markedQuestions.filter((id) => id !== currentQuestion.id);
    currentQuestion.status = "none";
  } else {
    if (!markedQuestions.includes(currentQuestion.id)) {
      markedQuestions.push(currentQuestion.id);
    }
    courseData[currentQuestionIndex].status = "marked";
  }

  questionMarkedNumbers.innerHTML = markedQuestions.length;
  localStorage.setItem("markedQuestions", JSON.stringify(markedQuestions));

  displayMarkedQuestion();
});

//** _________________________________ progress bar _________________________________

function calcProgress() {
  let ratio = (answeredQuestions.length / questionsLength) * 100;
  progressBar.style.width = `${ratio}%`;
}
calcProgress();

//** _________________________________ submit exam _________________________________
let finishOverlay = document.querySelector(".finish-overlay");
let cancelFinish = document.querySelector("#cancel-finish");
let confirmExam = document.querySelector("#confirm-finish");
let leftAnswer = document.querySelector("#left-answer");
let circleQuestionIcon = document.querySelector("#circle-question-icon");
let submitExam = document.querySelectorAll(".submit-exam");

submitExam.forEach((btn) => {
  btn.addEventListener("click", openDialog);
});
cancelFinish.addEventListener("click", closeDialog);
confirmExam.addEventListener("click", confirmExamHandler);

function openDialog() {
  document.body.classList.add("overflow-hidden");
  finishOverlay.classList.replace("hidden", "flex");
  answeredQuestions.length;

  leftAnswer.innerHTML = "";
  const leftQuestions = questionsLength - answeredQuestions.length;
  if (leftQuestions) {
    leftAnswer.innerHTML = `you have ${leftQuestions} not answered`;
  } else {
    circleQuestionIcon.className =
      "fa-regular fa-circle-check text-green-500 text-4xl mb-4 animate-bounce";
    confirmExam.classList.replace("bg-secondary", "bg-green-500");
    confirmExam.classList.replace(
      "hover:bg-secondary-hover",
      "hover:bg-green-700"
    );
  }
}

function closeDialog() {
  document.body.classList.remove("overflow-hidden");
  finishOverlay.classList.replace("flex", "hidden");
}

let users = JSON.parse(localStorage.getItem("users")) || {};
function confirmExamHandler() {
  // Unlock the exam page before navigating
  // window.unlockExam();

  saveExamDetails();
  document.body.classList.remove("overflow-hidden");
  finishOverlay.classList.replace("flex", "hidden");
  location.replace("/pages/result.html");
}

function saveExamDetails() {
  const correctCount = answeredQuestions.filter(
    (a) => String(a.answerIsTrue) === "true"
  ).length;

  const grade = Math.round((correctCount / questionsLength) * 10);

  const takenSeconds = totalTime - totalSeconds;
  const takenTimeFormatted = formatTime(takenSeconds);

  const lastResult = {
    courseKey: courseName,
    courseName: courseFullData.name,
    courseCategory: courseFullData.category,
    level: courseLevel,
    grade,
    correct: correctCount,
    total: questionsLength,
    timeTaken: takenTimeFormatted,
  };

  const completeCourse = {
    name: courseName,
    level: courseLevel,
    result: lastResult,
  };
  if (!currentUser.CompletedCourses) {
    currentUser.CompletedCourses = [];
  }
  currentUser.CompletedCourses.push(completeCourse);
  currentUser.lastResult = lastResult;

  const idx = users.findIndex((u) => u.email === currentUser.email);
  if (idx !== -1) users[idx] = currentUser;
  else users.push(currentUser);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  removeQuestionFromLS();
}

function removeQuestionFromLS() {
  localStorage.removeItem("answeredQuestions");
  localStorage.removeItem("markedQuestions");
}

//** _________________________________ update submit button style _________________________________

function updateSubmitButtonStyle() {
  const allAnswered = answeredQuestions.length === questionsLength;

  submitExam.forEach((btn) => {
    if (allAnswered) {
      btn.classList.remove(
        "bg-secondary-hover",
        "hover:bg-secondary/10",
        "border-secondary/20",
        "hover:text-secondary"
      );

      btn.classList.add(
        "bg-green-500",
        "hover:bg-green-100",
        "border-green-500/20",
        "hover:text-green-500",
        "text-white"
      );
    } else {
      btn.classList.remove(
        "bg-green-500",
        "hover:bg-green-100",
        "border-green-500/20"
      );

      btn.classList.add(
        "bg-secondary-hover",
        "hover:bg-secondary/10",
        "border-secondary/20",
        "hover:text-secondary",
        "text-white"
      );
    }
  });
}

updateSubmitButtonStyle();

//** _________________________________ menu bar _________________________________
let sidebarMenu = document.querySelector("#sidebar-menu");
let sidebar = document.querySelector("#sidebar");
if (sidebarMenu) sidebarMenu.addEventListener("click", showSidebar);

function showSidebar() {
  sidebar.classList.toggle("max-md:hidden");
}
