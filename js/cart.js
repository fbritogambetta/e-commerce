let total = 0
const printProducts =(array)=>{
    const casillas = document.getElementById("productListInformation");
    for (let valor of array.articles) {
        casillas.innerHTML+=`
        <tr>
        <td><img class="imgRedonda" src="${valor.src}"></td>
        <td>${valor.name}</td>
        <td>${valor.unitCost} (${valor.currency})</td>
        <td><input  type="number" id="precioMin" size="6" value="${valor.count}"></td>
        <td>${valor.unitCost*valor.count} (${valor.currency})</td>
        </tr>`
        if(valor.currency==="UYU") total += valor.unitCost*valor.count;
    }
}
const showCartProducts= (array) => {
    fetch(array)
        .then(data => data.json())
        .then(data => {
            printProducts(data)
        })
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    showCartProducts(CART_INFO_URL)
});