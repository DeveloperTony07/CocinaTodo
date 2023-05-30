app.component('recipe-details', {
    props: {
        image: {
            type: String
        },
        name: {
            type: String
        },
        id: {
            type: Number
        },
        category:{
            type: String
        },
        area:{
            type: String
        }

    },
    data() {
        return {
            level: "",
            //area: "",
           // category: "",

            idRecipe: ""
        }
    },
    mounted() {
        this.$test.on("foo", function (data) {
            console.log(data);
        });
/*
        this.idRecipe = this.id;

        // Lookup full meal details by id
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.idRecipe
        })
            .then(
                (response) => {

                    let items = response.data.meals[0];
                    console.log(items);
                    //this.idRecipe = this.id;

                    this.category = items.strCategory;
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
            */
    },
    template:
        /*html*/
        `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class=" txt-modal-name fs-5" id="staticBackdropLabel">
                            {{name}} 
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body txt-modal-content">
                        <img class="d-block m-auto img-fluid" v-bind:src="image"
                            alt="img">
                        <p class="txt-center pt-3">Categoria:
                            <span>{{category}}</span>
                        </p>
                        <p class="txt-center pt-3">Área:
                            <span>{{area}}</span>
                        </p>
                        <p class="txt-center pt-3">Nivel: <span>{{level}}</span>
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" v-on:click="onClickPrev()">Prev</button>
                        <button type="button" class="btn btn-secondary" v-on:click="onClickPrev()">Next</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `
})