
let wlc = document.getElementById('wlc')
let article = document.getElementById("article")
let movies = moviesDB

// display  movies
let moviesJs = document.getElementById("moviesJs");

let drawMoviesUi;
(drawMoviesUi = function (movies = []){

  for(var i = 0; i < 14; i++ ){

  moviesJs.innerHTML +=  `
  <div class="moviesposters" >
  <a  id="playa" style="cursor:pointer;">
      <img src="${moviesDB[i].imageUrl}" alt="${moviesDB[i].title} movie"> 
      <ul class="inmovies" onclick="saveItemData(${moviesDB[i].id})">
          <li class="titleinmovie">${moviesDB[i].title}</li>
        <div class="block">
        <span id="date">${moviesDB[i].date}</span>
        <i class="fa fa-clock-o" aria-hidden="true" id="icondate"> </i> </div>
         <i class="fa fa-play fa-2x" aria-hidden="true" id="play" ></i> 
        <div class="stars">
        <i class="fa fa-star" aria-hidden="true" id="i1"></i>
        <i class="fa fa-star" aria-hidden="true" id="i2"></i>
        <i class="fa fa-star" aria-hidden="true" id="i3"></i>
        <i class="fa fa-star" aria-hidden="true" id="i4"></i>
        <i class="fa fa-star" aria-hidden="true" id="i5"></i>
       </div>  
  

      </ul>
  </a>

      <div class="info_movie" style="curser:none;">
          <h4 class="title">${moviesDB[i].title}</h4>
          <h6 class="category">${moviesDB[i].category}</h6>
      </div>
  </div>
  `;

  }

})(JSON.parse(localStorage.getItem("movies"))) || movies;


function saveItemData(id){
  localStorage.setItem("moviesId", id);
  window.location="./MOVIES-CARD/movies-card.html"
}

// my name profile in nav bar 1
myNameInDataBase = localStorage.getItem("username")
myName = document.getElementById("my-name")

myName.innerHTML = myNameInDataBase;

