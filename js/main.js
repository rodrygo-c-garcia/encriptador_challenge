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
  // expresion regular para verificar que el texto sea valido y tambien acepta espaciados
  let regex = /^[a-z ]+$/;
  return regex.test(textarea.value);
}

function encriptation() {
  deleteClass();

  let palabra = "";

  for (const element of textarea.value) {
    if (element === "a") palabra += "ai";
    else if (element === "e") palabra += "enter";
    else if (element === "i") palabra += "imes";
    else if (element === "o") palabra += "ober";
    else if (element === "u") palabra += "ufat";
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
    decrypt();
  } else {
    addClass();
    alert("Ingrese un texto valido");
  }
}

function decrypt() {
  deleteClass();

  // obtener el texto codificado
  let palabra = textarea.value;

  // reemplazar cada código por la vocal correspondiente
  palabra = palabra.replace(/ai/g, "a");
  palabra = palabra.replace(/enter/g, "e");
  palabra = palabra.replace(/imes/g, "i");
  palabra = palabra.replace(/ober/g, "o");
  palabra = palabra.replace(/ufat/g, "u");

  // mostrar el texto desencriptado
  texto_codificado.innerHTML = palabra;
  textarea.value = "";
}

function copy() {
  // usando la api de clipboard
  // Copiar el texto al portapapeles
  navigator.clipboard
    .writeText(texto_codificado.textContent)
    .then(() => {
      // Mostrar un mensaje de éxito
      console.log("Texto copiado al portapapeles");
    })
    .catch((error) => {
      // Mostrar un mensaje de error
      console.error("Error al copiar el texto: ", error);
    });
}
