const btnEmpezar = document.getElementById (`btnEmpezar`)  // esta funcion recibe un string con el id del elemento que queremos
const verde = document.getElementById (`verde`)  
const celeste = document.getElementById (`celeste`)  
const violeta = document.getElementById (`violeta`)  
const naranja = document.getElementById (`naranja`)  



class juego {
    constructor () {
        this.inicializar () 
        this.generarSecuencia()
    }
    inicializar () {
        btnEmpezar.classList.add('hide') //hide esta definida en css
        this.nivel = 1
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }        
    }
    generarSecuencia() { // con esta entrada vamos a generar la secuencia del juego
        this.secuencia=  new Array(10).fill(0).map(n=> Math.floor (Math.random()*4))
    }
}



function empezarJuego (){
    window.juego = new juego() // esto funciona porque tenemos creada la class juego
}