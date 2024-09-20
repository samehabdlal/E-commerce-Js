let products=JSON.parse(localStorage.getItem('product')) || []
let allproducts=document.querySelector('.allproduct')
let lencaart=document.querySelector('.lenghtcart')
// all products is docment html
function getallproducts(){
if(products){
    let all= products.map(product=> {
      if(product.image){
        return`
        <div class="card" style="border:${product.me=='Y'? '2px solid red':''}">
             <img src="${product?.image}" class="card-img-top" alt="${product.title}">
             <div class="card-body">
               <a onclick="detailsproduct(${product.id})"  href='../cartdetails/cartdetails.html' class="card-title">${product.title.substring(0, 12)}</a>
               <p  class="card-text pyramid-description ">${product.description.substring(0, 120)}</p>
                <li class='m-2'>price: ${product.price}</li>
                <button class="btn btn-danger w-auto" onclick="dleetproducts(${product.id})"><i class="fa-solid fa-trash"></i></button>
                </div>
           </div>
       `
      }
      })
      allproducts.innerHTML=all.join('')
      lencaart.innerHTML= products.length ? products.length : 0
}
if(products.length===0){
 document.querySelector('.noproducrt').innerHTML='no products'
  setTimeout(()=>{
    document.location='../home/home.html'
  })
}
}
getallproducts()
// delet products
function dleetproducts(id){
let  productsss= products.filter(item=>item.id !== id)
localStorage.setItem('product',JSON.stringify(productsss))
 products=JSON.parse(localStorage.getItem('product')) || []
 lencaart.innerHTML=products.length 
 getallproducts()
}
