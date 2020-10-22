const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = "people/:id"

const personaje = (`${API_URL}${PEOPLE_URL.replace(`:id`, i)}`)
const externaAPI = ({crossDomain: true})

var llamada = function (personaje) {
    for (var i = 0; i < 10; i++) {
        
        console.log(`Hola, yo soy ${personaje[i].name}`)}
    }
    
    
    
    // $.get(lukeURL, externaAPI, function () { console.log(arguments)})
    $.get(personaje, externaAPI, llamada)
    
