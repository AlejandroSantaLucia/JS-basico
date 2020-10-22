var ale = {
    nombre: "alejandro",
    apellido: "santaLucia",
    altura: 1.75,
    libros: 111
}
var noe = {
    nombre: "noelia",
    apellido: "mercuri",
    altura: 1.58,
    libros: 80

}
var diego = {
    nombre: "diego",
    apellido: "rojas",
    altura: 1.70,
    libros: 150

}
var mono = {
    nombre: "eugenio",
    apellido: "walsh",
    altura: 1.74,
    libros: 20

}
var pela = {
    nombre: "ignacio",
    apellido: "mazone",
    altura: 1.71,
    libros: 33

}

var personas = [ale, noe, diego, mono, pela]

for (var i = 0; i < personas.length; i++) //la variable i es igual a 0, que el for se repita mientras i sea menor a la cantidad todal de datos del array (length). y que por cada repeticion, i sume 1.
{
    console.log (` ${personas[i].nombre} pesa exactamente ${personas[i].altura}`)
}

//otro

var acumulado = 0
for ( i = 0; i < personas.length; i++){
    var CantidadDeLibros = personas[i].libros += i
    console.log (`${personas[i].nombre} tiene ${CantidadDeLibros} libors`)

}

//////////////////////////////////////////////////////////////

//FILTER

var personasAltas = personas.filter (function (largos)
{ return largos.altura >=1.71
})
var personasBajas = personas.filter( function (cortos)
{
    return cortos.altura <= 1.70
}
)

///////////////////////////////////

//MAP

const pasarAlturaACms = persona => {
    return {
        ...persona,
        altura: persona.altura * 100
///////////////////aca dcimos que devuelva una NUEVA variable persona modificando el atributo altura.
    }
}


var personasCms = personas.map(pasarAlturaACms)



console.log(personasCms)



////////////////////
//REDUCE

console.log (`***********resultado sin aplicar reduce`) // solo para diferenciarlos ne consola
//opcion uno para hacer el calculo sin usar REDUCE. ES UNA FORMA VALIDA DE HACERLO!!!
var acumulado = 0
for ( i = 0; i < personas.length; i++){
    acumulado += personas[i].libros
    console.log (`en total hay ${acumulado} libros`)
} 


console.log (`***********resultado aplicando reduce`) // solo para diferenciarlos ne consola

const reducer = (acum, persona) => return acum + persona.libros



var totalDeLibros = personsas.reduce (reducer, 0)// con el reduce estamos diciendo que reduzca todo a un solo resultado
//reducer es el nombre de la funcion y el 0 es porque es el valor inicial del acumulador
