//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

const loged = () =>  {
    sessionStorage.setItem("loged", true);
    window.location="index.html";
}

document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("submitInformation").addEventListener("click", loged)
});
