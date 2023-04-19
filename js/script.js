// Obtenemos referencias a los elementos del DOM
let texto = document.querySelector('#texto');
let btnEncriptar = document.querySelector('#encriptar');
let btnDesencriptar = document.querySelector('#desencriptar');
let btnCopiar = document.querySelector('#copiar')
let boxTexto = document.querySelector('#box-texto');
let boxTextoFinal = document.querySelector('#box-texto-final');
let textoFinal = document.querySelector('#texto-final');

// Función para encriptar el texto
function encriptarTexto(texto) {
  let textoEncriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return textoEncriptado;
}

// Funcíon para desencriptar el texto
function desencriptarTexto(textoEncriptado) {
  let texto = textoEncriptado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return texto;
}

// Botón Encriptar
btnEncriptar.addEventListener('click', () => {
  let textoOriginal = texto.value.toLowerCase();
  textoOriginal = encriptarTexto(textoOriginal);

  console.log(textoOriginal);

  if (textoOriginal == '') {
    Swal.fire({
      title: 'Error!',
      text: 'Tiene que ingresar un texto para encriptar',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    boxTexto.style.display = 'flex';
    boxTextoFinal.style.display = 'none';

  } else {
    boxTexto.style.display = 'none';
    boxTextoFinal.style.display = 'block';
    textoFinal.innerHTML = textoOriginal;
    texto.value = '';
  }
});

// Botón Desencriptar
btnDesencriptar.addEventListener('click', () => {
  let textoDesencriptado = texto.value;
  textoDesencriptado = desencriptarTexto(textoDesencriptado);

  if (textoDesencriptado == '') {
    Swal.fire({
      title: 'Error!',
      text: 'Tiene que ingresar un texto para desencriptar',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    boxTexto.style.display = 'flex';
    boxTextoFinal.style.display = 'none';
  } else {
    boxTexto.style.display = 'none';
    boxTextoFinal.style.display = 'block';
    textoFinal.innerHTML = textoDesencriptado;
    texto.value = '';
  }
});

// Botón Copiar
btnCopiar.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(textoFinal.innerHTML);
    Swal.fire({
      title: 'Texto Copiado!',
      text: 'El texto se copio en el portapapeles',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
    console.log('Texto copiado');
  } catch (error) {
    console.log('Texto no copiado: ', error);
  }
});


function soloLetras(event) {
  let codigoTecla = event.charCode || event.keyCode;
  let tecla = String.fromCharCode(codigoTecla);
  let letras = /^[A-Za-z]+$/;
  if (!tecla.match(letras)) {
    event.preventDefault();
    Swal.fire({
      title: 'Error!',
      text: 'Recuede que solamente puede ingresar letras del alfabeto sin acentos, números o signos',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
}