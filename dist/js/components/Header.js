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
            <li><a class="nav-txt mr-30" href="#">Inicio</a></li>
            <li><a class="nav-txt mr-30" href="#">Subir Receta</a></li>
            <li><a class="nav-txt mr-30" href="#">Recetas Guardadas</a></li>
            <li><a class="nav-txt mr-30" href="#">Perfil</a></li>
            <button class="btn-white mr-30"><a class="btn-title-a">Registrarse</a></button>
            <button class="btn-white"><a class="btn-title-a">Iniciar Sesión</a></button>
        </ul>
    </nav>

    <a onclick="openNav()" class="btn-nav-menu" href="#"><button>Menu</button></a>

    <div class="overlay" id="mobile-menu">
        <a class="close" onclick="closeNav()" href="#">&times;</a>
        <div class="overlay-content">
            <li><a class="nav-txt" href="#">Inicio</a></li>
            <li><a class="nav-txt" href="#">Subir Receta</a></li>
            <li><a class="nav-txt" href="#">Recetas Guardadas</a></li>
            <li><a class="nav-txt" href="#">Perfil</a></li>
            <button class="btn-white"><a class="btn-title-a">Registrarse</a></button>
            <button class="btn-white"><a class="btn-title-a">Iniciar Sesión</a></button>
        </div>
    </div>
</header>
<!-- Close Header -->
<!-- Start Img -->
<div class="container-img-header">
    <img src="imgs/header.jpg" alt="header">
    <div class="container-title">
        <h1>Descubre todo<br>tipo de Recetas</h1>
    </div>
</div>
<!-- End img -->
`
})