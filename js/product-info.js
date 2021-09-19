const showInfo = (array) => {
    document.getElementById("name").innerHTML = array.name;
    document.getElementById("description").innerHTML = array.description
    document.getElementById("price").innerHTML = array.currency + ' ' + array.cost;
    document.getElementById("category").innerHTML = 'Categoria: ' + array.category;
    showImgs(array)
}
const showImgs = (array) => {
    const imgsLocation = array.images;
    const imgs = document.getElementById("imgs")
    for (let img of imgsLocation) {
        imgs.innerHTML+='<img src="'+ valor +'">';
    }
}
const showProductInfAndImg = () => {
    fetch(PRODUCT_INFO_URL)
        .then(data => data.json())
        .then(data => {
            showInfo(data)
        })
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    showProductInfAndImg()
});