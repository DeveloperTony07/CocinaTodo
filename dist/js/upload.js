window.onload = function () {

    /* add recipe times function */
    var tiempoCoccionInput = document.getElementById('tiempo-coccion');
    var tiempoPreparacionInput = document.getElementById('tiempo-preparacion');
    var tiempoTotalInput = document.getElementById('tiempo-total');

    tiempoCoccionInput.addEventListener('input', actualizarTiempoTotal);
    tiempoPreparacionInput.addEventListener('input', actualizarTiempoTotal);

    function actualizarTiempoTotal() {
        var tiempoCoccion = parseInt(tiempoCoccionInput.value);
        var tiempoPreparacion = parseInt(tiempoPreparacionInput.value);

        // Validar que los valores sean números y no sean negativos
        if (isNaN(tiempoCoccion) || tiempoCoccion < 0) {
            tiempoCoccion = 0; // Establecer el valor en cero si es negativo o no es un número
            tiempoCoccionInput.value = tiempoCoccion; // Actualizar el campo de entrada
        }

        if (isNaN(tiempoPreparacion) || tiempoPreparacion < 0) {
            tiempoPreparacion = 0; // Establecer el valor en cero si es negativo o no es un número
            tiempoPreparacionInput.value = tiempoPreparacion; // Actualizar el campo de entrada
        }

        var tiempoTotal = tiempoCoccion + tiempoPreparacion;

        tiempoTotalInput.value = tiempoTotal;
    }

    /* preview recipe image */
    var imagenInput = document.getElementById('imagen');
    var previewImg = document.getElementById('preview');

    imagenInput.addEventListener('change', function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function (event) {
            previewImg.src = event.target.result;
        };

        reader.readAsDataURL(file);
    });
};


