var frutas = ["Manzana", "Platano","Pera","Fresa"];

frutas.push("Uvas");
frutas.push(["Melocoton","Sandía"]);

console.log(frutas);

//Elimino el último elemento
frutas.pop();
console.log(frutas);

//Agregar valores al inicio
frutas.unshift("Melon");
console.log(frutas);

//Eliminar elemento del inicio
frutas.shift();
console.log(frutas);

//Darme la ubicación del elemento
console.log(frutas.indexOf("Pera"));

var articulos = [
    {nombre:"Pablo",id:1},
    {nombre:"Cesar",id:2},
    {nombre:"Claudio",id:3},
    {nombre:"José",id:4}
];

//find encontrar objetos mediante funciones, retorna el primero en cumplir
// la condición
var encontrar = articulos.find(function(articulo){
    return articulo.nombre === "Pablo";
})

console.log(encontrar);

var encontrar2 = articulos.find(function(articulo){
    return articulo.id > 2;
})

console.log(encontrar2);

//iterar objetos
articulos.forEach(function(objeto){
    console.log(objeto.nombre + " con id: " + objeto.id);
});

//some: validacion v o f para los valores que cumplen
var encontrar3 = articulos.some(function(obj){
    return obj.nombre.includes("C");
});

console.log(encontrar3); //true

//filtrar el array en uno nuevo que cumple con la condicion

var flitro = articulos.filter(function(obj){
    return obj.nombre.includes("o");
});

console.log(flitro);