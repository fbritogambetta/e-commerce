//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const boton = document.getElementById("submitInformation")
const mail = document.getElementById("userEmail").value
const password = document.getElementById("password").value
const miStorage = window.localStorage

const loged = () =>  {
    miStorage.setItem("loged", true);
    window.location = "index.html";
}
document.addEventListener("DOMContentLoaded", function(e){
    boton.onclick = loged()
});
