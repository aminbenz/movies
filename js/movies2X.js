let movies2X = document.getElementById("movies2X")
let movies = JSON.parse(localStorage.getItem("movies"))

// ./MOVIESPOST/10harrypotter.jpg
function drawMoviesHtml(){
    let  moviesHtml = movies.map((item) => {
      return `
      <div class="moviescontent" >
                <div class="moviepost"><img src=".${item.imageUrl}" alt=""></div>
                <div class="movieinfo">
                    <h2 class="title">${item.title}</h2>
                    <ul class="category">
                        <li>${item.category}</li>
                        <li> | ${item.date} |</li>
                        <li>${item.time}</li>
                    </ul>
                    <ul class="stars">
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star-half" aria-hidden="true"></i></li>
                    </ul>
                    <p>After being released from the mental asylum, Anna finds it difficult to adjust to her new life back home. She and her sister Alex then take it upon themselves to avenge their mother's death.
                      After being released from the mental asylum, Anna finds it difficult to adjust to her new life back home. She and her sister Alex then take it upon themselves to avenge their mother's death.
                  </p>
                  <form action="">
                      <input type="button" value="watch now" id="inputwatch" onclick="saveItemData(${item.id})">
                  </form>
                </div> <!--end movieinfo-->
                <div class="by">
                   <form action=""> <input type="button" value="by movie 40.TND"> </form>
                    <a >add to watch later</a>
                </div>
            </div>  <!--end moviecontent--></div>
      `
      
    });
  
    movies2X.innerHTML = moviesHtml.join('');
    
  }
  drawMoviesHtml();

  function saveItemData(id){
    localStorage.setItem("moviesId", id);
    window.location="../MOVIES-CARD/movies-card.html"
  }



