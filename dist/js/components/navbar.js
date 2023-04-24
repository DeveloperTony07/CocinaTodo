app.component('nabvar-component', {
    props:{
        image:{
            type: String
        }
    },
    template:
    /* html */
    ` <header class="pt-5">
    <nav class="navbar nav-bg navbar-expand-lg">
        <div class="container-fluid">
            <img class="ps-3 nav-pd" v-bind:src="image" alt="graphicIdentifer">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-txt active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-txt" href="#">Subir Receta</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-txt" href="#">Recetas Guardadas</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <a class="btn-check-in" href="#">Registrarse</a>
                </form>
            </div>
        </div>
    </nav>
</header>`
})