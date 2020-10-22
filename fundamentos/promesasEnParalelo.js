const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function(data){
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje con id = ${id}.`)
}

var ids = [1, 2, 3, 4, 5, 6, 7] //primero construimos un array con los id que queremos traquear

  
var promesas = ids.map( function (id){
    return obtenerPersonaje(id)})
    Promise
        .all (promesas) //hace referencia a todas las promesas del array que constuimos en la "var promesas"
        .then (personajes => console.log(personajes)) 
        .catch (onError) 




// obtenerPersonaje(1)
//     .then(personaje =>{
//         console.log( `nombre de pesoaje 1 es${personaje.name}`)
//         return obtenerPersonaje(2) 
//     })

//     .then(personaje =>{
//         console.log( `nombre de pesoaje 2 es${personaje.name}`)
//         return obtenerPersonaje(3) 
//     })

//     .then(personaje =>{
//         console.log( `nombre de pesoaje 3 es${personaje.name}`)
//         return obtenerPersonaje(4) 
//     })

//     .then(personaje =>{
//         console.log( `nombre de pesoaje 4 es${personaje.name}`)
//         return obtenerPersonaje(5) 
//     })

//     .then(personaje =>{
//         console.log( `nombre de pesoaje 5 es${personaje.name}`)
//         return obtenerPersonaje(6) 
//     })
//     .then(personaje =>{
//         console.log( `nombre de pesoaje 6 es${personaje.name}`)
//         return obtenerPersonaje(7) 
//     })
//     .then(personaje =>{
//         console.log( `nombre de pesoaje 7 es${personaje.name}`)
        
//     })

//     .catch(onError) 