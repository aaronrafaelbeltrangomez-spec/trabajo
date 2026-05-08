function calcularTiempo() {
    const distancia = parseFloat(document.getElementById("distancia").value);
    const velocidad = parseFloat(document.getElementById("velocidad").value);

    const resultado = distancia / velocidad;
    document.getElementById("resultado").innerText = "Tiempo del viaje: " + resultado + " horas";
};