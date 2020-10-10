var estudiantes = ["maria", "sergio", "rosa", "daniel"];


function saludarEstudiantes (estudiante) {
    console.log(`Holas, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}







----------------------


var estudiantes = ["maria", "sergio", "rosa", "daniel"];


function saludarEstudiantes (estudiante) {
    console.log(`Holas, ${estudiante}`);
}

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante)
}


