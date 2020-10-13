var ale = {
    nombre: "Ale",
    apellido: "SantaLucia",
    edad: 32
}

var noe= {
    nombre: "Noe",
    apellido: "Mercuri",
    edad: 33
}

function imprimirEnMayusculas(persona){
    console.log(persona.nombre.toUpperCase())
}

imprimirEnMayusculas (ale)
imprimirEnMayusculas (noe)


---------------------------------

var ale = {
    nombre: "Ale",
    apellido: "SantaLucia",
    edad: 32
}

var noe= {
    nombre: "Noe",
    apellido: "Mercuri",
    edad: 33
}

function imprimirEnMayusculas({nombre}){
    console.log(nombre.toUpperCase())
}

imprimirEnMayusculas (ale) // al tener ({nombre}) en la formula, se entiende que el console.log de este caso seria (ale.nombre.toUppercase())
imprimirEnMayusculas (noe)




--------------------------

//DESESTRUCTURAR OBJETOS.

podemos usar el { } como resumen de "pertenece a:"

//ejmeplos
var {nombre,edad} = persona; // nombre y edad van a se buscadas dentro de persona,
var {marca, modelo, pantalla} = telefono // marca modelo y pantalla van a aser buscadas dentro de telefono.



--------------------

//objeto como parametro que actua como referencia o como valor:

var ale = {
    nombre: "Ale",
    apellido: "SantaLucia",
    edad: 32
}



function cumpleAle (persona){
    persona.edad += 1
} // este metodo toma el objeto ale como un valor, por lo que cada vez que lo llamemos va a modificar la key edad en uno sobre el objeto ale original
//cumpleAle(ale)
//undefined
//ale
//{nombre: "Ale", apellido: "SantaLucia", edad: 33}

function cumpleAle2 (persona){
    return {
        ...persona,
        edad: persona.edad +1
    }
}

cumpleAle2(ale) 
//{nombre: "Ale", apellido: "SantaLucia", edad: 33} --cambia el resultado de la key edad del nuevo objeto
ale
//{nombre: "Ale", apellido: "SantaLucia", edad: 32} --pero mantiene el mismo valor key del objeto original.

