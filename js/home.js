import { courses } from "./data.js";

let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

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

if (currentUser) {
  document.querySelector("#user-box").classList.remove("hidden");
  document.querySelector("#logout-btn").classList.remove("hidden");
  document.querySelector("#login-btn").classList.add("hidden");
  document.querySelector(
    "#user-name"
  ).innerHTML = `${currentUser.fName} ${currentUser.lName}`;

  var userData = document.querySelector("#user-data");
  var imgBtn = document.querySelector("#img-btn");
  imgBtn.addEventListener("click", function () {
    userData.classList.toggle("hidden");
  });

  //** _________________________________ logout  _________________________________
  var logoutBtn = document.querySelector("#logout-btn");
  logoutBtn.addEventListener("click", function () {
    logoutBtn.disabled = true;
    logoutBtn.classList.add("pointer-events-none");

    logoutBtn.innerHTML = `
  <span class="inline-block h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
  <span></span>
  `;

    setTimeout(() => {
      // Remove auth data
      localStorage.removeItem("markedQuestions");
      localStorage.removeItem("answeredQuestions");
      localStorage.removeItem("currentUser");
      sessionStorage.clear();

      window.location.href = "/";
    }, 2000);
  });
} else {
  document.querySelector("#user-box").classList.add("hidden");
  document.querySelector("#login-btn").classList.remove("hidden");
  document.querySelector("#logout-btn").classList.add("hidden");
}

var selectedCategory = document.getElementById("category");
var allCourses = Object.entries(courses);
var grid = document.getElementById("coursesGrid");
var categories = document.querySelectorAll("li");

grid.addEventListener("click", function (e) {
  if (e.target.classList.contains("course-btn")) {
    var courseName = e.target.dataset.course;
    var encodedName = encodeURIComponent(courseName);
    window.location.href = `pages/course-details.html?course=${encodedName}`;
  }
});

categories.forEach(function (category) {
  category.addEventListener("click", function () {
    categories.forEach(function (category) {
      category.classList.remove("bg-surface");
      category.classList.remove("text-primary-400");
      category.classList.remove("font-bold");
      category.classList.remove("dark:text-primary-400");
    });
    category.classList.add("bg-surface");
    category.classList.add("text-primary-400");
    category.classList.add("font-bold");
    category.classList.add("dark:text-primary-400");
    selectedCategory.textContent = category.textContent;
    grid.innerHTML = "";
    if (category.textContent.trim() === "All Courses") {
      allCourses.forEach(function (course) {
        var totalQuestions = course[1].easy.length;
        var card = document.createElement("div");
        card.className =
          "shadow-card rounded-xl w-64 p-5 bg-surface dark:bg-surface-dark flex flex-col gap-4";
        card.innerHTML = `
          <div class="w-12 bg-gradient-to-r from-blue-400 to-blue-800 rounded-lg p-2 shadow-md shadow-blue-300">
          <img src="${course[1].imageSrc}" alt="${course[1].name}">
        </div>
  
        <div class="flex flex-col gap-2">
          <p class="font-bold dark:text-text-dark">${course[1].name}</p>
  
          <div class="flex flex-col gap-3">
            <p class="text-xs text-muted dark:text-muted-dark h-12 overflow-hidden text-ellipsis">
              ${course[1].description}
            </p>
  
            <hr class="my-1 dark:border-muted-dark">
  
            <div class="text-xs text-muted dark:text-muted-dark flex gap-3">
              <div>
                <i class="fa-regular fa-clock"></i>
                <span>${totalQuestions * 2}m</span>
              </div>
              <div>
                <i class="fa-solid fa-circle-question"></i>
                <span>${totalQuestions} Qs</span>
              </div>
            </div>
  
            <button
              data-course="${course[0]}"
              class="course-btn bg-primary-600 text-white py-2 text-sm rounded-lg shadow-input hover:bg-primary transition-all duration-300 cursor-pointer">
              Course Details
            </button>
          </div>
        </div>
      `;
        grid.appendChild(card);
      });
    } else {
      var showedCourses = allCourses.filter(function (course) {
        return course[1].category === category.textContent.trim();
      });
      showedCourses.forEach(function (course) {
        var totalQuestions = course[1].easy.length;
        var card = document.createElement("div");
        card.className =
          "shadow-card rounded-xl w-64 p-5 bg-surface dark:bg-surface-dark flex flex-col gap-4";
        card.innerHTML = `
            <div class="w-12 bg-gradient-to-r from-blue-400 to-blue-800 rounded-lg p-2 shadow-md shadow-blue-300">
            <img src="${course[1].imageSrc}" alt="${course[1].name}">
          </div>
    
          <div class="flex flex-col gap-2">
            <p class="font-bold dark:text-text-dark">${course[1].name}</p>
    
            <div class="flex flex-col gap-3">
              <p class="text-xs text-muted dark:text-muted-dark h-12 overflow-hidden text-ellipsis">
                ${course[1].description}
              </p>
    
              <hr class="my-1 dark:border-muted-dark">
    
              <div class="text-xs text-muted dark:text-muted-dark flex gap-3">
                <div>
                  <i class="fa-regular fa-clock"></i>
                  <span>${totalQuestions * 2}m</span>
                </div>
                <div>
                  <i class="fa-solid fa-circle-question"></i>
                  <span>${totalQuestions} Qs</span>
                </div>
              </div>
    
              <button
                data-course="${course[0]}"
                class="course-btn bg-primary-600 text-white py-2 text-sm rounded-lg shadow-input hover:bg-primary transition-all duration-300 cursor-pointer">
                Course Details
              </button>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  selectedCategory.textContent = "All Courses";
  allCourses.forEach(function (course) {
    var totalQuestions = course[1].easy.length;
    var card = document.createElement("div");
    card.className =
      "shadow-card rounded-xl w-64 p-5 bg-surface dark:bg-surface-dark flex flex-col gap-4";
    card.innerHTML = `
            <div class="w-12 bg-gradient-to-r from-blue-400 to-blue-800 rounded-lg p-2 shadow-md shadow-blue-300">
        <img src="${course[1].imageSrc}" alt="${course[1].name}">
      </div>

      <div class="flex flex-col gap-2">
        <p class="font-bold dark:text-text-dark">${course[1].name}</p>

        <div class="flex flex-col gap-3">
          <p class="text-xs text-muted dark:text-muted-dark h-12 overflow-hidden text-ellipsis">
            ${course[1].description}
          </p>

          <hr class="my-1 dark:border-muted-dark">

          <div class="text-xs text-muted dark:text-muted-dark flex gap-3">
            <div>
              <i class="fa-regular fa-clock"></i>
              <span>${totalQuestions * 2}m</span>
            </div>
            <div>
              <i class="fa-solid fa-circle-question"></i>
              <span>${totalQuestions} Qs</span>
            </div>
          </div>

          <button
            data-course="${course[0]}"
            class="course-btn bg-primary-600 text-white py-2 text-sm rounded-lg shadow-input hover:bg-primary transition-all duration-300 cursor-pointer">
            Course Details
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
});
