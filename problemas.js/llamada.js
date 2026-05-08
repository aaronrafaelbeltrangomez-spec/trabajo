function calcularCosto() {
    const minutos = parseFloat(document.getElementById("minutos").value);
    const costoPorMinuto = parseFloat(document.getElementById("costoPorMinuto").value);

    const resultado = minutos * costoPorMinuto;
    document.getElementById("resultado").innerText = "Total del costo: $" + resultado;
};