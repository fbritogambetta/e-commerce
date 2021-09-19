const showInfo = (array) => {
    document.getElementById("name").innerHTML = array.name;
    document.getElementById("description").innerHTML = array.description
    document.getElementById("price").innerHTML = 'Precio: ' + array.cost + ' ' + array.currency;
    document.getElementById("category").innerHTML = 'Categoria: ' + array.category + '/Cantidad de ventas: ' + array.soldCount;
    showImgs(array)
}
const showImgs = (array) => {
    const imgsLocation = array.images;
    const imgs = document.getElementById("imgs")
    for (let img of imgsLocation) {
        imgs.innerHTML+='<img class="img-fluid img-thumbnail desplegar" src="'+ img +'">';
    }
}
const showProductInfAndImg = () => {
    fetch(PRODUCT_INFO_URL)
        .then(data => data.json())
        .then(data => {
            showInfo(data)
        })
}
const showComments = (array) => {
    for(let valor of array) {
        document.getElementById("score").innerHTML+= '<h6>'+valor.user+'</h6><p>Puntuación: '+valor.score+'</p><p>'+valor.description+'</p><hr>'
}}
const showScoreAndComments = () => {
    fetch(PRODUCT_INFO_COMMENTS_URL)
        .then(data => data.json())
        .then(data => {
            showComments(data)
})}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    showProductInfAndImg()
    showScoreAndComments()
});