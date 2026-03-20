/*
 * Archivo: script.js
 *
 * Aquí podrás escribir tu código JavaScript para interactuar con el DOM de la página.
 *
 * Ejercicios:
 * 1. Realizar consultas sobre los elementos de la página.
 * 2. Añadir una nueva película al final de la lista.
 * 3. Eliminar la primera película de la lista.
 * 4. Recorrer el DOM (excluyendo nodos de texto) en preorden, postorden e inorden.
 *
 * Consulta la documentación:
 * - MDN Document: https://developer.mozilla.org/es/docs/Web/API/Document
 * - MDN Element: https://developer.mozilla.org/es/docs/Web/API/Element
 * - MDN Node: https://developer.mozilla.org/es/docs/Web/API/Node
 */

/* Puedes descomentar y modificar el siguiente código para probar tus soluciones */

// console.log("Script cargado correctamente");

// * 1. Realizar consultas sobre los elementos de la página.
const idPelicula = 2
const title = document.querySelector(`#movies > article[data-id="${idPelicula}"] > h2`).textContent
console.log(`Titulo de la ${idPelicula} película: ${title}`)

// * 2. Añadir una nueva película al final de la lista.
const newId = document.querySelector("#movies").childElementCount + 1
const newMovie = `<article class=\"movie\" data-id=\"${newId}\">\n` +
    "                    <h2>Interestellar</h2>\n" +
    "                    <p><strong>Director:</strong> Raúl Quirós</p>\n" +
    "                    <p><strong>Actores:</strong> Paco Porras</p>\n" +
    "                    <p><strong>Categorías:</strong> Ciencia ficción, suspense</p>\n" +
    "                    <div class=\"sessions\">\n" +
    "                        <button class=\"session-btn\">18:00</button>\n" +
    "                        <button class=\"session-btn\">20:00</button>\n" +
    "                        <button class=\"session-btn\">22:00</button>\n" +
    "                    </div>\n" +
    "                </article>"
const movies = document.querySelector("#movies").insertAdjacentHTML("beforeend", newMovie)

// * 3. Eliminar la primera película de la lista.
document.querySelector('#movies > article[data-id="1"]').remove()

// * 4. Recorrer el DOM (excluyendo nodos de texto) en preorden, postorden e inorden.

function preorden(nodo) {
    if(nodo.tagName) {
        console.log(nodo.tagName)
    }
    if(nodo.hasChildNodes()) {
        nodo.childNodes.forEach((childNode) => {
            preorden(childNode)
        })
    }
}

function postorden(nodo) {
    if(nodo.hasChildNodes()) {
        nodo.childNodes.forEach((childNode) => {
            postorden(childNode)
        })
    }
    if(nodo.tagName) {
        console.log(nodo.tagName)
    }
}

function inorden(nodo) {

}

console.log("-- PREORDEN --")
preorden(document)
console.log("-- POSTORDEN --")
postorden(document)
console.log("-- INORDEN --")
console.log("No se puede porque no es un arbol binario?")
// inorden(document)