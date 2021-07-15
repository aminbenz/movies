

// search function
let input  = document.getElementById("search")

input.addEventListener("keyup", function(e){
  if(e.keyCode === 13){
    search(e.target.value.trim().toLowerCase(), JSON.parse(localStorage.getItem("movies"))) || movies
  } if(e.target.value === ""){
    drawMoviesUi(JSON.parse(localStorage.getItem("movies"))) || movies
  }
})

function search(title, myarr){

  let arr = myarr.filter(item => item.title.indexOf(title) !==  -1 )
  drawMoviesUi(arr);
}

