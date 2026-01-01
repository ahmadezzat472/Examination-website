import { courses } from "./data.js";
var selectedCategory = document.getElementById("category");
var allCourses = Object.entries(courses);
var grid = document.getElementById("coursesGrid");
var categories = document.querySelectorAll("li");

grid.addEventListener("click", function (e) {
  if (e.target.classList.contains("course-btn")) {
    var courseName = e.target.dataset.course;
    var encodedName = encodeURIComponent(courseName);
    window.location.href = `course-details.html?course=${encodedName}`;
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
    if (category.textContent === "All Courses") {
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
        return course[1].category === category.textContent;
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
