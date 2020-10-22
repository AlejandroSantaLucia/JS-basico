class Persona {  //esto quiere decir que tenemos una clase "persona" con un metodo constructor que se va ejecutar cuando creemos objetos para esta clase 
    constructor (datoNombre, datoApellido, datoAltura){
        this.nombre = datoNombre
        this.apellido = datoApellido     // this hace referencia al objeto, en este caso ale, noe, etc. segun sea el objeto que estemos usando en el prototipo.
        this.altura = datoAltura
        }
        saludar() {console.log (`hola, mi nombre es ${this.nombre} ${this.apellido}`)
        }
        soyAlto() {return this.altura >=1.80
        }
} /// esto reemplaza a la funcion persona, saludar y soyAlto que veniamos usando:
// function persona (datoNombre, datoApellido, datoAltura){
//     this.nombre = datoNombre
//     this.apellido = datoApellido     
//     this.altura = datoAltura
//     }
// Persona.prototype.saludar = function() {
//     console.log (`hola, mi nombre es ${this.nombre} ${this.apellido}`)
// } 
// Persona.prototype.soyAlto = function() {
//     return this.altura >=1.80
// }

class Desarrollador extends Persona { // aca estamos creando una clase nueva "desarrollador" que se extiende/hereda las mismas condiciones que la clase persona.
    constructor  (datoNombre, datoApellido, datoAltura){
        super (datoNombre,datoApellido,datoAltura) //aca lo que decimos es que tome el detalle de las variables "dataNombre,dataApellido y datoAltura" con la estructura de la clase superior, que en este caso es "persona"
        // this.nombre = datoNombre
        // this.apellido = datoApellido   
        // this.altura = datoAltura
        }
    saludar () {
        console.log (`hola, sabemos que ${this.nombre} ${this.apellido} es un desarrollador. Que genial!`)
    }
}
    
    
    //por ultimo construimos las bariables (objetos) que van a interactuar con el prototipo.
    var ale = new Persona(`Alejandro`, `santaLucia`, 1.75)
    //new es una palabra registrada que se usa solo para crear nuevos objetos dado un prototipo. al objeto que creemos se le va a asignar el prototio marcado, en este caso"persona"
    var noe = new Persona(`Noelia`, `Mercuri`, 1.58)
    var pepito = new Persona(`Pepito`, `Perez`, 1.89)
    
    

    var sacha = new Desarrollador(`Sacha`, `Lifsych`, 1.82)


    //resultados
    ale.saludar()
    //hola, mi nombre es Alejandro santaLucia
    
    ale.soyAlto()
    //false

    sacha.saludar ()
    //hola, sabemos que Sacha Lifsych es un desarrollador. Que genial!
