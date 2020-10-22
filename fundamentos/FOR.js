var individuo= {
    nombre: "alejandro",
    apellido: "santaLucia",
    edad: 32,
    peso: 70
}
var individuo2= {
    nombre: "noelia",
    apellido: "mercuri",
    edad: 33,
    peso: 60
}

console.log (`${individuo.nombre} comieza el año con ${individuo.peso}Kg` )

const DIAS_ANO = 365
const VARIABLE_PESO = 0.2

// const SUBE_PESO =
// const BAJA_PESO = 

var subePeso = individuo => individuo.peso += VARIABLE_PESO
var bajaPeso = individuo => individuo.peso -= VARIABLE_PESO


for (i = 1; i <= DIAS_ANO; i++ ){
    var random = Math.random()
    if  (random <= 0.25) {subePeso (individuo)}
    else if (random <= 0.5 ) {bajaPeso (individuo)}
}


console.log (`${individuo.nombre} finaliza el año con ${individuo.peso}Kg` )