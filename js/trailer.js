//youtube trailler
// variables 
let trailerDB = [
{
title:"Wonder Woman 1984 – Official Trailer",
cover:"./youtube-cover/0.jpg",
iframe:"https://www.youtube.com/embed/sfM7_JLk-84",
owner:"Warner Bros. Pictures",
time:"2:21",
},
{
title:"1917 - Official Trailer [HD]",
cover:"./youtube-cover/1.jpg",
iframe:"https://www.youtube.com/embed/gZjQROMAh_s",
owner:"Universal Pictures",
time:"3:22",
},
{
title:"MERMAID - Official Trailer",
cover:"./youtube-cover/2.jpg",
iframe:"https://www.youtube.com/embed/85Qfwwlo4bw",
owner:"ColumbiaPicturesPhils",
time:"3:24",
},
{
title:"Avengers: Infinity War Official Trailer",
cover:"./youtube-cover/3.jpg",
iframe:"https://www.youtube.com/embed/6ZfuNTqbHE8",
owner:"Marvel Entertainment",
time:"1:22",
},
{title:"Thor: The Dark World Official Trailer HD",
cover:"./youtube-cover/4.jpg",
iframe:"https://www.youtube.com/embed/npvJ9FTgZbM",
owner:"Marvel Entertainment",
time:"4:22",
}, 
{title:"JAMES BOND 007: NO TIME TO DIE Trailer",
cover:"./youtube-cover/5.jpg",
iframe:"https://www.youtube.com/embed/yHafN0M2kl0",
owner:"FilmSelect Trailer",
time:"2:42",
},
{title:"Hacker - Trailer",
cover:"./youtube-cover/6.jpg",
iframe:"https://www.youtube.com/embed/y8HsD9qmTiY",
owner:"amin benz",
time:"1:22",
},
{title:"Sonic The Hedgehog (2020)",
cover:"./youtube-cover/7.jpg",
iframe:"https://www.youtube.com/embed/szby7ZHLnkA",
owner:"Paramount Pictures",
time:"2:26",
},
]; 

let trailerContent = document.getElementById("trailer-dom")
let youtube = document.getElementsByClassName("youtube")
let displayMovie = document.querySelector(".iframe1")

let currentMovie = 0
function drawtrailerUi(trailers) {
   let theTrailers = trailers.map((trailer) => {
      return `
        <div class="section-youtube-containt" >
            <div class="img"> <img src="./${trailer.cover}" alt=""></div>
            <iframe class="iframe2" style="display:none; width="0" height="0" src="${trailer.iframe}" ></iframe>
            <div class="info-trailer" style="font-family: roboto;">
               <h3 class="title-section-youtube">${trailer.title}</h3>
               <h4 class="owner-section-youtube">${trailer.owner}</h4>
               <h5 class="time">${trailer.time}</h5>
            </div> <!-- end info trailer-->
        </div>
        `;
   });

   trailerContent.innerHTML = theTrailers.join("");
   displayMovie.src = trailers[currentMovie].iframe
   
}
drawtrailerUi(trailerDB);

// active and add src to diplay Movie
let contents = document.querySelectorAll(".section-youtube-containt")
// active current movie 
contents[currentMovie].classList.add("trailer-active")
//  add src to diplay Movie and active
contents.forEach(content => {
   content.addEventListener("click", (e) => {
      contents.forEach(content => {
         content.classList.remove("trailer-active")
      })
      displayMovie.src =  e.currentTarget.querySelector('iframe').src
      e.currentTarget.classList.add("trailer-active")
   })
})