//check dir
let getLangDirection = localStorage.getItem("langDirection")
if(getLangDirection){
  if(getLangDirection == "rtl"){
    changeDir("rtl")
  }else {
    changeDir("ltr")
  }
}
// direction longue
// vars
let en = document.getElementById("en-lang");
let ar = document.getElementById("ar-lang");

en.addEventListener("click", () =>  changeDir("ltr"))
ar.addEventListener("click", () =>  changeDir("rtl"))

function changeDir(Dir){
  document.documentElement.setAttribute("Dir", Dir)
  localStorage.setItem("langDirection" , Dir)
}

if(window.navigator.language == "ar"){
  function changeDir(Dir){
    document.documentElement.setAttribute("Dir", Dir)
    localStorage.setItem("langDirection" , Dir)
  }
  changeDir("rtl")

} else{
  function changeDir(Dir){
    document.documentElement.setAttribute("Dir", Dir)
    localStorage.setItem("langDirection" , Dir)
    }
    changeDir("ltr")


}
