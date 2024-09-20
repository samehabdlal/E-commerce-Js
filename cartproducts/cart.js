let cartbody = document.querySelector(".allproduct");
let cartlength = document.querySelector(".legthcart")
let noproduct = document.querySelector(".noproducrt")
function getproduct(allproducts=[]) {
  let products= JSON.parse(localStorage.getItem("cartProducts")) || allproducts
  if(products.length===0) {
    noproduct.innerHTML='There are no items. You will be transferred to Home'
    setTimeout(() => {
     window.location='../home/home.html'
   }, 3000);
  }
  cartlength.innerHTML=`Number of products ${products.length}`;
     let productUi= products.map(item=>{
      return `
<div class="card  p-2 " >
    <img src="${item?.image}" class="card-img-top" alt="${item.name}">
  <div class="card-body">
    <h5 class="card-title text-center">${item.title}</h5>
    <p class="card-title text-center">${item.description}</p>
    <a class="btn btn-danger" onclick='removeitem(${item.id})'>remove in cart</a>
  </div>
</div>
     `;
  })
  cartbody.innerHTML=productUi.join('')
  }
getproduct();
function removeitem(id){
  let productIncart =localStorage.getItem('cartProducts')
  if(productIncart){
     let items=JSON.parse(productIncart)
    let filterditems=items.filter(item=>item.id !== id)
    localStorage.setItem ("cartProducts",JSON.stringify(filterditems))
    getproduct(filterditems)
  }

}