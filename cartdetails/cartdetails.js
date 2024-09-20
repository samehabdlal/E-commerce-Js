let productdetails=JSON.parse(localStorage.getItem('detailsproduct'))
let product=document.querySelector('.product')
function productui(){
product.innerHTML=`
<div class="card" style="width: 100%;">
  <img src="${productdetails.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h1 class="card-text">${productdetails.title}</h1>
    <p class="card-description">${productdetails.description}</p>
    <ul>
    <li><h5 >price <span class='text-info'>${productdetails.price}</span></h5></li>
    <li><h5 >count <span class='text-info'>${productdetails.rating.count}</span></h5></li>
    <li><h5 >rate <span class='text-info'>${productdetails.rating.rate}</span></h5></li>
    </ul>
  </div>
</div>
`
}
productui()