let productdetails=JSON.parse(localStorage.getItem('Favouriteproduct')) || []
let product=document.querySelector('.product')
let noproduct=document.querySelector('.noproduct')
function productui(products=[]){
  products=productdetails || []
   productdetails.length==0 ?noproduct.style.display='block': noproduct.style.display='none'
 let pro=  products.map(item=>{
      return `
<div class="card m-0 p-0 h-auto">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-text">${item.title.substring(0,12)}</h3>
    <p>creationAt ${item.creationAt}</p>
     <button class='btn btn-danger delet ' onclick='deletfavorite(${item.id})'><i class="fa-solid fa-trash"></i></button> 
</div>
</div>
`
  })
  product.innerHTML=pro.join('')
}
productui()
// delet products
function deletfavorite(id){
  let productss=JSON.parse(localStorage.getItem('product'))
productss.filter(item=>{
  if(item.id==id){
    item.like=false
   localStorage.setItem("product", JSON.stringify(productss));
  }
} )
  const index = productdetails.findIndex((item) => item.id === id);
  if (index !== -1) {
   let therest= productdetails.splice(index, 1);
   localStorage.setItem("Favouriteproduct", JSON.stringify(productdetails));
    productui(therest)
}
console.log(productdetails);
}