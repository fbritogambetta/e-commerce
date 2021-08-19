//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let boton = document.getElementById("submitInformation")
function login(){
    sessionStorage.setItem("login", "true")
    local.location="index.html"
};
document.addEventListener("DOMContentLoaded", function(e){
    boton.onclick = login();
    }
)