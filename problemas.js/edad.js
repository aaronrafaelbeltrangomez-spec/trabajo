function calcularEdad() {
    const añoNacimiento = parseFloat(document.getElementById("añoNacimiento").value);
    const añoActual = parseFloat(document.getElementById("añoActual").value);

    const resultado = añoActual - añoNacimiento;
    document.getElementById("resultado").innerText = "Edad: " + resultado + " años";
};