function calcularCosto() {
    const kilometros = parseFloat(document.getElementById("kilometros").value);
    const costoPorKm = parseFloat(document.getElementById("costoPorKm").value);

    const resultado = kilometros * costoPorKm;
    document.getElementById("resultado").innerText = "Total del viaje: $" + resultado;
};