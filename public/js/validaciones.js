const validarVuelo = () => {
    const departing = new Date(document.getElementById("departing").value);
    const returning = new Date(document.getElementById("returning").value);

    const today = new Date();

    let mensaje = "";

    if (departing < today || returning < today) {
        mensaje += 'Las fechas deben ser mayores a la fecha actual';
    } else if (departing > returning) {
        mensaje += 'La fecha de partida debe ser menor o igual a la de regreso';
    }

    const alertElement = document.getElementById("mensaje");

    if (mensaje.length > 0) {
        alertElement.style.display = "block";
        alertElement.innerHTML = mensaje;
    } else {
        alertElement.style.display = "none";
    }
}

document.querySelector("#btnRegistrarVuelo").addEventListener('click', validarVuelo);
