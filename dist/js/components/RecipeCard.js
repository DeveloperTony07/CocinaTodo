app.component('recipe-card', {
    props: {
        index: {
            type: Number
        },
        image: {
            type: String
        },
        name: {
            type: String,
            default: "default name"
        },
        category: {
            type: String,
            default: "default category"
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
        onClickViewRecipe(){
            console.log("VIEW");
            this.$emit('recipedetails', this.index);
        },
        onClickLike(){
            //console.log("LIKE");
            this.$emit('recipelike', this.index);
            //this.recipe_likes++;
        }
    },
    template:
    /*html*/
    `
    <div class="cards">
    <div>
        <img v-bind:src="image" class="card-img-top" alt="receta">
        <button class="btn-save"><img src="svgs/bookmark_add.svg" alt="add"></button>
    </div>
    <div class="cards-body">
        <h5 class="txt-recipe-name-card text-truncate">{{ name }}</h5>
        <p class="txt-content-card ma-t-1">Categoria: <span>{{ category }}</span></p>
        <p class="txt-content-card">Ocación: <span>{{ ocasions }}</span></p>
        <p class="txt-content-card">Didicultad: <span>{{ level }}</span></p>
        <div>
            <div class="flex-buttons">
                <button class="btn-heard" v-on:click="onClickLike(index)"><img
                        src="svgs/heard-1.svg" alt="heard"></button>
                <p class="txt-num-like">{{ likes }}</p>
            </div>
        </div>

        <button class="btn-red" v-on:click="onClickViewRecipe(index)" data-bs-toggle="modal"
            data-bs-target="#exampleModal"><a href="#">VER RECETA</a></button>
    </div>
</div>
    `
})