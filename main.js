//para ingresar y cpturar informacion de html

const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('parrafito');
// const pid = document.getElementById('pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');


//forma de evitar el evento de recargar la pagina en un formulario
// form.addEventListener('submit', btnOnclick);

// function btnOnclick(event) {
//     event.preventDefault();
//     console.log({event});
//     const sumaInputs = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "Resultado:" + sumaInputs;
// }

//forma de evitar recargar el formulario poniendo el button de type button 
btn.addEventListener('click', btnOnclick);

function btnOnclick(event) {
    //event.preventDefault();
    //console.log({event});
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado:" + sumaInputs;
}


// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// //innerHTML = AGREGA TEXTO Y TAMBIEN ETIQUETAS HTML A LAS ETIQUETAS DE HTML
// //innerTEXT = aGREGA TEXTO SIN LAS ETIQUETAS HTML
// h1.innerHTML = 'Patito <br> Feo';
// h1.innerText = 'Patito <br> Feo';
// //getAttribute nos ayuda a leer algunos de los atributos que tenga nuestro elemento
// console.log(h1.getAttribute("class"));

// //setAtributte modifca la clase o los atributos de mis elementos en html
// h1.setAttribute('class', 'rojo');


// //classList.add agrega clases .remove eliminar las clases especficas
// h1.classList.add("verde")
// h1.classList.remove("rojo");
// //h1.classList.toggle('verde');//cuando se hace un evento el toogle verifica si existe es clase si no existe la agrega y si existe la elimina
// //h1.classList.contains('verde');//nos devuelve true o false dependiendo si nuestro elemnto tiene la clase que estemos preguntando

// input.value = "456";

// //crear elementos 

// //console.log(document.createElement('img'));

// const img = document.createElement('img');

// img.setAttribute('src', "https://cdn.pixabay.com/photo/2023/09/14/15/54/bird-8253245_1280.jpg");


// //append: no borra el contenido anterior de nuestro parrafo sino que metio nuestra imagen despues
// //appendChild : funcionan igual agregan el elemneto despues del contebido que ya tuviera nuestro parrafo
// //pid.append(img);
// pid.innerHTML = "";
// pid.appendChild(img);


