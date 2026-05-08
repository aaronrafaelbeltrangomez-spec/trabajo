function calcularCobro() {
    const horas = parseFloat(document.getElementById("horas").value);
    const costoPorHora = parseFloat(document.getElementById("costoPorHora").value);

    const resultado = horas * costoPorHora;
    document.getElementById("resultado").innerText = "Total del cobro   : $" + resultado;
};