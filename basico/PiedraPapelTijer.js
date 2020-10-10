var Piedra = "Piedra";
var Papel = "Papel";
var Tijera = "Tijera";

var resultado = function(user, cpu)
{
    if (user != cpu)
    {
        if (
		(user === Piedra && cpu === Tijera) || 
		(user === Papel && cpu === Piedra) || 
        (user === Tijera && cpu === Papel))
        {
            console.log("el usuario GANO")
        }
        else
        {
            console.log("La CPU Gano!!")
        }
    }
    else
    {
        console.log("Empate")
    }
}

























--------------------------------------



var piedra = "piedra"
var papel = "papel"
var tijera = "tijera"


var resultado = function (P1, PC)
{
    if (P1 != PC) 
    {
        if 
        (
            (P1 === piedra && PC === tijera) ||
            (P1 === papel && PC === piedra) ||
            (P1 === tijera && PC === papel)
        )
        {
            console.log ("ganaste vos bien piola")
        }
        else 
        {
            console.log ("perdiste")
        }
    } 
    else
    {
        console.log ("empate")
    } 
}