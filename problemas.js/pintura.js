function generarPresupuesto() {
    const metrosCuadrados = parseFloat(document.getElementById("metrosCuadrados").value);
    const costoPorM2 = parseFloat(document.getElementById("costoPorM2").value);

    const resultado = metrosCuadrados * costoPorM2;
    document.getElementById("resultado").innerText = "Total del presupuesto: $" + resultado;
};