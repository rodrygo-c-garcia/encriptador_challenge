// Variables globales
let textarea = document.getElementById("textarea");
let text = document.getElementById("text");
let imagen_container = document.getElementById("container-img");
let button_copiar = document.getElementById("container-button");
let texto_codificado = document.getElementById("texto-codificado");

// Funciones
function encriptar() {
  if (checkText()) {
    encriptation();
  } else {
    addClass();
    alert("Ingrese un texto valido");
  }
}

function deleteClass() {
  imagen_container.classList.remove("show");
  imagen_container.classList.add("no-show");

  button_copiar.classList.remove("no-show");
  button_copiar.classList.add("show");

  text.classList.remove("no-show");
  text.classList.add("show");
}

function checkText() {
  // expresion regular para verificar que el texto sea valido
  let regex = /^[a-z]+$/;
  return regex.test(textarea.value);
}

function encriptation() {
  deleteClass();

  let palabra = "";

  for (const element of textarea.value) {
    if (element == "a") palabra += "ai";
    else if (element == "e") palabra += "enter";
    else if (element == "i") palabra += "imes";
    else if (element == "o") palabra += "ober";
    else if (element == "u") palabra += "ufat";
    else palabra += element;
  }

  texto_codificado.innerHTML = palabra;
  textarea.value = "";
}

function addClass(texto) {
  textarea.value = "";

  imagen_container.classList.remove("no-show");
  imagen_container.classList.add("show");

  button_copiar.classList.remove("visible");
  button_copiar.classList.add("no-show");

  text.classList.remove("show");
  text.classList.add("no-show");
}

function desencriptar() {
  if (checkText()) {
  } else {
    addClass();
    alert("Ingrese un texto valido");
  }
}
