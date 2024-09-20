// DOM Elements
const addCartBtn = document.querySelector("#addcart");
const badge = document.querySelector(".padge");
const cartMenu = document.querySelector("#carts");
const openCartBtn = document.querySelector(".counter");
const closeCartBtn = document.querySelector(".close");
const loader = document.querySelector(".loader");
const productList = document.querySelector(".allproduct");
const card = document.getElementById("cardserch");
const cardContainer = document.querySelector("#card");
const elementselct = document.querySelector(".form-select");
const search = document.querySelector(".search");
const searchelment = document.querySelector(".searchelment");
const apiUrl = "https://fakestoreapi.com/products";

// Local Storage & Data
let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
let data = JSON.parse(localStorage.getItem("product"));
let arrFavourite = JSON.parse(localStorage.getItem("Favouriteproduct")) || [];
// Fetch API data
function fetchData() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("product", JSON.stringify(data));
      updateCartUI();
    });
  badge.innerHTML = cartProducts.length;
  // Hide badge if cart is empty
  if (badge.innerHTML === "0") {
    badge.style.display = "none";
  }
}
fetchData();
displayProducts();
// Check if user is logged in before adding product
function checkLoggedUser(id) {
  if (username) {
    addToCart(id);
  } else {
    window.location = "../auth/rsgister/register.html";
  }
}
updateCartUI();
// Add product to cart
function addToCart(id) {
  cartMenu.innerHTML = "";
  const product = data.find((item) => item.id === id);
  // Prevent duplicate entries
  if (!cartProducts.find((item) => item.id === product.id)) {
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
    updateCartUI();
  } else {
    updateCartUI();
    swal.fire({
      title: "It was added to the ladder before",
      confirmButtonText: "oK",
    });
  }

  // Update badge count
  badge.innerHTML = cartProducts.length;
  badge.style.display = "inline-block";
}

// Update cart UI
function updateCartUI() {
  cartMenu.innerHTML = "";
  cartProducts.forEach((item) => {
    cartMenu.innerHTML += `
      <div id='product'>
        <img class="imgcart" src="${item?.image}" alt="${item.title}">
        <span class="float-end desc text-white">${item.title}</span>
      </div>`;
  });
  badge.innerHTML = cartProducts.length;
}
// Display all products
function displayProducts() {
  loader.style.display = "block";
  setTimeout(() => {
    loader.style.display = "none";
    let po = data.map((product) => {
      if (product.image) {
        return `
        <div class="card" style="border:${
          product.me == "Y" ? "2px solid red" : ""
        }">
          <img src="${product?.image}" class="card-img-top" alt="${
          product.title
        }">
          <div class="card-body">
            <a onclick="detailsproduct(${
              product.id
            })"  href='../cartdetails/cartdetails.html' class="card-title">${product.title.substring(
          0,
          12
        )}</a>
            <a onclick="Favourite(${
              product.id
            })" class="favorite"  cass="card-title">
             <i class="${
               product.like == true
                 ? "fa-solid fa-heart"
                 : "fa-regular favorite fa-heart float-end"
             }   " style="color :${product.like == true ? "red" : ""}"></i></a>
            <p  class="card-text pyramid-description card-description ">${product.description.substring(
              0,
              120
            )}</p>
             <li class='m-2'>price: ${product.price}</li>
             <button class="btn btn-info w-100" onclick="checkLoggedUser(${
               product.id
             })">Add to Cart</button>
              ${
                product.me === "Y"
                  ? '<button class="btn btn-warning mt-2 float-end">edit prodict</button>'
                  : ""
              }
             </div>
        </div>
        `;
      }
    });

    cardContainer.innerHTML = po.join("");
  }, 500);
}
function detailsproduct(id) {
  let items = data.find((item) => item.id == id);
  localStorage.setItem("detailsproduct", JSON.stringify(items));
}
// click add to Favourite
function Favourite(id) {
  if (username) {
    let items = data.find((item) => item.id == id);
    let af = arrFavourite.find((i) => i.id == id);
    if (af) {
      alert("add to favorite");
    } else {
      items.like = true;
      data.map((item) => {
        if (item.id == items.id) {
          item.like = true;
        }
      });
      arrFavourite.push(items);
      localStorage.setItem("product", JSON.stringify(data));
      data = JSON.parse(localStorage.getItem("product"));
      console.log(data);
      displayProducts();
      localStorage.setItem("Favouriteproduct", JSON.stringify(arrFavourite));
    }
  } else {
    window.location = "../auth/rsgister/register.html";
  }
}
// Toggle cart menu visibility
function toggleCartMenu() {
  if (badge.innerHTML != "0") {
    productList.style.display =
      productList.style.display === "block" ? "none" : "block";
    badge.style.display = "inline-block";
  }
}
//TODO ////////////////////////// fuction serch
let serch = document.getElementById("serchname");
serch.addEventListener("keyup", function (e) {
  if (e.target.value == "") {
    card.style.display = "none";
    cardContainer.style.display = "grid";
  } else {
    serchname(e.target.value, JSON.parse(localStorage.getItem("product")));
  }
});
function serchname(name, arry) {
  let product = arry.find(
    (item) => item.title.toLowerCase().indexOf(name.toLowerCase()) !== -1
  );
  if (product) {
    card.style.display = "block";
    cardContainer.style.display = "none";
    console.log(product);
    card.innerHTML = `
           <div class="card">
            <img src="${product?.image}" class="card-img-top " alt="${product.title}">
            <div class="card-body">
              <a onclick="proo(${product.id})"  href='../cartdetails/cartdetails.html' class="card-title">${product.title}</a>
              <p  class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button class="btn btn-info w-100" onclick="checkLoggedUser(${product.id})">Add to Cart</button>
            </div>
          </div>
      `;
  } else {
    cardContainer.style.display = "grid";
    card.style.display = "none";
  }
}
// TODO //////////////////////////// (END fuction serch )
// Event Listeners for opening and closing the cart menu
closeCartBtn.addEventListener("click", toggleCartMenu);
openCartBtn.addEventListener("click", toggleCartMenu);
// hidden select
window.addEventListener("scroll", function () {
  let bodyWidthWithBorder = document.body.offsetWidth;
  let scrollPosition = window.scrollY;
  if (bodyWidthWithBorder === 1007) {
    elementselct.style.display = "block";
  } else {
    if (scrollPosition > 1132) {
      elementselct.style.display = "none";
    } else {
      elementselct.style.display = "block";
    }
  }
});
elementselct.addEventListener("change", filterselectcategory);
function filterselectcategory(e) {
  let catgories = e.target.value;
  let allproducts = JSON.parse(localStorage.getItem("product"));
  if (catgories === "all") {
    data = allproducts;
    displayProducts();
  } else {
    allproducts = allproducts.filter((i) => i.category === catgories);
    data = allproducts;
    displayProducts();
  }
}
search.addEventListener('click',function (){
  if (searchelment.style.right === '0px') {
    searchelment.style.right = '1000px'; 
  } else {
    searchelment.style.right = '0'; // فتح العنصر
  }
})