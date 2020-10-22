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
const VARIABLE_PESO = 0.3
const meta = individuo.peso -3
const  comeMucho =  () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4
var dias = 0
var subePeso = individuo => individuo.peso += VARIABLE_PESO
var bajaPeso = individuo => individuo.peso -= VARIABLE_PESO


while (individuo.peso > meta) {
    
    if (comeMucho()) { 
        subePeso(individuo)       
    }
    if  (haceDeporte()){

        bajaPeso(individuo)
    }
    dias +=1
}



console.log (`${individuo.nombre} alcanzó su meta de peso en ${dias} dias` )




--------------------------------------
//DO...WHILE

var contador = 0

var llueve = () => Math.random () < 0.25
// aca decimos que "llueve" es TRUE si Math.random es menor a 0.25

do {
    contador++ // aca decimos que le sume 1 a contador, esto es igual a contador +=1
}while (!llueve()); // y aca aclaramos que el DO se siga repitiendo hasta que la variable lluvia sea FALSE

if (contador == 1) { console.log(`Fui a la esquina 1 sola vez para ver llover llover. `)}
else {console.log(`Fui a la esquina ${contador} veces para ver llover llover. `)}



 

