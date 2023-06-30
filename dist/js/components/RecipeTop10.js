app.component('recipe-top-10', {
    props:{
        id:{
            type: Number
        }
        ,
        image: {
            type: String
        },
        name: {
            type: String,
            default: "default name"
        },
        category: {
            type: String
        },

        ocasions: {
            type: String,
            default: "default description"
        },
        level: {
            type: String,
            default: "default level"
        },
        likes: {
            type: Number,
            default: 0
        }
    },
    methods: {
        
    },
    template:
    /*html*/
    `
    <div class="cards-top">
        <div class="img-top">
            <img v-bind:src="item.image" class="card-img-top" alt="receta">
            <button class="btn-save-top"><img src="svgs/bookmark_add.svg" alt="add"></button>
        </div>
        <div class="margin-body">
        <div>
            <h5 class="txt-name-top">{{item.name}}</h5>
        </div>
        <div>
            <p class="txt-content-card ma-t-1">Categoria: <span>{{item.category}}</span></p>
            <p class="txt-content-card">Ocación: <span>{{item.ocasions}}</span></p>
        <p class="txt-content-card">Didicultad: <span>{{item.level}}</span></p>
        </div>
        <div class="flex-btn-like">
            <button class="btn-heard" v-on:click="onClickLike(index)"><img src="svgs/heard-1.svg"
                    alt="heard"></button>
            <p class="txt-num-like2">{{item.likes}}</p>
        </div>
        <div>
                <button class="btn-red btn-movil"><a href="#">Ver Receta</a></button>
            </div>
        </div>
    </div>
    `
})