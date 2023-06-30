app.component('section-confirm-password',{
    template:
    /* html */
    `
    <div class="div-txt-title-login">
    <h1 class="txt-title-login">Cambia <span>tu Contraseña</span></h1>
</div>
<section class="registration">
    <div class="mtl-1">
        <input class="input-desing" type="password" id="password" name="password" placeholder="Nueva Contraseña"
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
</section>
<div class="container-center mtl-2 mb-25px">
    <button class="btn-checkIn txt-btn-standar" type="submit">Confirmar</button>
    <div class="mtl-1">
        <button class="btn-goBack" type="submit"><a href="recoverpassword.html"
                class="txt-btn-standar">Volver</a></button>
    </div>
    `
})