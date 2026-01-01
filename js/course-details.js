//** _________________________________ get courses _________________________________

import { courses } from "./data.js";

//** _________________________________ Guard - Auth _________________________________

//** get course name and level from url
const searchParams = window.location.search;
const params = new URLSearchParams(searchParams);
const courseName = params.get("course");

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
    location.replace(path);
  }, 4000);
}

//** check: course is exist  */
function CheckThisCourseExist() {
  if (courses[courseName] == undefined) {
    showErrorPopup("oh!! Course not found.", "/");
    document.querySelector("#redirect-to").innerHTML = "Redirecting To Home";
    return;
  }
}
CheckThisCourseExist();

//** course is completed ?  */
function isCompleted() {
  var count = 0;
  CompletedCourses.forEach(function (course) {
    if (course.name === courseName) count++;
  });

  return count;
}

//** course level is completed ?  */
function CheckThisCourseLevel(examLevel) {
  return CompletedCourses.some(
    (course) => course.name === courseName && course.level === examLevel
  );
}

//** _________________________________ select element _________________________________

var courseImg = document.querySelector("#course-img");
var courseCategory = document.querySelector("#course-category");
var courseFullName = document.querySelector("#course-name");
var courseDesc = document.querySelector("#course-desc");
var courseStatus = document.querySelector("#course-status");
var examLinks = document.querySelectorAll(".exam-links");
var examLevelStateIcons = document.querySelectorAll(".fa-play");
console.log(examLevelStateIcons);

//** _________________________________ display data  _________________________________

//** get course details
const courseData = courses[courseName];

//** header section data
courseImg.src = courseData.imageSrc;
courseCategory.textContent = courseData.category;
courseFullName.textContent = courseData.name;
courseDesc.textContent = courseData.description;
var state = isCompleted();
if (state == 3) {
  courseStatus.textContent = "Completed";
  courseStatus.style.color = "green-500";
} else if (state == 0) {
  courseStatus.textContent = "Not started";
  courseStatus.style.color = "yellow-500";
} else {
  courseStatus.textContent = "In Progress";
  courseStatus.style.color = "primary-500";
}

//**
if (CheckThisCourseLevel("easy")) {
  examLevelStateIcons[0].classList.replace("fa-play", "fa-check");
  examLinks[0].href = `/pages/result.html?course=${courseName}&level=easy`;
} else {
  examLinks[0].href = `/pages/exam.html?course=${courseName}&level=easy`;
}
if (CheckThisCourseLevel("medium")) {
  examLevelStateIcons[1].classList.replace("fa-play", "fa-check");
  examLinks[1].href = `/pages/result.html?course=${courseName}&level=medium`;
} else {
  examLinks[1].href = `/pages/exam.html?course=${courseName}&level=medium`;
}
if (CheckThisCourseLevel("hard")) {
  examLevelStateIcons[2].classList.replace("fa-play", "fa-check");
  examLinks[2].href = `/pages/result.html?course=${courseName}&level=hard`;
} else {
  examLinks[2].href = `/pages/exam.html?course=${courseName}&level=hard`;
}
