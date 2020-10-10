var fruta = ["manzana", "banana", "naranja", "pera"];


console.log(fruta.length);

var agregarFruta = fruta.push("sandía");

var sacarFruta = fruta.pop("sandía");

var sumarFruta = fruta.unshift ("melon");

var restarFruta = fruta.shift ("melon");

var posicion = fruta.indexOf ("naranja")




-------------------------------------------




var futbol = [
    {club: "boca", hinchas: 1000},
    {club: "river", hinchas: 900},
    {club: "racing", hinchas: 700},
    {club: "colon", hinchas: 400},
    {club: "newls", hinchas: 500},
]
// esto es un array compuesto por objetos//

// metodo FILTER //
var cantidadHinchas = futbol.filter(function(hinchas){
    return hinchas.hinchas <=700})


// metodo MAP//
var equipos = futbol.map (function (equipos){
    return equipos.club
})

//metodo FIND//
var encuentraEquipo = futbol.find(function(equipo){
    return equipo.club === "colon"
})

futbol.forEach (function(equipo){
    console.log (equipo.club)
})

var equiposPopulares = futbol.some (function(popularidad){
    return popularidad.hinchas <=500
})