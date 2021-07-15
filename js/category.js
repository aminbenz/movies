
let movies = moviesDB
// movies

let moviesJs = document.getElementById("moviesJs");

let drawMoviesHtml;
(drawMoviesHtml =function (movies = []){
  let  moviesHtml = movies.map((item) => {
    return `
   
 <div class="movies-posters">
     

      <img class="image" src=".${item.imageUrl}" alt="${item.title} movie"> 

        <div class="in-movies in-movies-category">

              <li class="quality">${item.quality[0]}</li>
              <li class="title-in-movie
              ">${item.desc}</li>

              <div class="block"> 
                 <svg id="icon-save" onclick=" addtowatchlater(${item.id})" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                 <svg id="icon-heart" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>

                   <i onclick="saveItemData(${item.id})" class="fa fa-play-circle" aria-hidden="true" id="play"></i> 

              <div class="stars">
            <i class="fa fa-star" aria-hidden="true" id="i1"></i>
            <i class="fa fa-star" aria-hidden="true" id="i2"></i>
            <i class="fa fa-star" aria-hidden="true" id="i3"></i>
            <i class="fa fa-star" aria-hidden="true" id="i4"></i>
            <i class="fa fa-star" aria-hidden="true" id="i5"></i>
              </div>  
   
       </div>

              <div class="info-movie">
                <h4 class="title">${item.title}</h4>
                <h6 class="category">${item.category}</h6>
                <h6 class="category category-2">(${item.date}) - ${item.time} </h6>
             </div>

 </div>
 
    `
  });

  moviesJs.innerHTML = moviesHtml.join('');
  
})(JSON.parse(localStorage.getItem("movies"))) || movies;


function saveItemData(id){
  localStorage.setItem("moviesId", id);
  window.location="../MOVIES-CARD/movies-card.html"
}

{/* <i id="icon-save" class="fa fa-bookmark-o" aria-hidden="true"  style="color: ${item.watchLater === true && '#5DADE2' }"  onclick=" addtowatchlater(${item.id})"></i>   */}


// add to favorite
let watchLaterItems =localStorage.getItem("watchLater") ? 
JSON.parse(localStorage.getItem("watchLater")) : [];


function addtowatchlater(id){
  if(localStorage.getItem("username")){
let choosenItem = movies.find((item) => item.id === id);
choosenItem.watchLater = true

watchLaterItems = [...watchLaterItems, choosenItem];
    localStorage.setItem("watchLater", JSON.stringify(watchLaterItems))
    movies.map(item => {
      if(item.id === choosenItem.id ){
        item.watchLater= true
      }
    })
   localStorage.setItem("movies", JSON.stringify(movies))
   drawMoviesHtml(movies)
  } else {
    window.location ="../MOVIES-LOGINxSIGNUP/login.html";
  };
}


// hover in movie imag and go

let inMovie = document.querySelectorAll(".in-movies")


inMovie.forEach(Ele => {
  Ele.addEventListener("mouseenter", function(){
    this.classList.add("inmovie-gradian")
  })

  Ele.addEventListener("mouseleave", function(){
    this.classList.remove("inmovie-gradian")
  })


  

});


// filter by genre
let filterByGenre = document.getElementById("filter-test-select")

filterByGenre.addEventListener("change", filtredByGenre)

function filtredByGenre(e){
  let val = e.target.value;
  let movies = JSON.parse(localStorage.getItem('movies')) || moviesDB
  
  if(val === "all"){
    drawMoviesHtml(movies);

  }  else{
    movies = movies.filter( (item) => item.category == val);
    drawMoviesHtml(movies);
  }
}

// filter by type
let filterByType = document.getElementById("filter-type-select")


filterByType.addEventListener("change", filtredByType)

function filtredByType(e){
  let val = e.target.value;
  let movies = JSON.parse(localStorage.getItem('movies')) || moviesDB
  

  if(val === "all"){
    drawMoviesHtml(movies);

  }  else{
    movies = movies.filter( (item) => item.type === val);
    drawMoviesHtml(movies);
  }
}

// filter by quality
let filterByQuality = document.getElementById("filter-quality-select")

filterByQuality.addEventListener("change", filtredByQuality)

function filtredByQuality(e){
  let val = e.target.value;
  let movies = JSON.parse(localStorage.getItem('movies')) || moviesDB
  
  

  if(val === "all"){
    drawMoviesHtml(movies);

  }  else{
    movies = movies.filter( (item) => item.quality === val);
    drawMoviesHtml(movies);
  }
}

// filter by year
let filterByDate = document.getElementById("filter-year-select")

let years;
function generateByYears (start,end) {

  for(years = end ; years >= start; years-- ) {
    filterByDate.innerHTML += `<option value="${years}"> ${years} </option>`
  }
  filterByDate.innerHTML += `<option value="all"> all </option>`


}
generateByYears (1990,2022)

filterByDate.addEventListener("change", filtredByDate)

function filtredByDate(e){
  let val = e.target.value;
  let movies = JSON.parse(localStorage.getItem('movies')) || moviesDB
  
  

  if(val === "all"){
    drawMoviesHtml(movies);

  }  else{
    movies = movies.filter( (item) => item.date === val);
    drawMoviesHtml(movies);
  }
}

