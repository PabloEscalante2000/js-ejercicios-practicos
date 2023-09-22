var objeto = {};

//objeto: combinacion de palabras clave y valores

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2023,
    detalleDelAuto : function(){
        console.log(`Auto ${this.modelo} ${this.modelo}`);
    }
};

console.log(miAuto);
console.log(miAuto.marca);
miAuto.detalleDelAuto();

// funcion constructora

function auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var Auto2 = new auto("Nissan","supa",1984);
console.log(Auto2);

var auto3 = new auto("Tesla","X",2018);
console.log(auto3);