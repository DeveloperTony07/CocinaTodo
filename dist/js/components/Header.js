app.component('header-component',{
    template:
    /*html*/
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
            <button class="btn-white mr-30"><a  href="singup.html" class="btn-title-a">Registrarse</a></button>
            <button class="btn-white"><a href="login.html" class="btn-title-a">Iniciar Sesión</a></button>
        </ul>
    </nav>

    <a onclick="openNav()" class="btn-nav-menu" href="#"><button>Menu</button></a>

    <div class="overlay" id="mobile-menu">
        <a class="close" onclick="closeNav()" href="#">&times;</a>
        <div class="overlay-content">
            <li><a class="nav-txt" href="index.html">Inicio</a></li>
            <li><a class="nav-txt" href="uploadrecipe.html">Subir Receta</a></li>
            <li><a class="nav-txt" href="#">Recetas Guardadas</a></li>
            <li><a class="nav-txt" href="#">Perfil</a></li>
            <button class="btn-white"><a href="singup.html" class="btn-title-a">Registrarse</a></button>
            <button class="btn-white"><a href="login.html" class="btn-title-a">Iniciar Sesión</a></button>
        </div>
    </div>
</header>

`
})