const showInfo = (array) => {
    document.getElementById("name").innerHTML = array.name;
    document.getElementById("description").innerHTML = array.description;
    document.getElementById("price").innerHTML = 'Precio: ' + array.cost + ' ' + array.currency;
    document.getElementById("category").innerHTML = 'Categoria: ' + array.category + '/Cantidad de ventas: ' + array.soldCount;
    showImgs(array);
    showRelatedProducts(array);
}
const showImgs = (array) => {
    const imgsLocation = array.images;
    const imgs = document.getElementById("imgs")
    for (let img of imgsLocation) {
        imgs.innerHTML += '<img class="img-fluid img-thumbnail desplegar" src="' + img + '">';
    }
}
const showRelatedProducts = (array) => {
    fetch(PRODUCTS_URL)
        .then(data => data.json())
        .then(data => {
            printCardOfArray(array, data)
        })
    
}
const printCardOfArray = (array1, array2) => {
    for(let value of array1.relatedProducts) {
        let = arrayElement = array2[value];
        printCard(arrayElement)
    }
}
const printCard = (array) => {
    document.getElementById("relatedProducts").innerHTML+=`
    <div class="card" style="width: 18rem;">
    <img src="${array.imgSrc}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${array.name}</h5>
      <p class="card-text">${array.description}</p>
      <a class="btn btn-primary">(${array.currency})${array.cost}</a>
    </div>
  </div>`
}
const showProductInfAndImg = (array) => {
    fetch(array)
        .then(data => data.json())
        .then(data => {
            showInfo(data)
        })
}
const showComments = (array) => {
    for (let valor of array) {
        document.getElementById("score").innerHTML += '<h6>' + valor.user + '</h6><p>Puntuación: ' + valor.score + '</p><p>' + valor.description + '</p><hr>'
    }
}
const showScoreAndComments = (array) => {
    fetch(array)
        .then(data => data.json())
        .then(data => {
            showComments(data)
        })
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    showProductInfAndImg(PRODUCT_INFO_URL);
    showScoreAndComments(PRODUCT_INFO_COMMENTS_URL);
});