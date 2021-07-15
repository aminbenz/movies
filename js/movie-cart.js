 let movies = JSON.parse(localStorage.getItem("movies"));
 let moviesId = localStorage.getItem("moviesId");
 let watch = document.getElementById("watch")



 let moviesCard = movies.find((item) => item.id == moviesId);

 watch.innerHTML =`
 
 
 <div class="movie-card-img">
 <a href="#movetomovie"> 
 <img src=".${moviesCard.imageUrl}" alt="${moviesCard.alt}">
 <div class="play"><i  class="fa fa-play fa-4x" aria-hidden="true"></i>
 </div>
 </a> <!- go direct film->
 </div>
 <div class="movie-card-info">
   <h2 class="title">${moviesCard.title}</h2>
   <ul class="moreinfo-top" style="padding: 0%;">
     <li>${moviesCard.time} | </li>
     <li style="color: #4466ad;"> ${moviesCard.category.replace(/, /g," • ")}</li>
     <li> | ${moviesCard.date} • TN</li>
     <li id="rate"><i class="fa fa-star " aria-hidden="true" style="color:gold;font-size:18px;"></i> ${moviesCard.rate}</li>
   </ul>
     <p>${moviesCard.desc}</p>
       <ul class="moreinfo-buttom" style="padding: 0%;">
         <li> <span> director: </span> <span>${moviesCard.director}</span> </li>
         <li> <span> writers: </span> <span>${moviesCard.writers}</span> </li>
         <li> <span> stars: </span> <span>${moviesCard.stars}</span> </li>
         <li> <span> quality: </span> <span  style="color:goldenrod;">${moviesCard.quality}</span> </li>
       </ul>
 </div>
 
 <div class="right-recommended">
       <div>a</div>
       <div>a</div>
       <div>e</div>
       <div>e</div>
</div>

 `

