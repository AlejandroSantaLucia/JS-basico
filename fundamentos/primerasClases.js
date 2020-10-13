var nombre = "Alejandro", apellido = "SantaLucia"

var edad;

edad = "32"

console.log ("Me llamo" + nombre + "" + "apellido")
console.log ("tengo " + edad)

console.log(  "y ahora voy a probar poner todos los datos: mi nombre es " + nombre + "" + apellido + " y en este momento tengo " + edad + " años de edad"   )






// Variables que podemos aplicar a STRINGS


var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var segundaLetraDelNombre = nombre.charAt(1)

var cantidadLetrasNombre = nombre.length

//concatenar strings con una variable
var nombreCompleto = nombre + " " + apellido 
// o
var nombrecompleto2 = `${nombre} ${apellido}`
var nombrecompleto3 = `${nombre} ${apellido.toUpperCase()}`

var inicioApellido = apellido.substr(0,5) // muestra desde la letra 0 los siguientes 5 datos. Da "santa"


-------------------------
//NUMEROS

var edad = 27

edad = edad + 1 // da 28
// o
edad +=1 // tambien da 28


var sandwich = 1
var peso = 75

peso = peso + sandwich  // resultado= 76

----------------------
//DECIMALES

var precioDeVino = 200.3

var total = precioDeVino * 3 // nos da como resultado 600.9000000000001 -- JS trabaja mal con decimales!!!

var total = Math.round (precioDeVino * 100 * 3) / 100  // resuelve problema con decimales y da 600.9

var totalDecimales = total.toFixed(2) // para decirle que agregue 2 decimales al final. queda 600.90

var totalSinDecimales = parseFloat (totalDecimales) // le saca los decmales extras y vuelve a  600.9


-----------
//divisiones

var porcionesPizza = 8
var personas = 4

var cantidadDePorcionesPorPersona = porcionesPizza / personas
//resultado = 2