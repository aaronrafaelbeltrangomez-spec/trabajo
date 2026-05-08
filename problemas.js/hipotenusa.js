function calcularHipotenusa() {
    const catetoA = parseFloat(document.getElementById("catetoA").value);
    const catetoB = parseFloat(document.getElementById("catetoB").value);

    const resultado = Math.hypot(catetoA, catetoB);
    document.getElementById("resultado").innerText = "Hipotenusa: " + resultado;
};