function recomendador() {
    let distancia = parseFloat(document.getElementById("cantidad").value);
    let transporte = "Te recomendamos ir ";
    let errorTransporte = "";


    if (distancia <= 0) {
        errorTransporte = "Introduzca un valor válido";
        transporte = "";
    }
    else if (distancia > 0 && distancia <= 1000) {
        transporte = transporte + "a PIE";
    }
    else if (distancia > 1000 && distancia <= 10000) {
        transporte = transporte + "en BICICLETA";
    }
    else if (distancia > 10000 && distancia <= 30000) {
        transporte = transporte + "en COLECTIVO";
    }
    else if (distancia > 30000 && distancia <= 100000) {
        transporte = transporte + "en AUTO";

    }
    else if (distancia > 100000) {
        transporte = transporte + "en AVIÓN";
    }

    document.getElementById("transporte").innerHTML = transporte;
    document.getElementById("error").innerHTML = errorTransporte;
    // console.log(`Para ${distancia} recomendamos ir en ${transporte}`);
}