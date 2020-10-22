class Persona {  
    constructor (datoNombre, datoApellido, datoAltura){
        this.nombre = datoNombre
        this.apellido = datoApellido     
        this.altura = datoAltura
        }

        saludar(fn) //aca agregamos un parametro X, en este caso lo llamamos fn. este parametro es opcional, quizas los objetos nos lo envien, quizas no.
        {console.log (`hola, mi nombre es ${this.nombre} ${this.apellido}`)
        if (fn){       //si nos pasaron un dato que se interprete como fn, esta condicion va a ser true. si no nos pasaron ninguna dato que se interprete como fn, esta condicion es false.
            fn(this.nombre, this.apellido,false) //false porque "Persona" NO es dev
        }
        }

        soyAlto() {return this.altura >=1.80
        }
} 

class Desarrollador extends Persona { 
    constructor  (datoNombre, datoApellido, datoAltura){
             
        super (datoNombre,datoApellido,datoAltura) 
        }
    saludar (fn) {
        console.log (`hola, sabemos que ${this.nombre} ${this.apellido} es un desarrollador. Que genial!`)
        if (fn){       //si nos pasaron un dato que se interprete como fn, esta condicion va a ser true. si no nos pasaron ninguna dato que se interprete como fn, esta condicion es false.
            fn(this.nombre, this.apellido,true) //true porque "Desarrollador" SI es dev
        }
    }
} 

       

function responderSaludo (datoNombre, datoApellido,datoEsDev){
    

    console.log (`buen dia ${datoNombre} ${datoApellido}`)
    if (datoEsDev){
        console.log (`que sorpresa, no sabia que eras desarrollador.`)
    }
}
   
    

    var ale = new Persona(`Alejandro`, `santaLucia`, 1.75)
    var noe = new Persona(`Noelia`, `Mercuri`, 1.58)
    var pepito = new Persona(`Pepito`, `Perez`, 1.89)
    
    

    var sacha = new Desarrollador(`Sacha`, `Lifszyc`, 1.82)

ale.saludar()
// hola, mi nombre es Alejandro santaLucia
noe.saludar(responderSaludo)
// hola, mi nombre es Noelia Mercuri
// buen dia Noelia Mercuri
pepito.saludar(responderSaludo)
// hola, mi nombre es Pepito Perez
// buen dia Pepito Perez
sacha.saludar(responderSaludo)
// hola, sabemos que Sacha Lifszyc es un desarrollador. Que genial!
// buen dia Sacha Lifszyc
// que sorpresa, no sabia que eras desarrollador.