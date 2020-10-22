const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = "people/:id"

// const lukeURL = (`${API_URL}${PEOPLE_URL.replace(`:id`,1)}`) // asi lo teniamos en el ejercicio anterior, utilizamos el mismo URL para un request multiple
const externaAPI = ({crossDomain: true})
const saludar = function (persona) { console.log(`Hola, yo soy ${persona.name}`)}


//creamos una funcion para multiples requests:

function obtenerPersonaje(datoID) {
    const url = `${API_URL}${PEOPLE_URL.replace(`:id`,datoID)}` 
    $.get(url, externaAPI, saludar)
}// al poner el parametro datoID = `:id` estamos diciendo que nos traiga la info del datoID que nosotros queramos dentro de jQuery


obtenerPersonaje(1)
//Hola, yo soy Luke Skywalker
obtenerPersonaje(2)
//Hola, yo soy C-3PO
obtenerPersonaje(3)
//Hola, yo soy R2-D2

obtenerPersonaje(23)

