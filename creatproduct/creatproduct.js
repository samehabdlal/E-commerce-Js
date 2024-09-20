// varipls
let productname = document.querySelector("#product-name");
let prodDescription = document.querySelector("#product-description");
let creatForm = document.querySelector("#creat-form");
let productsize = document.querySelector("#product-size");
let creatProduct = document.querySelector(".creatproduct");
let inputfile = document.querySelector("#input-file");
let size;
let productimage;
// event
productsize.addEventListener("change", getsizevalue);
creatProduct.addEventListener("click", cratproduct);
inputfile.addEventListener("change", uploadimg);
// functions
// TODO // GET SIZE IS INPUT
function getsizevalue(e) {
  size = e.target.value;
}
function cratproduct(e) {
  e.preventDefault();
  let allproducts = JSON.parse(localStorage.getItem("product"));
  let name = productname.value;
  let opj = {
    id: allproducts.length + 1,
    image: productimage,
    title: name,
    price: size,
    description: prodDescription.value,
    updatedAt: "2024-09-08T23:01:06.000Z",
    me:'Y'
  };
  if (name !== "" && prodDescription.value !== "") {
    let newproducts = [...allproducts, opj];
    localStorage.setItem("product", JSON.stringify(newproducts));
    productname.value = "";
    prodDescription.value = "";
    creatForm.value = "";
    Swal.fire({
      position: "center",
      icon: "success",
      title: "The item was added successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      title: "Please fill out the fields",
      icon: "error",
    });
  }
}

// getinput
let prveow;
function uploadimg() {
  let file = this.files[0];
  readfile64(file);
  let types = ["image/jpeg", "image/png"];
  if (types.indexOf(file.type) == -1) {
    Swal.fire({
      title: "type not suported",
      icon: "error",
    });
    return false;
  }
  if (file.size == 2 * 1024 * 1024) {
    Swal.fire({
      title: "Img not Exced 2MG",
      icon: "error",
    });
    return false;
  }

}
function readfile64(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    productimage = reader.result;
  };
}
