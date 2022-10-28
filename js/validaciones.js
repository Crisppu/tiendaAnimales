
/*reutilizaremos este codigo */
// const inputNacimiento = document.querySelector("#birth");
// inputNacimiento.addEventListener("blur", (evento) => {
//     validarNacimiento(evento.target);
// });

export function valida(input) { // exportamos la funcion
    const tipoDeInput = input.dataset.tipo; //dataset decimos que nos muestre todos los data dentro de nuestro html y me muestre solo el que tenga por nombre tipo
   //console.log(tipoDeInput)
    //console.log(validadores[tipoDeInput])
    if (validadores[tipoDeInput]) { // le decimos si dentro de validadores existe e tipo de input
        validadores[tipoDeInput](input); //si existe le decimos
    }

    //console.log(input.parentElement)
    //introducir $0 y $0.validity en la consola del navegador
    if (input.validity.valid) { //verificamos si e valid es falso o verdadero
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""; //modificamos el span
    } else {
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);//modificamos el span

    }
}
//creamos un arreglo para no generar muchos if
const tipoDeErrores = ["valueMissing","typeMismatch","patternMismatch","customError"];

//creamos un objeto para mostrar que mensajes colocar
//introducir $0 y $0.validity en la consola del navegador
const mensajesDeError = {
    nombre: {
         //introducir $0 y $0.validity en la consola del navegador
        valueMissing: "este campo nombre no debe de estar vacio" // valueMissing en caso de que el campo este vacio
    },
    email: {
        //introducir $0 y $0.validity en la consola del navegador
        valueMissing: "este campo email no debe de estar vacio",
        typeMismatch: "el correo no es valido"  //este tipo el typeMismatch hace referencia a que es correo electronico
    },
    password:{
        //introducir $0 y $0.validity en la consola del navegador
        valueMissing: "este campo contraseña no debe de estar vacio",
        //traemos el texto que estaba dentro del titulo en el html input name="password"
        patternMismatch:"al menos 5 caracteres, maximo 12, debe contener una letra minuscula, una letra MAYUSCULA, un numero y no debe tener caracteres especiales"
    },
    //input de fecha
    nacimiento:{
         //introducir $0 y $0.validity en la consola del navegador
        valueMissing: "este campo de fecha no debe de estar vacio",
        customError:"Debes de tener al menos 18 años"
    },
    numero:{
    valueMissing: "este campo no debe de estar vacio",
    patternMismatch:"el formato requiere de xxxxxx-xxxxx de 10 numero"
    },
    direccion:{
    valueMissing: "este campo no debe de estar vacio",
    patternMismatch:"la direccion debe contener al menos 10 a 40 caracteres"
    },
    ciudad:{
    valueMissing: "este campo no debe de estar vacio",
    patternMismatch:"la direccion debe contener al menos 10 a 40 caracteres"
    },
    estado:{
        valueMissing: "este campo no debe de estar vacio",
        patternMismatch:"la direccion debe contener al menos 10 a 40 caracteres"
    },

};


/*nos sirve para verificar si existe el input con el nombre de data-tipo="nacimiento" esto es un objeto*/
const validadores = { //este objeto es para validar para que coincidan con el tipo y el nombre que le colocamos en el html "nacimiento"
    /* arrow function Si el cuerpo tiene una declaración o expresión única, puede escribir la función de flecha como */
    nacimiento: input => validarNacimiento(input), //funcion anonima,

    //    nacimiento: function (input){
    //      validarNacimiento(input)
    //      }
};

function mostrarMensajeDeError(tipoDeInput, input){
let mensaje= "";
tipoDeErrores.forEach(error => {
    if(input.validity[error]){ // comparamos con el input que es lo que trae en el ejemplo valueMissing
    console.log(error);
    console.log(input.validity[error]);
    console.log(mensajesDeError[tipoDeInput][error]);
    mensaje = mensajesDeError[tipoDeInput][error];
    }
});

return mensaje;
}
function validarNacimiento(input) {
    //const fechaCliente = input.value;
    //console.log(fechaCliente) // nos muestra la fecha 2022/01/01
    const fechaCliente = new Date(input.value); // nos muestra la fecha Sabado January 01 2021
    //console.log(fechaCliente);
    //mayorDeEdad(fechaCliente);
    let mensaje = "";
    //opcion2
    if (!mayorDeEdad(fechaCliente)) {// true : sino eres verdadero lo que hicimos aqui fue negarlo !
        mensaje = "debes de tener al menos 18 años";
    }
    //opcion1
    // if(mayorDeEdad(fechaCliente) === false){
    //     mensaje = "debes de tener al menos 18 años";}

    //console.log(mayorDeEdad(fechaCliente));
    input.setCustomValidity(mensaje); //método de la HTMLObjectElementinterfaz establece un mensaje de validez personalizado para el elemento

}

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    //console.log(fecha,"****",fechaActual)
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18, //este metodo devuelve el año en la fecha especificada en tiempo universal.
        fecha.getMonth(), //devuelve el mes del objeto Date según la hora local, donde el número cero indica el primer mes del año.
        fecha.getDate() //devuelve el día del mes para la fecha especificada de acuerdo con la hora local.
    );
    return diferenciaFechas <= fechaActual; //si es menor de edad va retornar falso
}

