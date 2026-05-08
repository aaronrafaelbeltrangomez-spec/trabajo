function convertir() {
    const mxn = parseFloat(document.getElementById("mxn").value);
    const tasa = parseFloat(document.getElementById("tasa").value);

    const resultado = mxn / tasa;
    document.getElementById("resultado").innerText = "Total en dólares: $" + resultado;
};