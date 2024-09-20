let AuthDom = document.querySelector("#auth");
let UserDom = document.querySelector("#user");
let userinfo = document.querySelector("#userinfo");
let username = localStorage.getItem("username");
let logout = document.querySelector("#logout");

if (username) {
    AuthDom.style.display = "none";
    UserDom.style.display = "block";
    userinfo.innerHTML = username;
  } else {
    AuthDom.style.display = "inline-flex";
    UserDom.style.display = "none";
  }
  logout.addEventListener("click", function logout() {
    localStorage.removeItem('emial')
    localStorage.removeItem('password')
    localStorage.removeItem('username')
    localStorage.removeItem('Favouriteproduct')
    localStorage.removeItem('cartProducts')
    localStorage.removeItem('detailsproduct')
  });