app.component('section-upload-recipe',{
    template:
    /* html */
    `
    <div class="div-txt-title-login">
    <h1 class="txt-title-login">Subir Receta</h1>
</div>

<section class="container-upload mt-25px">
    <!-- Name and categories -->
    <div>
        <h4 class="txt-dark-med ml-20px mb-10px">Nombre de la receta</h4>
        <div class="input-name-recipes">
            <input type="text" id="namerecipe" name="namerecipe" required>
        </div>
    </div>

    <!-- Dropdowns -->
    <div>
        <h4 class="txt-dark-med mb-10px">Categorias</h4>
        <div class="dropdowns-upload mt--10px">
            <select name="ocaciones" id="Categoria">
                <option value="Categoria">Categoria</option>
                <option value="Desayunos">Cumpleaños</option>
                <option value="Bebidas">Día del padre</option>
                <option value="Entradas">Día de la madre</option>
                <option value="Almuerzos">Día del niño</option>
                <option value="Postres">Navidad</option>
                <option value="Sopas">Semana Santa</option>
            </select>
        </div>
    </div>

    <div>
        <h4 class="txt-dark-med mb-10px">Ocaciones</h4>
        <div class="dropdowns-upload mt--10px">
            <select name="ocaciones" id="ocaciones">
                <option value="Ocupaciones">Ocaciones</option>
                <option value="Cumpleaños">Cumpleaños</option>
                <option value="Día del Padre">Día del padre</option>
                <option value="Día de la Madre">Día de la madre</option>
                <option value="Día del Niño">Día del niño</option>
                <option value="Navidad">Navidad</option>
                <option value="Semana Santa">Semana Santa</option>
                <option value="Verano">Verano</option>
            </select>
        </div>
    </div>

    <div>
        <h4 class="txt-dark-med mb-10px ml-20-1px">Nivel</h4>
        <div class="dropdowns-upload ml-20p-1x mt--10px">
            <select name="ocaciones" id="Dificultad">
                <option value="Nivel">Nivel</option>
                <option value="Facil">Fácil</option>
                <option value="Medio">Medio</option>
                <option value="Dificil">Dificil</option>
            </select>
        </div>
    </div>

</section>

<section class="upload-img">
    <!-- upload img -->
    <form action="#" method="post" enctype="multipart/form-data">
        <input type="file" name="imagen" id="imagen" accept="image/*">
    </form>

    <div class="image-preview">
        <h2 class="txt-dark-med">Image de la receta:</h2>
        <img id="preview" src="#" alt="Vista previa de la imagen">
    </div>
</section>
<!-- Recipe time -->
<section class="ml-110px mb-25px">
    <form class="div-flex">
        <div>
            <label class="txt-dark-med mb-10px" ml-25px for="tiempo-coccion">Tiempo de cocción
                (minutos):</label>
            <div>
                <input class="input-time-recipe" type="number" name="tiempo-coccion" id="tiempo-coccion"
                    required>
            </div>
        </div>

        <div>
            <label class="txt-dark-med pl-56px mb-10px" for="tiempo-preparacion">Tiempo de preparación
                (minutos):</label>
            <div>
                <input class="input-time-recipe ml-57px" type="number" name="tiempo-preparacion"
                    id="tiempo-preparacion" required>
            </div>
        </div>

        <div>
            <label class=" txt-dark-med pl-56px mb-10px" for="tiempo-total">Tiempo total (minutos):</label>
            <div>
                <input class="input-time-recipe ml-57px" type="number" name="tiempo-total" id="tiempo-total"
                    readonly>
            </div>
        </div>
    </form>
</section>

<!-- Portions -->
<div class="ml-50px mt--10px mb-25px">
    <label class="txt-dark-med pl-56px mb-10px" for="tiempo-preparacion">Porciones <span><img
                src="svgs/portions.svg" alt="imgPortions"></span></label>
    <div>
        <input class="input-time-recipe ml-57px" type="number" name="portions" id="portions" required>
    </div>
</div>

<!-- text area -->
<form class="div-block ml-110px">
    <div class="div-block">
        <div class="mb-10px">
            <label class="txt-dark-med" for="ingredientes">Ingredientes:</label>
        </div>
        <textarea class="text-area-upload" id="ingredientes" name="ingredientes" rows="8"></textarea>
    </div>
    <div class="div-block">
        <div class="mb-10px">
            <label class="txt-dark-med" for="instrucciones">Instrucciones:</label>
        </div>
        <textarea class="text-area-upload" id="instrucciones" name="instrucciones" rows="8"></textarea>
    </div>
    <div class="div-block">
        <div class="mb-10px">
            <label class="txt-dark-med" for="detalles">Detalles:</label>
        </div>
        <textarea class="text-area-upload" id="detalles" name="detalles" rows="8"></textarea>
    </div>
</form>
<div class="container-center mt-25px mb-25px">
    <input class="btn-submit" type="submit" value="Subir Receta">
</div>
    `
})