const API_URL = 'https://swapi.dev/api/'
	const PEOPLE_URL = 'people/:id'
	const opts = { crossDomain: true}

	functionobtenerPersonaje(id, callback) {
		consturl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		$
			.get(url, opts, callback)
			.fail(() => { console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje ${id}.`)})
	}

	obtenerPersonaje(1, function(character) {
		console.log(character.name)

		obtenerPersonaje(2, function(character) {
			console.log(character.name)

			obtenerPersonaje(3, function(character) {
				console.log(character.name)

				obtenerPersonaje(4, function(character){
					console.log(character.name)

					obtenerPersonaje(5, function(character){
						console.log(character.name)

						obtenerPersonaje(6, function(character){
							console.log(character.name)

							obtenerPersonaje(7, function(character){
								console.log(character.name)            
							} )
						} )
					} )
				} )
			})
		})
	})

/////copio codigo porque con el mio no pude solucionarlo.