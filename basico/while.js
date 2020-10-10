var apodos = ["bosteros", "cuervos", "quemeros", "leprosos"];

function GolDe (club) {
    console.log(`Gol de los ${club}`)
}

while (apodos.length > 0){
    var club = apodos.shift();
    GolDe(club)
}