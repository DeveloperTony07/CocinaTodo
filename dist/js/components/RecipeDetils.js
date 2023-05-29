app.component('recipe-details',{
    props:{
        id: {
            type: Number
        }
    },
    data() {
        return {
            idRecipes: "",
        }
    },mounted() {
        this.idRecipes = this.index;
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ this.idRecipes
        })
            .then(
                (response) => {

                    let items = response.data.meals[0];
                    console.log(items);

                    /*
                    this.category = items.strCategory;
                    this.area = items.strArea;

                    //Generate Random Levels
                    const levels = ["Easy", "Medium", "Hard"];
                    const randomIndex = Math.floor(Math.random() * levels.length);
                    this.level = levels[randomIndex];
                    */

                }
            )
            .catch(
                error => console.log(error)
            );
    },
    template:
    /*html*/
    `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class=" txt-modal-name fs-5" id="staticBackdropLabel">
                            {{recipes[selectedIndex].name}}
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body txt-modal-content">
                        <img class="d-block m-auto img-fluid" v-bind:src="recipes[selectedIndex].image"
                            alt="{{ recipes[selectedIndex].name }}">
                        <p class="txt-center pt-3">Categoria:
                            <span>{{recipes[selectedIndex].category}}</span>
                        </p>
                        <p class="txt-center pt-3">Ocaciones:
                            <span>{{recipes[selectedIndex].ocasions}}</span>
                        </p>
                        <p class="txt-center pt-3">Nivel: <span>{{recipes[selectedIndex].level}}</span>
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