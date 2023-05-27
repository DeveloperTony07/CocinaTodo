app.component('filters-component',{
    template:
    /*html*/
    `
    <div class="m-basic-2 container-row">
            <h2 class="txt-filters">Buscar <span>Recetas</span></h2>
            <h2 class="txt-filters ml-filters">Elegir <span>Recetas por</span></h2>
        </div>
        <section class="container-search">
            <!-- Search -->
            <div class="search-bar">
                <input type="text" placeholder="Buscar">
            </div>
            <!-- Search-->
            <!-- Dropdowns -->
            <div class="dropdowns  ml-30">
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
            <div class="dropdowns  ml-30">
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
            <div class="dropdowns ml-30">
                <select name="ocaciones" id="Dificultad">
                    <option value="Nivel">Nivel</option>
                    <option value="Facil">Fácil</option>
                    <option value="Medio">Medio</option>
                    <option value="Dificil">Dificil</option>
                </select>
            </div>
        </section>
        <div class="m-basic">
            <h2 class="txt-filters m-negative-1">100 <span>Resultados</span></h2>
        </div>
    `
})