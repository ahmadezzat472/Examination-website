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
  var currentUser = {
    email: email.value,
    password: password.value,
  };
  var users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    users = [];
  }
  var userFound = users.findIndex(function (user) {
    return (
      user.email === currentUser.email && user.password === currentUser.password
    );
  });
  if (userFound === -1) {
    statusMessage.classList.remove("text-success");
    statusMessage.classList.add("text-danger");
    statusMessage.textContent = "Invalid Email or Password";
  } else {
    var currentUser = {
      fName: users[userFound].fName,
      lName: users[userFound].lName,
      email: users[userFound].email,
      password: users[userFound].password,
      CompletedCourses: users[userFound].CompletedCourses,
    };
    statusMessage.classList.remove("text-danger");
    statusMessage.classList.add("text-success");
    statusMessage.textContent = "Logged in successfully";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    window.location.replace("/");
    e.target.reset();
  }
}
