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
        <h1 class="title-header">ENCUENTRA TODO <br> TIPO DE RECETAS</h1>
    </div>
    </div>`
})