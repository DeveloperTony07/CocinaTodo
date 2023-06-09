app.component('header-two',{
    template:
    /* html */
    `
    <header class="header">
    <div class="logo">
        <img src="svgs/LogoWhite.svg" alt="logo">
    </div>
    <nav>
        <ul class="nav-links">
            <li><a class="nav-txt mr-30" href="index.html">Inicio</a></li>
            <li><a class="nav-txt mr-30" href="uploadrecipe.html">Subir Receta</a></li>
            <li><a class="nav-txt mr-30" href="#">Recetas Guardadas</a></li>
            <li><a class="nav-txt mr-30" href="#">Perfil</a></li>
        </ul>
    </nav>

    <a onclick="openNav()" class="btn-nav-menu" href="#"><button>Menu</button></a>

    <div class="overlay-two" id="mobile-menu">
        <a class="close" onclick="closeNav()" href="#">&times;</a>
        <div class="overlay-content">
            <li><a class="nav-txt" href="index.html">Inicio</a></li>
            <li><a class="nav-txt" href="uploadrecipe.html">Subir Receta</a></li>
            <li><a class="nav-txt" href="#">Recetas Guardadas</a></li>
            <li><a class="nav-txt" href="#">Perfil</a></li>
        </div>
    </div>
</header>

    `
})