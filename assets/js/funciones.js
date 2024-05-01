document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault()
    
    // valor del campo
    let nombre = document.getElementById("nombre").value
    let asunto = document.getElementById("asunto").value
    let mensaje = document.getElementById("mensaje").value
    let validacion = /^[a-zA-Z]+$/

//validacion inputs
if (validacion.test(nombre) || validacion.test(asunto)|| validacion.test(mensaje)){
    document.querySelector(".resultado").innerHTML = "Mensaje enviado correctamente!!"
    
}else {
    document.querySelector(".errorNombre").innerHTML = "el nombre es requerido!!"
    document.querySelector(".errorAsunto").innerHTML = "el asunto es requerido!!"
    document.querySelector(".errorMensaje").innerHTML = "el mensaje es requerido!!"

}
})

