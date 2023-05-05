app.component('recipe-card',{
    props:{
        image:{
            type: String
        },
        name:{
            type: String
        },
        category:{
            type: String
        },
        ocasions:{
            type: String
        },
        ocasions:{
            type: String
        },
        level:{
            type: String
        }
    },
    templete:
    /* html */
    ` <div class="card cards" style="width: 18rem;">
    <img v-bind:src="image" class="card-img-top" alt="receta">
    <div class="cards-body">
        <h5 class="txt-recipe-name-card">{{name}}</h5>
        <p class="txt-content-card ma-t-1">Categoria: <span>{{category}}</span></p>
        <p class="txt-content-card">Ocación: <span>{{ocasions}}</span></p>
        <p class="txt-content-card">Didicultad: <span>{{level}}</span></p>
        <button class="btn-red"><a href="#">VER RECETA</a></button>
    </div>
</div>`
})