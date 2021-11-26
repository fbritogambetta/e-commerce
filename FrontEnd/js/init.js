const CATEGORIES_URL = "https://local:3000/categories";
const PUBLISH_PRODUCT_URL = "https://local:3000/publishProducts";
const CATEGORY_INFO_URL = "https://local:3000/categoriesInfo";
const PRODUCTS_URL = "https://local:3000/products";
const PRODUCT_INFO_URL = "https://local:3000/productInfo";
const PRODUCT_INFO_COMMENTS_URL = "https://local:3000/producInfoComments";
const CART_INFO_URL = "https://local:3000/cartInfo";
const CART_BUY_URL = "https://local:3000/cartBuy";

var showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function (url) {
  var result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const incertUser = () => {
  const data = JSON.parse(localStorage.getItem("data"))
  document.querySelector("nav").innerHTML = `
  <div class="container d-flex flex-column flex-md-row justify-content-between">
    <a class="py-2 d-none d-md-inline-block" href="index.html">Inicio</a>
    <a class="py-2 d-none d-md-inline-block" href="categories.html">Categorías</a>
    <a class="py-2 d-none d-md-inline-block" href="products.html">Productos</a>
    <a class="py-2 d-none d-md-inline-block" href="sell.html">Vender</a>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${data.username}</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="cart.html">Mi carrito</a>
        <a class="dropdown-item" href="my-profile.html">Mi perfil</a>
        <a class="dropdown-item" href="login.html" onclick="logOut()">Cerrar sesión</a>
      </div>
  </div>`
}
const logOut = () => localStorage.clear();

const checkLogin = () => {
  if (!localStorage.getItem("data")) {
    window.location = "login.html"
  }
  incertUser()
}
document.addEventListener("DOMContentLoaded", function (e) {
  checkLogin();
});