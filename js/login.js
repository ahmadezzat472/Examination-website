var email = document.getElementById("email");
var password = document.getElementById("password");
var statusMessage = document.getElementById("loginStatus");
var form = document.querySelector("form");

function handleCreateAccount() {
  form.reset();
}

function validateLogin(e) {
  e.preventDefault();

  statusMessage.classList.remove("hidden");

  const loginBtn = document.querySelector("#login-btn");

  loginBtn.disabled = true;
  loginBtn.classList.add("pointer-events-none", "opacity-70");
  loginBtn.innerHTML = `
    <span class="inline-block h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
    <span>Logging in...</span>
  `;

  const currentUser = {
    email: email.value,
    password: password.value,
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];

  setTimeout(() => {
    const userFound = users.findIndex(
      (user) =>
        user.email === currentUser.email &&
        user.password === currentUser.password
    );

    if (userFound === -1) {
      statusMessage.classList.remove("text-success");
      statusMessage.classList.add("text-danger");
      statusMessage.textContent = "Invalid Email or Password";

      loginBtn.disabled = false;
      loginBtn.classList.remove("pointer-events-none", "opacity-70");
      loginBtn.innerHTML = "Login";
    } else {
      const loggedUser = {
        fName: users[userFound].fName,
        lName: users[userFound].lName,
        email: users[userFound].email,
        CompletedCourses: users[userFound].CompletedCourses,
        password: users[userFound].password,
      };

      statusMessage.classList.remove("text-danger");
      statusMessage.classList.add("text-success");
      statusMessage.textContent = "Logged in successfully";

      localStorage.setItem("currentUser", JSON.stringify(loggedUser));

      setTimeout(() => {
        window.location.replace("/");
      }, 1200);
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
