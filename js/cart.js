let array = []
const printProducts =(array)=>{
    const casillas = document.getElementById("productListInformation");
    for (let valor of array) {
        casillas.innerHTML+=`
        <tr>
        <td><img class="imgRedonda" src="${valor.src}"></td>
        <td>${valor.name}</td>
        <td><span id="unitCost">${valor.unitCost}</span><span id="productCurrency">(${valor.currency})</span></td>
        <td><input  type="number" id="productCount" size="6" value="${valor.count}"></td>
        <td id="subtotal">${valor.unitCost*valor.count}(${valor.currency})</td>
        </tr>`

    }
}
const showCartProducts= async (array) => {
    const data = await fetch(array);
    const data_1 = await data.json();
    return (data_1);
}
const changeSubtotal = () => {
    const unitCost = document.getElementById("unitCost").innerHTML;
    const productCurrency = document.getElementById("productCurrency").innerHTML
    const productCount = document.getElementById("productCount").value;
    const subtotal = document.getElementById("subtotal");
    subtotal.innerHTML=`${unitCost*productCount}${productCurrency}`
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    showCartProducts(CART_INFO_URL)
    .then((data)=>{array = (data.articles);})
    .then(()=> {
        printProducts(array);
        document.getElementById("productCount").addEventListener("click", changeSubtotal);
    })
})