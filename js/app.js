import { valida } from "./validaciones.js"; //auto completado si escribimos el nombre de la funcion "import valida y enter"

const inputs = document.querySelectorAll("input");// seleccionamos todos los inputs dentro nuestro registro.html

/*como decimos que queremos seleccionar TODOS los inputs nos va a retornar un listado(arreglo)
por esa razón utilizamos el forEach
*/
inputs.forEach((input) =>{
    input.addEventListener("blur",(evento) => { //cuando salga del foco todo los input
        valida(evento.target);  //va mandar a llamar la funcion
    });
});


