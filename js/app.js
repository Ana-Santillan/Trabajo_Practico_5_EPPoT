const opciones = ["piedra", "papel", "tijera"];
const botonPiedra = document.getElementById("piedra");
const botonPapel = document.getElementById("papel");
const botonTijera = document.getElementById("tijera");
const resultado = document.querySelector(".resultado");
const botonOtraVez = document.getElementById("jugarOtra");

botonPiedra.addEventListener("click", () => jugar("piedra"));
botonPapel.addEventListener("click", () => jugar("papel"));
botonTijera.addEventListener("click", () => jugar("tijera"));
botonOtraVez.addEventListener("click", jugarOtraVez);

function jugar(opcionUsuario) {
    const opcionPC = opciones[Math.floor(Math.random() * opciones.length)];
    let resultadoTexto = "";

    if (opcionUsuario === opcionPC) {
        resultadoTexto = "Empate!";
    } else if (
        (opcionUsuario === "piedra" && opcionPC === "tijera") ||
        (opcionUsuario === "papel" && opcionPC === "piedra") ||
        (opcionUsuario === "tijera" && opcionPC === "papel")
    ) {
        resultadoTexto = "Ganaste!";
    } else {
        resultadoTexto = "Perdiste!";
    }

    resultado.textContent = `Elegiste ${opcionUsuario}, la PC eligió ${opcionPC}. ${resultadoTexto}`;
    botonPiedra.disabled = true;
    botonPapel.disabled = true;
    botonTijera.disabled = true;
    botonOtraVez.style.display = "block";
}

function jugarOtraVez() {
    resultado.textContent = "";
    botonPiedra.disabled = false;
    botonPapel.disabled = false;
    botonTijera.disabled = false;
    botonOtraVez.style.display = "none";
}