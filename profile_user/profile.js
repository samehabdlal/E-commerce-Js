// get variple
const names = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const lengthproduct = document.querySelector(".lengthproduct");
// get data is localstoreg
const dataname = localStorage.getItem("username");
const dataemail = localStorage.getItem("emial");
const datapassword = localStorage.getItem("password");
const datalenthproduct = JSON.parse(localStorage.getItem("cartProducts")) || 0
// set data is elment
names.innerHTML = dataname;
email.innerHTML = dataemail;
password.innerHTML = dataemail;
lengthproduct.innerHTML = datalenthproduct.length || 0
const btnedit = document.querySelector(".edit");
const body = document.querySelector(".body");
const setting = document.querySelector(".setting");
const edituser = document.querySelector(".edituser");
// input sedit data username
const usernames = document.querySelector("#name");
const editemail = document.querySelector("#editemail");
const editpassword = document.querySelector("#editpassword");

btnedit.addEventListener("click", function () {
  body.style.display = "none";
  btnedit.style.display = "none";
  setting.style.display = "block";
});
// edit data is user
edituser.addEventListener("click", function () {
  if (usernames.value !== "") {
    localStorage.setItem("username", usernames.value);
    localStorage.setItem("emial", editemail.value);
    localStorage.setItem("password", editpassword.value);
    names.innerHTML = localStorage.getItem("username");
    email.innerHTML =localStorage.getItem("emial");
    password.innerHTML = localStorage.getItem("password");
    usernames.value=''
    editemail.value=''
    editpassword.value=''
    Swal.fire({
        position: "center",
        icon: "success",
        title: "The picture has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        body.style.display = "block";
        setting.style.display = "none";
        btnedit.style.display = "block";
       }, 1500);
  } else {
    Swal.fire({
        position: "center",
        icon: "info",
        title: "Please fill out the fields",
        showConfirmButton: false,
        timer: 2000,
      });
  }
});
