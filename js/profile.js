// get data base
let nameDataBase = localStorage.getItem("username")
let emailDataBase = localStorage.getItem("email")
let passwordDataBase = localStorage.getItem("password")

// variable
let profileForm = document.querySelector(".profile-form")
let profileName = document.querySelector(".profile-name")
let profileEmail = document.querySelector(".profile-email")
let profilePassword = document.querySelector("#password")
let profileRPassword = document.querySelector("#r-password")


profileForm.style.opacity ="1"
profileName.value = nameDataBase
profileEmail.value = emailDataBase
profilePassword.value = passwordDataBase
profileRPassword.value = passwordDataBase


profileForm.addEventListener("submit", profileFormF)

function profileFormF(e){
    e.preventDefault();

    localStorage.setItem("username" ,profileName.value);
    localStorage.setItem("email" ,profileEmail.value);

}
