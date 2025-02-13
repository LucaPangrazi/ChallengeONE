// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let posicion = 0;
var text = "";

function mostrarLista(nombre){
    var listView = document.querySelector('#listaAmigos');
    listView.innerHTML += `<li>${nombre}</li>`;
    return;
}

function mostrarresultado(nombre){
    var listView = document.querySelector('#resultado');
    listView.innerHTML += `<li>${nombre}</li>`;
    return;
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre != "") {
        listaAmigos.push(nombre);
    }
    else{
        
        alert('El nombre no puede estar vacio')
    }
    posicion++
    mostrarLista(nombre);
}

function limpiarSorteo() {
    document.querySelector('#resultado').value = '';
}

function sortearAmigo() {
    limpiarSorteo()
    var resultado;
    var posicionElegida = Math.floor(Math.random() * listaAmigos.length);
    resultado = listaAmigos[posicionElegida];
    mostrarresultado(resultado)
    
}