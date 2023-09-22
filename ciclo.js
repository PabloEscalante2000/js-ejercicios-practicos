var estudiantes = ["pablo","cesar","maria","rosa"];

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`)
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

for(var estudiante of estudiantes){
    console.log(`adios, ${estudiante}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    console.log(`estudiante: ${estudiante} status: borrado`);
    console.log(estudiantes);
}