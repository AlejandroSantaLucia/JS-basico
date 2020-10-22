const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = "people/:id"

const externaAPI = ({crossDomain: true})



function obtenerPersonaje(datoID, callback)  // tenemos que agregar un segundo parametro (callback) que va a ser una funcion.
 {
    const url = `${API_URL}${PEOPLE_URL.replace(`:id`,datoID)}` 
    $.get(url, externaAPI, function (persona) { console.log(`Hola, yo soy ${persona.name}`)// traemos nuevamente la funcnion saludar dentro del get
    if (callback){
        callback() //con esto decimos que si entra algun dato en el parametro callback, que lo "llame"
    }
        }
     )
}


obtenerPersonaje(1, function (){ // aca creamos una funcion que ocupe el lugar el callback.
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function (){
                    obtenerPersonaje(6, function(){
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})


