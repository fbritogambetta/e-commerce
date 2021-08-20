//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

const loged = () =>  {
    const username = document.getElementById("userEmail").value
    const password = document.getElementById("password").value
    if(username && password)  {
        sessionStorage.setItem("User", username);
        window.location="index.html";
    }   else    {
        alert("Complete los campos con información valida, gracias")
    }
}
document.addEventListener("DOMContentLoaded", function(e)   {
    document.getElementById("submitInformation").addEventListener("click", loged)
});
