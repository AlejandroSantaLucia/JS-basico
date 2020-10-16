var alejandro = {
    edad: 32

}

function mayoriaDeEdad (alejandro){

    if (alejandro.edad >= 18) { console.log (`es mayor de edad`)}
    else { console.log(`es menor de edad`)}
}

matoruaDeEdad (alejandro)

//es mayor de edad



---------------------------
// otra alternativa es separar las funciones para que quede mas limpio

const MAYORIA_DE_EDAD = 18 // como esta variable no deberia modificarse, podemos usar la palabra reservada const (constante)
//sobre las const se acostumbra usar mayusculas para nombrarlas.

function esMayorDeEdad (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function pasoMayoria (persona){
    if (esMayorDeEdad(persona)){

        console.log (`Si, es mayor de edad`)
    }
    else {
        console.log (`No, no es mayor de edad`)
    }

}