// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.getElementById('amigo'); 
const listaAmigos = document.getElementById('listaAmigos'); 
const resultado = document.getElementById('resultado'); 

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim(); // Obtenemos el valor del campo de texto y eliminamos espacios en blanco

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    amigos.push(nombre);

    inputAmigo.value = '';

    actualizarLista();
}

function actualizarLista() {
 
    listaAmigos.innerHTML = '';

    // Iteramos sobre el array de amigos y creamos elementos <li> para cada uno
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); // Creamos un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignamos el nombre del amigo como texto del <li>
        listaAmigos.appendChild(li); // Agregamos el <li> a la lista
    }
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    // Validamos que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    // Generamos un índice aleatorio dentro del rango del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtenemos el amigo seleccionado
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostramos el resultado en la página
    resultado.innerHTML = `<li class="result-item">El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
}