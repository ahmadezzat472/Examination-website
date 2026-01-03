//** _________________________________ dark mode  _________________________________

// Initialize theme on page load
const savedTheme = localStorage.getItem("theme");
const html = document.documentElement;

if (
  savedTheme === "dark" ||
  (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

// Toggle button handler
const darkBtn = document.querySelector("#dark-btn");

darkBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

//** get course name and level from url */
const searchParams = window.location.search;
const params = new URLSearchParams(searchParams);
const courseKey = params.get("course");
const courseLevel = params.get("level");

//** get the Completed Courses from currentUser */
const user = JSON.parse(localStorage.getItem("currentUser")) || {};
let last = user.lastResult;
let CompletedCourses = user.CompletedCourses || [];

//** check: course is exist | course is completed ?  */
function CheckThisCourse() {
  if (courseKey == undefined || courseLevel == undefined) {
    last = user.lastResult;
    return;
  }

  const CourseCompletedIndex = CompletedCourses.findIndex(
    (course) => course.name === courseKey && course.level === courseLevel
  );

  if (CourseCompletedIndex != -1) {
    last = CompletedCourses[CourseCompletedIndex].result;
    return;
  } else {
    last = user.lastResult;
  }
}
CheckThisCourse();

//** the user is passed ? */
let correct = last.correct;
let total = last.total;
let grade = (+correct / +total) * 100;
const isPassed = grade >= 50;
console.log(isPassed);

//** change style passed on user success */
let bgOverlay = document.querySelector("#bg-overlay");
let iconSuccess = document.querySelector("#icon-success");
let iconBox = document.querySelector("#icon-box");
let titleResult = document.querySelector("#title-result");
let msgResult = document.querySelector("#msg-result");
let msgDetailsResult = document.querySelector("#msg-details-result");
let stateIcon = document.querySelector("#state-icon");
let stateText = document.querySelector("#state-text");
let gradeProgress = document.querySelector("#grade-progress");

if (isPassed) {
  bgOverlay.classList.replace("bg-secondary/10", "bg-primary/10");

  iconSuccess.classList.replace("fa-face-frown", "fa-trophy");
  iconSuccess.classList.replace("text-secondary", "text-primary");

  iconBox.classList.replace("bg-secondary/10", "bg-primary/10");
  iconBox.classList.replace("ring-secondary/20", "ring-primary/20");

  titleResult.classList.replace("from-secondary", "from-primary");
  titleResult.classList.replace("to-secondary/50", "to-teal-200");

  msgResult.textContent = "Congratulations";
  msgDetailsResult.textContent = "you have successfully completed the";

  stateIcon.classList.replace("fa-circle-xmark", "fa-circle-check");
  stateIcon.classList.replace("text-red-500", "text-green-500");

  stateText.classList.replace("text-red-500", "text-green-500");
  stateText.textContent = "Passed";

  gradeProgress.classList.replace("from-secondary", "from-primary");
  gradeProgress.classList.replace("to-secondary-400", "to-teal-400");
} else {
  bgOverlay.classList.replace("bg-primary/10", "bg-secondary/10");

  iconSuccess.classList.replace("fa-trophy", "fa-face-frown");
  iconSuccess.classList.replace("text-primary", "text-secondary");

  iconBox.classList.replace("bg-primary/10", "bg-secondary/10");
  iconBox.classList.replace("ring-primary/20", "ring-secondary/20");

  titleResult.classList.replace("from-primary", "from-secondary");
  titleResult.classList.replace("to-teal-200", "to-secondary/50");

  msgResult.textContent = "Unfortunately";
  msgDetailsResult.textContent = "you did not pass the";

  stateIcon.classList.replace("fa-circle-check", "fa-circle-xmark");
  stateIcon.classList.replace("text-green-500", "text-red-500");

  stateText.classList.replace("text-green-500", "text-red-500");
  stateText.textContent = "failed";

  gradeProgress.classList.replace("from-primary", "from-secondary");
  gradeProgress.classList.replace("to-teal-400", "to-secondary-400");
}

//** display the user name */
let userName = document.querySelectorAll(".user-name");
userName.forEach((item) => {
  item.innerHTML = `${currentUser.fName} ${currentUser.lName}`;
});

//** display the course name */
let courseName = (document.querySelector("#course-name").innerHTML =
  last.courseName);

//** display the score */
let score = document.querySelector("#score");
score.textContent = grade;

//** display the progress */
gradeProgress.style.width = `${grade}%`;

//** display the time */
let displayTime = document.querySelector("#display-time");
displayTime.textContent = last.timeTaken;

//** display the level */
let displayLevel = document.querySelector("#display-level");
displayLevel.textContent = last.level;
