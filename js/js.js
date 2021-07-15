
// loading
var loader = document.getElementById("loader-bk")

window.addEventListener("load" , loading)

function loading(){
    loader.classList.add("loader-disable")
}

// btn to scrool to top
let btnToTop = document.getElementById("btn-to-top")

window.onscroll = function (){
  if(window.pageYOffset >= 700){
    btnToTop.style.opacity ="1"
  }else if(window.pageYOffset < 70){
    btnToTop.style.opacity= "0"
  } 
}

btnToTop.addEventListener("click", function(){
  window.scrollTo(0,0)
})


// declare variables
var relasedate= document.getElementById("relase-date-title")
var relasedatecontent= document.getElementById("dropdawn-relasedate") 

var filterRelase = document.getElementById("filter-relase")


var generalfilter = document.getElementById("generalfilter")
var generalfiltercontent = document.getElementById("generalfiltercontent");

generalfilter.onclick = function(e) { 

    if(generalfiltercontent.style.visibility == "visible") {
        generalfiltercontent.style.visibility = "hidden";
    } else {
        generalfiltercontent.style.visibility = "visible";
    }
 };
 generalfilter.style.cursor="pointer";


var genre = document.getElementById("genre-title")
var genrecontent = document.getElementById("genre-content")
var genrehover = document.getElementById("genrehover")
var bb = document.getElementById("bb")
var igenre = document.getElementById("igenre")

var filtericon = document.getElementById("filtericon")
var filteri = document.getElementById("filter-i")

var logoprofile = document.getElementById("lgprofile")
var logoprofilecontent = document.getElementById("lgprofilecontent")

// side bar
// var menu = document.getElementById("menu")

// menu.onclick = function() { 
    
//     if(menucontent.style.left=="0%") {
//         menucontent.style.left="-30%";
//         menucontent.style.width="0vh"

//     } else {
//         menucontent.style.left="0%";
//     menucontent.style.width="52vh"

//     }
//  };

// genre show
genre.onclick = function(){
    if(genrehover.style.visibility !== "visible"){
        genrehover.style.visibility="visible"
        genrehover.style.transform = "translate(5%,0%)"
        genre.innerHTML="close"
        genre.style.color=" #3b5998"
        igenre.style.transform= "rotate(180deg)"
    } else {
        genrehover.style.visibility="hidden"
        genrehover.style.transform = "translate(-120%,-0%)"
        genre.innerHTML="genre"
        genre.style.color="rgb(236 236 236)"
        igenre.style.transform= "rotate(0deg)"

    }

}  

// notifiacation
var iconNotification = document.querySelector(".notification")
var innerNotification = document.querySelector(".inner-notification")

iconNotification.onclick = function() { 
    innerNotification.classList.toggle("show")
 };

                       

logoprofile.onclick = function() { 

    if(logoprofilecontent.style.display == "block") {
        logoprofilecontent.style.display = "none";
    } else {
        logoprofilecontent.style.display = "block";
    }
 };


relasedate.onclick = function() { 

   if(relasedatecontent.style.display == "block") {
    relasedatecontent.style.display = "none";
   } else {
    relasedatecontent.style.display = "block";
   }
};





