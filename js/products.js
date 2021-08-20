//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const url = "https://japdevdep.github.io/ecommerce-api/product/all.json"

const cacillas = document.getElementById("productListInformation")

function tabla(alpha) {
    for(let valor of alpha)  {
        cacillas.innerHTML += `
        <tr>
          <td>${ valor.name }</td>
          <td>${ valor.description }</td>
          <td>(${ valor.currency})` + ` ${ valor.cost }</td> 
        </tr>
        `
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    fetch(url)
        .then(data => data.json())
        .then(data => {
            tabla(data)
        })
        
});