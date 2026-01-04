var fName = document.getElementById("firstName");
var lName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var firstNameStatus = document.getElementById("firstNameStatus");
var lastNameStatus = document.getElementById("lastNameStatus");
var emailStatus = document.getElementById("emailStatus");
var invalidIcon = document.getElementById("invalid");
var validIcon = document.getElementById("valid");
var form = document.querySelector("form");

var nameRegex = new RegExp(/^[a-zA-Z]+$/);
var emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

function handleSignIn() {
  form.reset();
}

fName.addEventListener("blur", function (e) {
  if (e.target.value === "") {
    firstNameStatus.classList.remove("hidden");
    firstNameStatus.classList.add("text-danger");
    firstNameStatus.textContent = "This field is required";
  } else if (!nameRegex.test(e.target.value)) {
    firstNameStatus.classList.remove("hidden");
    firstNameStatus.classList.add("text-danger");
    firstNameStatus.textContent = "Only letters are allowed";
  } else {
    firstNameStatus.classList.add("hidden");
  }
});

lName.addEventListener("blur", function (e) {
  if (e.target.value === "") {
    lastNameStatus.classList.remove("hidden");
    lastNameStatus.classList.add("text-danger");
    lastNameStatus.textContent = "This field is required";
  } else if (!nameRegex.test(e.target.value)) {
    lastNameStatus.classList.remove("hidden");
    lastNameStatus.classList.add("text-danger");
    lastNameStatus.textContent = "Only letters are allowed";
  } else {
    lastNameStatus.classList.add("hidden");
  }
});

email.addEventListener("blur", function (e) {
  if (e.target.value === "") {
    emailStatus.classList.remove("hidden");
    emailStatus.classList.add("text-danger");
    emailStatus.textContent = "This field is required";
  } else if (!emailRegex.test(e.target.value)) {
    emailStatus.classList.remove("hidden");
    emailStatus.classList.add("text-danger");
    emailStatus.textContent = "Please include an '@' in the email address";
  } else {
    emailStatus.classList.add("hidden");
  }
});

password.addEventListener("blur", function (e) {
  if (e.target.value === "") {
    validIcon.classList.add("hidden");
    invalidIcon.classList.remove("hidden");
  } else if (e.target.value.length < 8) {
    validIcon.classList.add("hidden");
    invalidIcon.classList.remove("hidden");
  } else {
    invalidIcon.classList.add("hidden");
    validIcon.classList.remove("hidden");
  }
});

// function validateRegister(e) {
//   e.preventDefault();
//   var isFNameValid = false;
//   var isLNameValid = false;
//   var isEmailValid = false;
//   var isPasswordValid = false;
//   if (fName.value === "") {
//     firstNameStatus.classList.remove("hidden");
//     firstNameStatus.classList.add("text-danger");
//     firstNameStatus.textContent = "This field is required";
//   } else if (!nameRegex.test(fName.value)) {
//     firstNameStatus.classList.remove("hidden");
//     firstNameStatus.classList.add("text-danger");
//     firstNameStatus.textContent = "Only letters are allowed";
//   } else {
//     firstNameStatus.classList.add("hidden");
//     isFNameValid = true;
//   }
//   if (lName.value === "") {
//     lastNameStatus.classList.remove("hidden");
//     lastNameStatus.classList.add("text-danger");
//     lastNameStatus.textContent = "This field is required";
//   } else if (!nameRegex.test(lName.value)) {
//     lastNameStatus.classList.remove("hidden");
//     lastNameStatus.classList.add("text-danger");
//     lastNameStatus.textContent = "Only letters are allowed";
//   } else {
//     lastNameStatus.classList.add("hidden");
//     isLNameValid = true;
//   }
//   if (email.value === "") {
//     emailStatus.classList.remove("hidden");
//     emailStatus.classList.add("text-danger");
//     emailStatus.textContent = "This field is required";
//   } else if (!emailRegex.test(email.value)) {
//     emailStatus.classList.remove("hidden");
//     emailStatus.classList.add("text-danger");
//     emailStatus.textContent = "Please include an '@' in the email address";
//   } else {
//     emailStatus.classList.add("hidden");
//     isEmailValid = true;
//   }
//   if (password.value === "") {
//     validIcon.classList.add("hidden");
//     invalidIcon.classList.remove("hidden");
//   } else if (password.value.length < 8) {
//     validIcon.classList.add("hidden");
//     invalidIcon.classList.remove("hidden");
//   } else {
//     invalidIcon.classList.add("hidden");
//     validIcon.classList.remove("hidden");
//     isPasswordValid = true;
//   }
//   if (isFNameValid && isLNameValid && isEmailValid && isPasswordValid) {
//     var user = {
//       fName: fName.value,
//       lName: lName.value,
//       email: email.value,
//       password: password.value,
//     };
//     var users = JSON.parse(localStorage.getItem("users"));
//     if (!users) {
//       users = [];
//     }
//     var existingEmail = users.findIndex(function (registeredUser) {
//       return user.email === registeredUser.email;
//     });
//     if (existingEmail !== -1) {
//       emailStatus.classList.remove("hidden");
//       emailStatus.classList.add("text-danger");
//       emailStatus.textContent = "This email already exists";
//     } else {
//       emailStatus.classList.add("hidden");
//       users.push(user);
//       localStorage.setItem("users", JSON.stringify(users));
//       window.location.href = "login.html";
//       e.target.reset();
//     }
//   }
// }

//** _________________________________ dark mode  _________________________________

function validateRegister(e) {
  e.preventDefault();

  const registerBtn = document.querySelector("#register-btn");

  let isFNameValid = false;
  let isLNameValid = false;
  let isEmailValid = false;
  let isPasswordValid = false;

  if (fName.value === "") {
    firstNameStatus.classList.remove("hidden");
    firstNameStatus.classList.add("text-danger");
    firstNameStatus.textContent = "This field is required";
  } else if (!nameRegex.test(fName.value)) {
    firstNameStatus.classList.remove("hidden");
    firstNameStatus.classList.add("text-danger");
    firstNameStatus.textContent = "Only letters are allowed";
  } else {
    firstNameStatus.classList.add("hidden");
    isFNameValid = true;
  }

  if (lName.value === "") {
    lastNameStatus.classList.remove("hidden");
    lastNameStatus.classList.add("text-danger");
    lastNameStatus.textContent = "This field is required";
  } else if (!nameRegex.test(lName.value)) {
    lastNameStatus.classList.remove("hidden");
    lastNameStatus.classList.add("text-danger");
    lastNameStatus.textContent = "Only letters are allowed";
  } else {
    lastNameStatus.classList.add("hidden");
    isLNameValid = true;
  }

  if (email.value === "") {
    emailStatus.classList.remove("hidden");
    emailStatus.classList.add("text-danger");
    emailStatus.textContent = "This field is required";
  } else if (!emailRegex.test(email.value)) {
    emailStatus.classList.remove("hidden");
    emailStatus.classList.add("text-danger");
    emailStatus.textContent = "Please include an '@' in the email address";
  } else {
    emailStatus.classList.add("hidden");
    isEmailValid = true;
  }

  if (password.value === "" || password.value.length < 8) {
    validIcon.classList.add("hidden");
    invalidIcon.classList.remove("hidden");
  } else {
    invalidIcon.classList.add("hidden");
    validIcon.classList.remove("hidden");
    isPasswordValid = true;
  }

  if (!isFNameValid || !isLNameValid || !isEmailValid || !isPasswordValid) {
    return;
  }

  registerBtn.disabled = true;
  registerBtn.classList.add("pointer-events-none", "opacity-70");
  registerBtn.innerHTML = `
    <span class="inline-block h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
    <span>Creating account...</span>
  `;

  setTimeout(() => {
    const user = {
      fName: fName.value,
      lName: lName.value,
      email: email.value,
      password: password.value,
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingEmail = users.findIndex(
      (registeredUser) => registeredUser.email === user.email
    );

    if (existingEmail !== -1) {
      emailStatus.classList.remove("hidden");
      emailStatus.classList.add("text-danger");
      emailStatus.textContent = "This email already exists";

      registerBtn.disabled = false;
      registerBtn.classList.remove("pointer-events-none", "opacity-70");
      registerBtn.innerHTML = "Create Account";
    } else {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1800);
    }

    e.target.reset();
  }, 1200);
}


//** _________________________________ dark mode  _________________________________
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
