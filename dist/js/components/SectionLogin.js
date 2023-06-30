app.component('section-login',{
    template:
    /* html */
    `
<div class="div-txt-title-login">
    <h1 class="txt-title-login">Bienvenido <span>de nuevo</span></h1>
</div>

<section class="registration">
    <form>
        <div>
            <input class="input-desing" type="text" id="emailnombre" name="emailnombre" placeholder="Email o Nombre de usuario"
                required>
        </div>
        <div class="mtl-1">
            <input class="input-desing" type="passwordlogin" id="passwordlogin" name="password" placeholder="Contraseña"
                required>
            <div class="toggle-password">
                <button class="toggle-password">
                    <img src="svgs/visibility_lock_red.svg" alt="button"></button>
            </div>
        </div>
        <button class="btn-checkIn txt-btn-standar" type="submit">Ingresar</button>
    </form>
</section>

<div class="container-checkIn">
    <div class="line-checkIn"></div>
    <h1 class="txt-dark-xmed">También puedes ingresar con</h1>
    <div class="line-checkIn-two"></div>
</div>

<div class="container-center mtl-2">
    <button class="btn-checkIn txt-btn-standar" type="submit"><span>G- </span>Ingresa con Googele</button>
    <div class="mtl-1">
        <button class="btn-goBack" type="submit"><a href="index.html" class="txt-btn-standar">Volver</a></button>
    </div>
    <div class="mbl-2 mtl-2">
        <p class="txt-dark-med">Si olvidaste tu contraseña <button class="btn-enter-here" type="submit"><a href="recoverpassword.html" class="txt-red-med" href="#">Ingresa Aquí</a> </button> </p>
        </div>
    <div class="mbl-1 mtl-2">
    <p class="txt-dark-med">Si no tienes una cuenta <button class="btn-enter-here" type="submit"><a class="txt-red-med" href="singup.html">Ingresa Aquí</a></button></p>
    </div>
</div>
    `
})