var mensajeEntrada=document.getElementById("mensajeEntrada")
var mensajeSalida=document.getElementById("mensajeSalida")
var salidah1=document.getElementById("salida")
var entradah1=document.getElementById("entrada")
var abecedario=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
function cifrar() {
    salidah1.innerText = "Mensaje cifrado";
    var clave = document.getElementById("clave").value;
    let numero = parseInt(clave);
    let mensaje = mensajeEntrada.value;
    
    if (numero > 0 && !isNaN(numero)) {
        entradah1.innerText = "Mensaje";
        let mensajeCifrado = "";

        for (let i = 0; i < mensaje.length; i++) {
            let caracter = mensaje[i].toLowerCase();
            
            if (abecedario.includes(caracter)) {
                let indiceOriginal = abecedario.indexOf(caracter);
                let nuevoIndice = (indiceOriginal + numero) % abecedario.length;
                mensajeCifrado += abecedario[nuevoIndice];
            } else {
                mensajeCifrado+=caracter;
            }
        }

        mensajeSalida.value = mensajeCifrado;
    } else {
        entradah1.innerText = "Tienes que ingresar el mensaje y la clave";
    }
}

function descifrar() {
    salidah1.innerText = "Mensaje descifrado";
    var clave = document.getElementById("clave").value;
    let numero = parseInt(clave);
    let mensaje = mensajeEntrada.value;

    if (numero > 0 && !isNaN(numero)) {
        entradah1.innerText = "Mensaje";
        let mensajeDescifrado = "";

        for (let i = 0; i < mensaje.length; i++) {
            let caracter = mensaje[i].toLowerCase();
            
            if (abecedario.includes(caracter)) {
                let indiceOriginal = abecedario.indexOf(caracter);
                let nuevoIndice = (indiceOriginal - numero + abecedario.length) % abecedario.length;
                mensajeDescifrado += abecedario[nuevoIndice];
            } else {
                mensajeDescifrado += caracter;
            }
        }

        mensajeSalida.value = mensajeDescifrado;
    } else {
        entradah1.innerText = "Tienes que ingresar el mensaje y la clave";
    }
}







    
