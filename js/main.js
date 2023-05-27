let textarea = document.getElementById("textarea");
let text = document.getElementById("text");
let imagen_container = document.getElementById("container-img");
let button_copiar = document.getElementById("container-button");
let texto_codificado = document.getElementById("texto-codificado");

function encriptar() {
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

function deleteClass(texto) {
  console.log(texto);

  imagen_container.classList.remove("show");
  imagen_container.classList.add("no-show");

  button_copiar.classList.remove("no-visible");
  button_copiar.classList.add("show");

  text.classList.remove("no-show");
  text.classList.add("show");
}
