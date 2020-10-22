const MAYORIA_DE_EDAD = 18


function esMayorDeEdad (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}
// en esta funcion estamos diciendo que sobre el paramtro persona nos devuelva un true si es que cumple la condicion de >= MAYORIA_DE_EDAD

//esto es igual a:

var esMayorDeEdad = function(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}
// en este caso toamos la misma funcion y lo que hacemos es colocarla dentro de una variable. esto se conoce como funcion anonima, porque la misma no tiene un nombre en si.

//esto es igual a:
var esMayorDeEdad = persona => {
    return persona.edad >= MAYORIA_DE_EDAD
}
// en donde suplantamos la palabra reservada "function" por una arrow "=>". Esto funciona exactamente igual. ademas sacamos los parentesis de nuestro parametro

//esto es igual a:
var esMayorDeEdad = persona =>  persona.edad >= MAYORIA_DE_EDAD
//Si solo tenemos un return, en las arrow functions podemos omitir los corchetes, ya que el sistema enteiende que tiene de que devolver el resultado si se cumple o no de lo que tengamos luego de la arrow


//esto es igual a:
var esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
//en este caso estamos desestructurando nuestro parametro, en donde con los ({}) le estamos diciendo al sistema que le vamos a pasar un objeto (en este caso "persona") sobre el cual tiene que buscar el dato "edad"
