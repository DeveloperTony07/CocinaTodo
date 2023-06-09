app.component('section-singup',{
    template:
    /*html*/
    `
<div class="div-txt-title-login">
    <h1 class="txt-title-login">Crea <span>tu propia cuenta</span></h1>
</div>
<section class="registration">
    <form>
        <div>
            <input class="input-desing" type="text" id="nombre" name="nombre" placeholder="Nombre de usuario"
                required>
        </div>
        <div class="mtl-1">
            <input class="input-desing" type="email" id="email" name="email" placeholder="Email" required>
        </div>
        <div class="mtl-1">
            <input class="input-desing" type="password" id="password" name="password" placeholder="Contraseña"
                required>
            <div class="toggle-password">
                <button class="toggle-password">
                    <img src="svgs/visibility_lock_red.svg" alt="button"></button>
            </div>
        </div>
        <div class="mtl--1">
            <input class="input-desing" type="password" id="confirm-password" name="confirm-password"
                placeholder="Confirmar Contraseña" required>
            <div class="toggle-password">
                <button class="toggle-password">
                    <img src="svgs/visibility_lock_red.svg" alt="button"></button>
            </div>
        </div>
        <button class="btn-checkIn txt-btn-standar" type="submit">Registrarse</button>
    </form>
</section>

<div class="container-checkIn">
    <div class="line-checkIn"></div>
    <h1 class="txt-dark-xmed">También puedes registrarte con</h1>
    <div class="line-checkIn-two"></div>
</div>

<div class="container-center mtl-2">
    <button class="btn-checkIn txt-btn-standar" type="submit"><span>G- </span>Registrase con Googele</button>
    <div class="mtl-1">
        <button class="btn-goBack" type="submit"><a href="index.html" class="txt-btn-standar">Volver</a></button>
    </div>
    <div class="mbl-1 mtl-2">
    <p class="txt-dark-med">Si ya tienes una cuenta <button class="btn-enter-here" type="submit"><a class="txt-red-med" href="login.html">Ingresa Aquí</a> </button> </p>
    </div>
</div>
    `
})