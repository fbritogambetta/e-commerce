//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const cargarLista = () => {
    fetch(PRODUCTS_URL)
        .then(data => data.json())
        .then(data => {
            filtrarOrdenar(data)
    })
}
const filtrarPorPrecio = (array, min, max) => {
    array.sort(valor => min <= valor && valor <= max);
    buscador(array);
}
function buscador(array) {
    let parametroDeBusqueda = document.getElementById("buscador").value;
    let text = parametroDeBusqueda.toLowerCase()
    let newArray = []
    for(let i of array) {
        if(i.name.includes(text) || i.description.includes(text)) {
            newArray.push(i)
        }
    }
    tabla(newArray)
}

function filtrarOrdenar(array)  {
    const criterio = document.querySelector("select").value;
    const pMin = document.getElementById("precioMin").value;
    const pMax = document.getElementById("precioMax").value;
    if(criterio === "asc") {array.sort((a, b) => {
        if(a.cost > b.cost) return 1;
        if(a.cost < b.cost) return -1;
        return 0;})
    }
    if(criterio === "desc") {array.sort((a, b) => {
        if(a.cost > b.cost) return -1;
        if(a.cost < b.cost) return 1;
        return 0;})
    }
    if(criterio === "masV") {array.sort((a, b) => {
        if(a.soldCount > b.soldCount) return -1;
        if(a.soldCount < b.soldCount) return 1;
        return 0;})
    }
    if(criterio === "menV") {array.sort((a, b) => {
        if(a.soldCount > b.soldCount) return 1;
        if(a.soldCount < b.soldCount) return -1;
        return 0;})
    }
    if(criterio === "az") array.sort((a,b) => a.name.localeCompare(b.name));
    if(criterio === "za") array.sort((a,b) => b.name.localeCompare(a.name));
    if(pMin !== "" && pMax === "" ) {filtrarPorPrecio(array, pMin, 100000)};
    if(pMin === "" && pMax !== "") {filtrarPorPrecio(array, 0, pMax)};
    if(pMin===""&&pMax==="") {buscador(array)}
}

function tabla(alpha) {
    const cacillas = document.getElementById("productListInformation");
    cacillas.innerHTML =``
    for(let valor of alpha)  {
        cacillas.innerHTML += `
        <tr>
          <td> <img class="imgRedonda" src="${ valor.imgSrc }"></td>
          <td>${ valor.name }</td>
          <td>${ valor.description }</td>
          <td>${ valor.cost }` + `(${ valor.currency})</td> 
        </tr>
        `
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    cargarLista();
    document.getElementById("ordenarPor").addEventListener("change", cargarLista);
    document.getElementById("precioMin").addEventListener("keypress", cargarLista)
    document.getElementById("precioMax").addEventListener("keypress", cargarLista)
    document.getElementById("buscador").addEventListener("keypress", cargarLista)
});