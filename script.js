function encriptarPalabra(palabra) {
    let palabraEncriptada = palabra.replaceAll("e", "enter");
    palabraEncriptada = palabraEncriptada.replaceAll("i", "imes");
    palabraEncriptada = palabraEncriptada.replaceAll("a", "ai");
    palabraEncriptada = palabraEncriptada.replaceAll("o", "ober");
    palabraEncriptada = palabraEncriptada.replaceAll("u", "ufat");

    return palabraEncriptada;
}

function desencriptarPalabra(palabraEncriptada) {
    let palabra = palabraEncriptada.replaceAll("enter", "e");
    palabra = palabra.replaceAll("imes", "i");
    palabra = palabra.replaceAll("ai", "a");
    palabra = palabra.replaceAll("ober", "o");
    palabra = palabra.replaceAll("ufat", "u");

    return palabra;
}

function encriptarTexto() {

    let textoIngresado = document.getElementById("textoIngresado").value;
    let textoMostrado = document.getElementById("textoMostrado");
    let encriptarPalabras = textoIngresado.split(" ").map(encriptarPalabra);

    textoMostrado.value = encriptarPalabras.join(" ");

}

function desencriptarTexto(){

    let textoIngresado = document.getElementById("textoIngresado").value;
    let textoMostrado = document.getElementById("textoMostrado");
    let desencriptarPalabras = textoIngresado.split(" ").map(desencriptarPalabra);

    textoMostrado.value = desencriptarPalabras.join(" ");

}

function copiarTextoMostrado(){
    const textoMostrado = document.getElementById('textoMostrado');
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textoMostrado.value)
        .then(() => {
          alert('Texto copiado al portapapeles');
        })
        .catch((error) => {
          console.error('Error al copiar el texto: ', error);
        });
    } else {
      // Usar el método antiguo
      const textarea = document.createElement('textarea');
      textarea.value = textoMostrado.value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Texto copiado al portapapeles');
    }
}

function DesaparecerElementos(){
    let textoMostrado = document.getElementById('textoMostrado');
    let elementosMostrados = document.getElementById('elementosMostrados');

    textoMostrado.addEventListener("input", function(){
        elementosMostrados.style.display = "none";
    });

}

document.addEventListener("DOMContentLoaded", function(event) {
    const botonEncriptar = document.getElementById("botonEncriptar");
    botonEncriptar.onclick = encriptarTexto;
});

document.addEventListener("DOMContentLoaded", function(event) {
    const botonDesencriptar = document.getElementById("botonDesencriptar");
    botonDesencriptar.onclick = desencriptarTexto;
});

document.addEventListener("DOMContentLoaded", function(event) {
    const botonCopiar = document.getElementById("botonCopiar");
    botonCopiar.onclick = copiarTextoMostrado;
});

document.addEventListener("DOMContentLoaded", function(event){
    const elementosMostrados = document.getElementById('elementosMostrados');
    const botonEncriptar = document.getElementById('botonEncriptar');

    botonEncriptar.addEventListener("click", function(){
        elementosMostrados.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function(event){
    const elementosMostrados = document.getElementById('elementosMostrados');
    const botonDesencriptar = document.getElementById('botonDesencriptar');

    botonDesencriptar.addEventListener("click", function(){
        elementosMostrados.style.display = "none";
    });
});
//sin tildes y mayusculas
const textarea = document.getElementById("textoIngresado");

textarea.addEventListener("input", function() {
  let value = this.value.toLowerCase(); 
  value = value.replace(/[áéíóú]/g, ""); 
  this.value = value;
});
