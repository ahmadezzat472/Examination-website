var inputs = document.querySelectorAll("input")
var statusMessage = document.getElementById("loginStatus")

function validateLogin(e){
    e.preventDefault()
    var user = JSON.parse(localStorage.getItem("user"))
    statusMessage.classList.remove("hidden")
    if(!user){
        statusMessage.classList.remove("text-success")
        statusMessage.classList.add("text-danger")
        statusMessage.textContent = "Sorry, something went wrong in our end"
    }
    else if(inputs[0].value !== user.email || inputs[1].value !== user.password){
        statusMessage.classList.remove("text-success")
        statusMessage.classList.add("text-danger")
        statusMessage.textContent = "Invalid Email or Password"
    }
    else{
        statusMessage.classList.remove("text-danger")
        statusMessage.classList.add("text-success")
        statusMessage.textContent = "Logged in successfully"
        localStorage.setItem("isLoggedIn", "true")
        window.location.replace("exam.html")
    }
}