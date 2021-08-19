//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const boton = document.getElementById("submitInformation")
const mail = document.getElementById("userEmail")
const password = document.getElementById("userPassword")

function loged() {
    localStorage.setItem("loged", true)
};
document.addEventListener("DOMContentLoaded", function(e){
    if((mail.value != "") && (password.value != ""))    {
        boton.addEventListener("click", loged);
        window.location = "index.html";
    }
});
