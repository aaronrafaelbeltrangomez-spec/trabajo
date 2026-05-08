function calcularArea() {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const resultado = (base * altura) / 2;
    document.getElementById("resultado").innerText = "Área del triángulo: " + resultado;
};