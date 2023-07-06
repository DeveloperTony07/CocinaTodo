app.component('recipe-top', {
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

        occasions: {
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
        onClickViewRecipe() {
            console.log("VIEW");
            this.$emit('recipedetails', this.id);
        },
        onClickLike() {
            //console.log("LIKE");
            this.$emit('recipelike', this.id);
            //this.recipe_likes++;
        }
    },
    template:
    /*html*/
    `
    <div class="cards-top">
        <div class="img-top">
            <img v-bind:src="image" class="card-img-top" alt="receta">
            <button class="btn-save-top"><img src="svgs/bookmark_add.svg" alt="add"></button>
        </div>
        <div class="margin-body">
        <div>
            <h5 class="txt-name-top">{{name}}</h5>
        </div>
        <div>
            <p class="txt-content-card ma-t-1">Categoria: <span>{{category}}</span></p>
            <p class="txt-content-card">Ocación: <span>{{occasions}}</span></p>
        <p class="txt-content-card">Didicultad: <span>{{level}}</span></p>
        </div>
        <div class="flex-btn-like">
            <button class="btn-heard" v-on:click="onClickLike(id)"><img src="svgs/heard-1.svg"
                    alt="heard"></button>
            <p class="txt-num-like2">{{likes}}</p>
        </div>
        <div>
        <button class="btn-red" v-on:click="onClickViewRecipe(id)" data-bs-toggle="modal"
        data-bs-target="#exampleModal"><a href="#">VER RECETA</a></button>
            </div>
        </div>
    </div>
    `
})