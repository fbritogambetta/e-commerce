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
    total.innerHTML=`<div>Valor compra: ${(unitCost*productCount).toFixed(2)} ${productCurrency}</div><div>Costo de envio: ${((unitCost*productCount*shippingType)-(unitCost*productCount)).toFixed(2)} ${productCurrency}</div><hr><div>Total: ${(unitCost*productCount*shippingType).toFixed(2)} ${productCurrency}</div>`;
}
const showModalData = () => {
    let data = JSON.parse(localStorage.getItem("data"));
    let direction = document.getElementById("direction").value;
    let country = document.getElementById("country").value;
    let paymentOptions = document.querySelector("input[name=paymentOptions]:checked").value;
    let shippingOptions = document.querySelector("input[name=shippingOptions]:checked").title;
    if(direction !== "" && country !== ""){
        const unitCost = document.getElementById("unitCost").innerHTML;
        const productCurrency = document.getElementById("productCurrency").innerHTML;
        const productCount = document.getElementById("productCount").value;
        const shippingType = document.querySelector("input[name=shippingOptions]:checked").value;
        document.getElementById("modalData").innerHTML=`<p>Cliente: ${data.name} ${data.lastname}</p><p>Dirección de envio: ${direction}, ${country}</p><p>Forma de pago: ${paymentOptions}</p><p>Forma de envio: ${shippingOptions}</p><hr><p align=right >Total a pagar: ${(unitCost*productCount*shippingType).toFixed(2)} ${productCurrency}</p>`;
        (function(){$(function(){$("#exampleModal").modal()});}());
    }
    else{alert("Complete todos los campos correctamente para realizar su compra, gracias")}
};
const boughtConfirmed = () =>{
    alert("Su compra se ha realizado con exito, gracias")
    location.href="index.html"
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
        document.getElementById("buy").addEventListener("click", (e)=>{
            e.preventDefault();
            showModalData;
        })
    })
})