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

var ids = [1, 2, 3, 4, 5, 6, 7] 

  async function obtenerVariosPersonajes () { // creamos una funcion para agrupar todo nuestro codigo de promesas en paralelo. La funcion es async, porque esta entrada nos permite usar await mas adelante.
      var promesas = ids.map( id => obtenerPersonaje(id))
      try {
          var personajes = await Promise.all (promesas) // aca agregamos una variable que especifica que cuando todas las promesas se cumplan, nos guarde ese dato en la variable personaje.
          //la palabra await lo que hace es detener el proceso hasta que todas las variables sean resuelatas. recien ahi va a guardar los resultados.
            console.table(personajes)
      } catch (id) { onError (id)}
    
  }

  obtenerVariosPersonajes()