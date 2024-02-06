function asignarValor(elemento, valor) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = valor;
}
let numerosGenerados = [];
let intentosJuego=0;
let intentos = 1;
let numeroSecreto = 0;
condicionesIniciales();

function condicionesIniciales() {
    intentosJuego++;
    if (intentosJuego > 5) {
        asignarValor("p", "Juego terminado reinicia si quieres seguir jugando");
        asignarValor("h1", "Juego del numero Secreto");
    }
    else {
        numeroSecreto = generarNumeroSecreto();
        asignarValor("p", "Indica un numero del 1 al 10");
        asignarValor("h1", "Juego del numero Secreto");
        intentos = 1;
    }

}

function generarNumeroSecreto() {
    let numeroAleatorio = (Math.floor(Math.random() * 10) + 1);
    console.log(numeroAleatorio);

    if (numerosGenerados.includes(numeroAleatorio)) {
        return generarNumeroSecreto();
    } else {
        numerosGenerados.push(numeroAleatorio);
        return numeroAleatorio;
    }

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario == numeroSecreto) {
        asignarValor("p", `Acertaste el numero en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        //Entra si no aciertas
        if (numeroDeUsuario > numeroSecreto) {
            asignarValor("p", "El numero secreto es menor");
        }
        else {
            asignarValor("p", "El numero secreto es mayor");
        }
        intentos++;
        vaciarCampo();
        //document.querySelector("#valorUsuario").value = '';
        //console.log(intentos)
        return;
    }
}


function vaciarCampo() {
    document.querySelector("#valorUsuario").value = '';
    return;
}


function reiniciarIntento() {
    condicionesIniciales();
    vaciarCampo();
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}