const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = "people/:id"

const lukeURL = (`${API_URL}${PEOPLE_URL.replace(`:id`,1)}`)
const externaAPI = ({crossDomain: true})

// $.get(lukeURL, externaAPI, function () { console.log(arguments)})
$.get(lukeURL, externaAPI, function (luke) { console.log(`Hola, yo soy ${luke.name}`)})
