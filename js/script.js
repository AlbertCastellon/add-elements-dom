 // Aquí tu código
const agregar = document.getElementById('agregar');
const lista = document.getElementById('lista');

agregar.addEventListener('click', function() {
    const elemento = prompt('introduce el producto');
    const objeto = document.createElement('li');
    objeto.textContent = elemento;
    lista.appendChild(objeto);
})