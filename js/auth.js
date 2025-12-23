var currentUser = JSON.parse(localStorage.getItem("currentUser"))
if(window.location.pathname !== "/pages/login.html" && window.location.pathname !== "/pages/register.html"){
    sessionStorage.setItem("lastPage", window.location.pathname)
}
if ((!currentUser && window.location.pathname === "/pages/exam.html") || (!currentUser && window.location.pathname === "/pages/result.html") || (!currentUser && window.location.pathname === "/pages/timeout.html")) {
    window.location.replace("login.html")
}
else if ((currentUser && window.location.pathname === "/pages/register.html") || (currentUser && window.location.pathname === "/pages/login.html")) {
    var lastPage = sessionStorage.getItem("lastPage")
    if(lastPage){
        window.location.replace(lastPage)
    }
    else{
        window.location.replace("home.html")
    }
}