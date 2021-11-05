let json = []
const printProducts =(array)=>{
    const casillas = document.getElementById("productListInformation");
    for (let valor of array) {
        casillas.innerHTML+=`
        <tr>
        <td><img class="imgRedonda" src="${valor.src}"></td>
        <td>${valor.name}</td>
        <td><span id="unitCost">${valor.unitCost}</span><span id="productCurrency">(${valor.currency})</span></td>
        <td><input  type="number" min="0" id="productCount" size="6" value="${valor.count}"></td>
        <td id="subtotal">${valor.unitCost*valor.count}(${valor.currency})</td>
        </tr>`;
    }
}
const showCartProducts= async (array) => {
    const data = await fetch(array);
    const data_1 = await data.json();
    return (data_1);
}
const changeSubtotal = () => {
    const unitCost = document.getElementById("unitCost").innerHTML;
    const productCurrency = document.getElementById("productCurrency").innerHTML;
    const productCount = document.getElementById("productCount").value;
    const subtotal = document.getElementById("subtotal");
    const total = document.getElementById("total");
    const shippingType = document.querySelector("input[name=shippingOptions]:checked").value;
    subtotal.innerHTML=`${unitCost*productCount}${productCurrency}`;
    total.innerHTML=`<div>Valor compra: ${(unitCost*productCount).toFixed(2)} ${productCurrency}</div><div>Costo de envio: ${((unitCost*productCount*shippingType)-(unitCost*productCount)).toFixed(2)} ${productCurrency}</div><hr><div>Total${(unitCost*productCount*shippingType).toFixed(2)} ${productCurrency}</div>`;
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    showCartProducts(CART_INFO_URL)
    .then((data)=>{json = (data.articles);})
    .then(()=> {
        printProducts(json);
        changeSubtotal();
        document.getElementById("productCount").addEventListener("click", changeSubtotal);
        document.getElementById("shippingOptions").addEventListener("click", changeSubtotal);
    })
})