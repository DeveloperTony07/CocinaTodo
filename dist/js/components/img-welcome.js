app.component('img-welcome',{
    props:{
        image:{
            type: String
        }
    },
    template:
    /* html */
    ` <div class="content-fluid position-relative img-header">
    <img v-bind:src="image" class=" img-header img-fluid" alt="header">
    <div class="position-absolute top-50 start-50 translate-middle">
    <h1 class="title-header">Encuentra Todo <br>Tipo De Recetas</h1>
    <!--
        <h1 class="title-header">
        <span style='--content: "ENCUENTRA"; --start-color: #F23D4C; --end-color:#010A26; --delay: 0s;'>ENCUENTRA</span>
        <span style='--content: "TODO TIPO"; --start-color: #F23D4C; --end-color:#010A26; --delay 3.33s;'>TODO TIPO</span>
        <span style='--content: "DE RECETAS"; --start-color: #F23D4C; --end-color:#010A26; --delay 6.66s;'>DE RECETAS</span>
        </h1>
        -->
    </div>
    </div>`
})