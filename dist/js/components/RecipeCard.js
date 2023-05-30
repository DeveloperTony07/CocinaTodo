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
        }
        /*
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
         */
    },

    data() {
        return {
            idRecipes: "",

            category: "",
            area: "",
            tags: "",
            level: "",
            likes: 0

        }
    },

    mounted() {

        if (this.index == 0) {
            this.idRecipes = "52959";
        } else {
            this.idRecipes = this.index;
        }

        // Lookup full meal details by id
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.idRecipes
        })
            .then(
                (response) => {

                    let items = response.data.meals[0];
                    console.log(items);

                    //this.category = items.strCategory;
                    this.area = items.strArea;

                    //Generate Random Levels
                    const levels = ["Easy", "Medium", "Hard"];
                    const randomIndex = Math.floor(Math.random() * levels.length);
                    this.level = levels[randomIndex];

                }
            )
            .catch(
                error => console.log(error)
            );
    },
    methods: {
        onClickViewRecipe() {
            console.log("VIEW");
            this.$emit('recipedetails', this.index);
        },
        onClickLike() {
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
        <p class="txt-content-card">Área: <span>{{ area }}</span></p>
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