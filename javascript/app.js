
    const cambiarEstiloButton = document.getElementById("cambiar-css");
    const estiloElement = document.getElementById("estilos");

    let estiloActual = 1;

    cambiarEstiloButton.onclick = function() {
        estiloActual = (estiloActual % 3) + 1;
        estiloElement.href = `./css/estilos-${estiloActual}.css`;
    };