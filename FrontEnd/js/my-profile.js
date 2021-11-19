const saveData = () =>{
    const userUsername = document.getElementById("username").value;
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const eMail = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    localStorage.setItem("data", JSON.stringify({"username": userUsername, "name": name, "lastname": lastName, "age": age,"email": eMail,"phone": phone, "completed": true}));
    alert(`¡Muchas gracias por completar tus datos ${name}, ya puedes comenzar tus compras!`)
}
const showData = () =>{
    let data = JSON.parse(localStorage.getItem("data"))
    if(data.completed) {
        document.getElementById("username").value = data.username;
        document.getElementById("name").value = data.name;
        document.getElementById("lastname").value = data.lastname;
        document.getElementById("age").value = data.age;
        document.getElementById("email").value = data.email;
        document.getElementById("phone").value = data.phone;
    }
    else{alert("¡Por favor complete sus datos!")}
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("btnSubmit").addEventListener("click", (e) =>{
        (e).preventDefault();
        saveData();
    })
    showData();
});