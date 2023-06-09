app.component('section-change-password', {
    template:
        /* html */
        `
    <div class="div-txt-title-login">
    <h1 class="txt-title-login">Cambia <span>tu contraseña</span></h1>
</div>

<section class="registration">
    <div>
        <label class="txt-dark-med mb-10px ml--270px" for="changepassword">Ingresa tu correo electronico</label>
    </div>
    <div>
        <input class="input-desing" type="email" id="changepassword" name="changepassword" placeholder="Email"
            required>
    </div>
</section>
<div class="ml-300px mt-25px mb--10px">
    <label class="txt-dark-med" for="changepassword">Escriba el codigo de confimación</label>
</div>
<div class="confirmation-code">
    <input type="text" maxlength="1" />
    <input type="text" maxlength="1" />
    <input type="text" maxlength="1" />
    <input type="text" maxlength="1" />
    <input type="text" maxlength="1" />
    <input type="text" maxlength="1" />
</div>

<div class="container-center mtl-2 mb-25px">
    <button class="btn-checkIn txt-btn-standar" type="submit">Confirmar</button>
    <div class="mtl-1">
        <button class="btn-goBack" type="submit"><a href="index.html"
                class="txt-btn-standar">Volver</a></button>
    </div>
    `
})