console.log("Hello, World. I'm a new programmer");
/*
//Declaracion de variables de etiquetas del index.html
const parrafo = document.querySelector('.parrafoC');  //Tambien se puede usar document.getElementsByClassName y no se necesita poner el .
const id = document.querySelector('#parrafoI');   //Tambien se puede usar document.getElementById y no se necesita poner el #
const h1 = document.querySelector('H1');
const input = document.querySelector('input');
const h2 = document.querySelector('h2');
const boton =  document.querySelector('#botoncito')
//console.log({parrafo, id, h1});
//console.log(h1);
//console.log(input.value);

function btnPresionado () {
    console.log("Se ha presionado el boton")
}

//Escribiendo codigo html desde Js
h1.innerHTML = 'Hola a <br> a todos en html';   //Convierte todo codigo js a html. Es peligroso debido a que pueden hacerte inyeccion de codigo js (modifica el valor orginal, en este caso el h1)
h1.innerText = 'Hola a <br> a todos en texto';   //Convierte todo codigo js a texto. Es mas seguro de usar (modifica el valor orginal, en este caso el h1)
id.innerHTML = '';  //elimino el contenido de id
boton.innerHTML = "prueba2 xD";

console.log(h2.getAttribute('atributopro'));  //Tambien se puede leer los demas atributos de html como class o id, en este caso es uno inventado

h2.setAttribute('atributopro', 'nuevoatributo'); //Cambiar el nombre del atributo de una eitqueta de HTML (En este caso es el atributo "atributopro" de la etiqueta h2)
parrafo.classList.add('nuevo');  //Añadir otro texto al nombre de una clase (en este caso la clase se llama "parrafoC" y ahora se llamaria "parrafoC nuevo")
parrafo.classList.remove('parrafoC'); //Eliminar el texto especificado del nombre de la clase que tiene el parrafo (debe ser el texto completo separado por el espacio)
//parrafo.classList.toggle('parrafoC');
//parrafo.classList.contains('parra');

console.log(h2.getAttribute('atributopro'));  //Imprimir el nombre del atributo de la etiqueta h2
console.log(parrafo.getAttribute('class'));  //Imprimir el nombre de la clase (atributo), de la etiqueta h2

//input.value = 'hola xD';  //añadir un nuevo valor a un input
const img = document.createElement('img');   
img.setAttribute('src', 'https://th.bing.com/th/id/OIP.D1hwbLzdYZ55FTp3nf3PkgHaEK?pid=ImgDet&rs=1');

id.append(img);
*/

const input1 = document.getElementById('idInput1');
const input2 = document.getElementById('idInput2');
const botonSuma = document.getElementById('btnSuma');
const parrafo = document.getElementById('resultado');
const form = document.getElementById('formulario');

/*addEventListener es un escuchador de eventos, es un metodo que recibe dos argumentos, el primero es el nombre del evento y el 
segundo es el nombre de la funcion que queremos que se ejecute, no se debe poner los parentesis de la funcion*/

//botonSuma.addEventListener('click', calcular) 
form.addEventListener('submit', calcular)

/*Para que se pueda ejecutar esta funcion y no se recargue la pagina por el formulario, se debe llamar como argumento a event y dentro de la funcion
debemos llamar a la funcion preventDefault, el cual evitara que se recargue la pagina*/
function calcular(event){
    event.preventDefault();
    const resultado = parseInt(input1.value) + parseInt(input2.value);
    parrafo.innerText = "El resultado es: " + resultado;
}
