// Declarativas

function miFuncion() {
    return 3;
}

// Expresion (anónimas)

var miFuncion2 = function(a,b){
    return a + b;
}

console.log(miFuncion2(3,5));

function saludarEstudiante(estudiante){
    console.log(`Hola ${estudiante}`);
}

saludarEstudiante("Pablo");

function sumar(a,b){
    var res = a + b;
    return res;
}

console.log(sumar(45,36));
console.log(typeof 56);