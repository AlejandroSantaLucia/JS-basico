var nombre =  "Ale", edad = 32

function imprimiredad (n, e){
    console.log ( `${n} tiene ${e} años`)
}

imprimiredad(nombre, edad)


--------------------

//ALCANCE DE LAS FUNCIONES

var nombre = "ale"

function imprimirNombreMayusucla (){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreMayusucla()


// esto afecta a la variable global y hace que en consola el valor nombre y la funcion imprimirNombreMayusucla() den como resultado ALE, 


var nombre = "ale"

function imprimirNombreMayusucla (n){
    n = n.toUpperCase()
    console.log(n)
}

imprimirNombreMayusucla (nombre)

//dandele una parametro a la funcion, hacemos que la misma actue de manera local, por loque en consola, el valor nombre sigue siendo ale, mientras que el valor imprimirNombreMayusucla(nombre) se transforma en ALE 