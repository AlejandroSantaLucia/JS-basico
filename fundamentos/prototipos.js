//primero definimos un prototipo, en este caso "persona"
//para definir un prototipo debemos armar una funcion que determine que condiciones se deben cumplir para crear dicho prototipo

function persona (datoNombre, datoApellido, datoAltura){
this.nombre = datoNombre
this.apellido = datoApellido     // this hace referencia al objeto, en este caso ale, noe, etc. segun sea el objeto que estemos usando en el prototipo.
this.altura = datoAltura
}

persona.prototype.saludar = function() {
    console.log (`hola, mi nombre es ${this.nombre} ${this.apellido}`)
} //aca lo que decimos es que dentro del prototipo persona, existe el atributo "saludar", que en este caso es una funcion.

persona.prototype.soyAlto = function() {
    return this.altura >=1.80
}



//por ultimo construimos las bariables (objetos) que van a interactuar con el prototipo.
var ale = new persona(`Alejandro`, `santaLucia`, 1.75)
//new es una palabra registrada que se usa solo para crear nuevos objetos dado un prototipo. al objeto que creemos se le va a asignar el prototio marcado, en este caso"persona"
var noe = new persona(`Noelia`, `Mercuri`, 1.58)
var pepito = new persona(`Pepito`, `Perez`, 1.89)


//con la funcion saludar ocurre que sobre la entrada:
ale.saludar()
//son devuelve:
//hola, mi nombre es Alejandro santaLucia

ale.soyAlto()
// nos devuelve:
//false