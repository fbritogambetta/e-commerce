//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const cargarLista = () => {
    fetch(PRODUCTS_URL)
        .then(data => data.json())
        .then(data => {
            buscador(data)
        })
}
function buscador(array) {
    let newArray = []
    const valor = document.getElementById("buscador");
    const parametro = valor.value.toLowerCase();
    for (let element of array) {
        let nombre = element.name.toLowerCase();
        let description = element.description.toLowerCase()
        if (nombre.indexOf(parametro) !== -1 || description.indexOf(parametro) !== -1) {
            newArray.push(element)
        }

    }
    filtrarOrdenar(newArray)
}

function filtrarOrdenar(array) {
    const criterio = document.querySelector("select").value;
    const min = document.getElementById("precioMin").value;
    const max = document.getElementById("precioMax").value;
    if (criterio === "asc") {
        array.sort((a, b) => {
            if (a.cost > b.cost) return 1;
            if (a.cost < b.cost) return -1;
            return 0;
        })
    }
    if (criterio === "desc") {
        array.sort((a, b) => {
            if (a.cost > b.cost) return -1;
            if (a.cost < b.cost) return 1;
            return 0;
        })
    }
    if (criterio === "masV") {
        array.sort((a, b) => {
            if (a.soldCount > b.soldCount) return -1;
            if (a.soldCount < b.soldCount) return 1;
            return 0;
        })
    }
    if (criterio === "menV") {
        array.sort((a, b) => {
            if (a.soldCount > b.soldCount) return 1;
            if (a.soldCount < b.soldCount) return -1;
            return 0;
        })
    }
    if (criterio === "az") array.sort((a, b) => a.name.localeCompare(b.name));
    if (criterio === "za") array.sort((a, b) => b.name.localeCompare(a.name));
    filtrarPorPrecio(array, min, max)
}
const filtrarPorPrecio = (array, min, max) => {
    tabla(array.filter(valor => valor.cost >= min && valor.cost <= max));
}
function tabla(alpha) {
    const casillas = document.getElementById("productListInformation");
    casillas.innerHTML = ``
    for (let valor of alpha) {
        casillas.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${valor.imgSrc}" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${valor.name}</h5>
        <p class="card-text">${valor.description}</p>
        <p class="card-text">Precio: ${valor.cost} (${valor.currency}</p>
      </div>
    </div>
  </div>
</div>`
    }
}
document.addEventListener("DOMContentLoaded", function (e) {
    cargarLista();
    document.getElementById("ordenarPor").addEventListener("change", cargarLista);
    document.getElementById("precioMin").addEventListener("keypress", cargarLista);
    document.getElementById("precioMax").addEventListener("keypress", cargarLista);
    document.getElementById("buscador").addEventListener("keypress", cargarLista);
    document.getElementById("productListInformation").addEventListener("click", () => window.location = "product-info.html")
});