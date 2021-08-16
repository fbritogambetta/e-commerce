//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let validacionTerminado = () => {
    document.getElementById("redireccionALogin").remove;
    window.location.href="index.html";
}
//eliminar el elemento meta que redirecciona a login en el index.html

document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("submitInformation").onclick = () => {
        validacionTerminado();
    }
});