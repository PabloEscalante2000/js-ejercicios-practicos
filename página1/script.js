const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const texto = document.querySelector('.texto');
const textoU = document.querySelector('#parr');

console.log(h1);

console.log({
    h1,
    p,
    texto,
    textoU
});

//escribir sobre un dom

h1.innerHTML = "Esto es todo amigos <br> tontito";

textoU.innerText = "textito <b>";

// ller y poner atributos
console.log(h1.getAttribute('pantalla'));
h1.setAttribute('class','rojo');

//añadir atributos más eficientemente
h1.classList.add('verde');

//quitar clases
h1.classList.remove('rojo');

//crear nuevo elemento HTML
const img = document.createElement('img');
img.setAttribute('src','https://pm1.narvii.com/6122/04f934b53b9200cad830ea544c1b8f8d09bac6e7_hq.jpg');
img.setAttribute('width','90px');
img.setAttribute('height','90px');
console.log(img);

textoU.append(img);

/*
Comentario normal
? que hago ahora
! el bucle falla
TODO: TENGO QUE ESTUDIAR MÁS
* lo voy a conseguir
*/

const input1 = document.querySelector('#c1');
const input2 = document.querySelector('#c2');
const boton = document.querySelector('#btnCalcular');
const res = document.querySelector("#res");
const form = document.querySelector('#formulario')

//boton.addEventListener('click',buttonOnClic);
/*
    * el <form> tiene por estandar que el últmo boton
    * aplica la funcion submit por lo que se tiene que
    * sobreescribir dicha funcion
*/
form.addEventListener('submit',buttonOnClic);
// * El addEventLisetener envia por defecto las () con
// * el argumento event


function buttonOnClic(event){
    /*
    !se concatena, no se suma
        console.log(input1.value + input2.value);
    *se tiene que parsear el valor
        parseFloat()
    */

    console.log({event});
    event.preventDefault();
    // Evitamos con esta funcion que se recargue la página
    
    const suma = parseFloat(input1.value)+parseFloat(input2.value);
    
    if(!Number.isNaN(suma)){
        
        res.innerText = "Resultado: " + suma;
        console.log(parseFloat(input1.value));
        console.log(parseFloat(input2.value));
    } else {
        res.innerText = "Tiene que insertar un valor válido";
    }
    
}


