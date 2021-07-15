let signup = document.getElementById("sign_up")
let icon = document.querySelector(".notification i")
let userbrand = document.getElementById("lgprofile")
let userbrandSpan = document.getElementById("span")


// check user
let username = localStorage.getItem("username")

if(username){
    signup.remove();
    userbrand.style.display="block"
    icon.style.display = "block"
    userbrandSpan.innerText+= username.toLocaleUpperCase().charAt(0)
}

// log out

let logOutBtn = document.getElementById("logout")


logOutBtn.addEventListener("click", function(e){
    e.preventDefault();
localStorage.clear();
setTimeout(() => {window.location="./MOVIES-login-and-signup/SIGNUP.html"}, 1500)

});