const reemplazos = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};

const encriptarPalabra = palabra => {
    let palabraEncriptada = palabra;
    for (const [vocal, reemplazo] of Object.entries(reemplazos)) {
        const regex = new RegExp(vocal, "g");
        palabraEncriptada = palabraEncriptada.replaceAll(regex, reemplazo);
    }
    return palabraEncriptada;
};

const desencriptarPalabra = palabraEncriptada => {
    let palabra = palabraEncriptada;
    for (const [vocal, reemplazo] of Object.entries(reemplazos)) {
        const regex = new RegExp(reemplazo, "g");
        palabra = palabra.replaceAll(regex, vocal);
    }
    return palabra;
};

const encriptarTexto = () => {
    const textoOriginal = document.getElementById("textoIngresado");
    if (textoOriginal) {
      const textoMostrado = document.getElementById("textoMostrado");
      const encriptarPalabras = textoOriginal.value.split(" ").map(palabra => encriptarPalabra(palabra));
      textoMostrado.value = `${encriptarPalabras.join(" ")}`;
    }
};

const desencriptarTexto = () => {
    const textoOriginal = document.getElementById("textoIngresado");
    if (textoOriginal) {
      const textoMostrado = document.getElementById("textoMostrado");
      const desencriptarPalabras = textoOriginal.value.split(" ").map(palabra => desencriptarPalabra(palabra));
      textoMostrado.value = `${desencriptarPalabras.join(" ")}`;
    }
};

const copiarTextoMostrado = () => {
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
      alert(`Texto copiado al portapapeles`);
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    //const
    //textoIngresado
    const texto = document.getElementById("textoIngresado");
    //botones
    const botonEncriptar = document.getElementById("botonEncriptar");
    const botonDesencriptar = document.getElementById("botonDesencriptar");
    const botonCopiar = document.getElementById("botonCopiar");
    //cuadro de texto y boton copiar
    const textoMostradoED = document.getElementById('textoMostradoED');
    //Imagen y mensaje 
    const elementosMostrados = document.getElementById('elementosMostrados');
    //Encriptar Texto
    botonEncriptar.addEventListener("click", function() {
      if (texto) {
        const textoEncriptado = encriptarTexto(texto.value);
        document.getElementById("textoEncriptado").value = textoEncriptado;
      }
    });
    //Desencriptar Texto
    botonDesencriptar.addEventListener("click", function() {
      if (texto) {
        const textoDesencriptado = desencriptarTexto(texto.value);
        document.getElementById("textoDesencriptado").value = textoDesencriptado;
      }
    });
    // Copiar texto
    botonCopiar.onclick = copiarTextoMostrado;
    //Mostrar cuadro de texto y boton escondidos
    botonEncriptar.addEventListener("click", function(){
        textoMostradoED.style.display = "flex";
        elementosMostrados.style.display = "none";
    });
    botonDesencriptar.addEventListener("click", function(){
        textoMostradoED.style.display = "flex";
        elementosMostrados.style.display = "none";
    });
    //sin tildes y mayusculas
    texto.addEventListener("input", function() {
        let value = this.value.toLowerCase(); 
        value = value.replace(/[áéíóú]/g, ""); 
        this.value = value;
      });

});