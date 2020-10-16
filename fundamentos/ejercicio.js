var ale = {
    nombre: "Ale",
    edad: 32
}

var noe= {
    nombre: "Noe",
    edad: 33
}

function saludar (n,e){
    console.log ( ` Hola, me llamo ${n} y tengo ${e} años`)
}

saludar (nombre, edad)

-------

function saludar2 (persona) {
    var {nombre,edad} = persona; // por los corchetes, esto equivale a persona.nombre y persona.edad = persona
    console.log ( ` Hola, me llamo ${nombre} y tengo ${edad} años`)
}

saludar (ale) //aca dito que "persona" es "ale", por lo que la funcion dice que {nomnbre,edad} = persona es igual a ale.nombre y ale.edad
