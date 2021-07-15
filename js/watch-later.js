
let productsDom = document.querySelector("#watch-later-list")
// let empty = document.querySelector("#empty")



function cartProductDrawUi(allProducts = []){
    // if(JSON.parse(localStorage.getItem("watchLater")).length === 0)
    // empty.innerHTML="no products here !!"

    let products = JSON.parse(localStorage.getItem("watchLater")) ||  allProducts
    let productsUi = products.map((item) => {
      return `
      <div class="movies" >
      <div id="empty" > </div> 
                <div class="title title3">zaza</div>
                <img src=".${item.imageUrl}" alt="">
                <div class="info">
                <h4>${item.title}</h4>
                <ul>
                    <li>${item.date}</li>
                    <li> ${item.time}</li> 
                </ul>
                </div>
      </div>           
      `
    });
 
    productsDom.innerHTML = productsUi.join("");

  };
 
  cartProductDrawUi()
// // remove item
//  function removeFromCart(id){
// let productsInCart = localStorage.getItem("productsInCart")
//    if(productsInCart){
//     items = JSON.parse(productsInCart)
//     itemsFilter = items.filter((item) => item.id !== id)
//     localStorage.setItem("productsInCart", JSON.stringify(itemsFilter))
//     cartProductDrawUi(itemsFilter);
//    }
//  }