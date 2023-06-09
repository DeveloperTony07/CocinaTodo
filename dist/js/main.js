const app = Vue.createApp({
    data() {
        return {
            selectedIndex: 0,
            recipe: {},
            recipes: [
                {
                    id: 0, image: "./imgs/recipes/Arepas con miel.jpg", name: "Arepas", category: "", area: ""
                },
            ],
            categories: [
                { name: 'Categoria' },
                { name: 'Cumpleaños' },
                { name: 'Día del Padre' },
                { name: 'Día de la Madre' },
                { name: 'Día del niño' },
                { name: 'Navidad' },
                { name: 'Semana Santa' }
            ],
        }
    },
    mounted: function () {
        //Connect to API
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
        })
            .then(
                (response) => {
                    console.log(response.data.meals);
                    //this.categories = response.data.meals;
                    let items = response.data.meals;
                    items.forEach((element, index) => {
                        this.categories.push({ id: index, name: element.strCategory });
                    });
                    //console.log(this.categories);
                }
            )
            .catch(
                error => console.log(error)
            );

        //connect to API get a default recipes list
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
        })
            .then(
                (response) => {

                    let items = response.data.meals;
                    console.log(items);

                    this.recipes = [];

                    //if (items.length > 0) this.loading = false;

                    items.forEach(element => {
                        const index = parseInt(element.idMeal);
                        this.recipes.push({
                            id: index,
                            image: element.strMealThumb,
                            name: element.strMeal,
                        })
                    })
                }
            )
            .catch(
                error => console.log(error)
            );

        /*
        axios({
            method: 'get',
            url: 'https://api.spoonacular.com/recipes/complexSearch?type=maincourse&apiKey=5307c86c068f49209b1fe0e7bafc68df'
        })
            .then(
                (response) => {

                    let items = response.data.results;
                    console.log(items);
                    this.recipes = [];

                    if (items.length > 0) this.loading = false;

                    items.forEach(element => {
                        this.recipes.push({
                            id: element.id,
                            image: element.image,
                            name: element.title,
                            //category: element.category,
                            //time:  element.readyInMinutes + "mins",
                            //level: "Easy",
                            //likes: element.aggregateLikes,
                            //ingredients: "NA",
                            //instructions: "NA"
                        })
                    })
                    //   console.log(this.recipes);
                    this.fillDataDetails();
                }
            )
            .catch(
                error => console.log(error)
            );*/
    },
    methods: {

        /*
        fillDataDetails() {
            for (let i = 0; i < this.recipes.length; i++) {
                axios({
                    method: 'get',
                    url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ this.recipes[i].id
                })
                    .then(
                        (response) => {
                            let items = response.data;
                            console.log(items);
                            //this.recipes[i].category= items.category,
                                this.recipes[i].level = "Easy",
                                this.recipes[i].categorie = "NA",
                                this.recipes[i].instructions = "NA"
                        }
                    )
                    .catch(
                        error => console.log(error)
                    );
            }*/
        /*
        fillRecipeDetails() {
            for (let index = 0; index < this.recipes.length; index++) {
                /// console.log(this.recipes[index].id);

                axios({
                    method: 'get',
                    url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.recipes[index].id

                })
                    .then(
                        (response) => {
                            let items = response.data.meals[0];
                            console.log(items);
                            this.recipes[index].category = items.strCategory;
                            this.recipes[index].area = items.strArea;
                        }
                    )
                    .catch(
                        error => console.log(error)
                    );
            }
        },*/
        /*
        fillDataDetails() {
            for (let i = 0; i < this.recipes.length; i++) {
                axios({
                    method: 'get',
                    url: 'https://api.spoonacular.com/recipes/' + this.recipes[i].id + '/information?includeNutrition=false&apiKey=5307c86c068f49209b1fe0e7bafc68df'
                })
                    .then(
                        (response) => {
                            let items = response.data;
                            console.log(items);
                            //this.recipes[i].category= items.category,
                            this.recipes[i].time = items.readyInMinutes + " min",
                                this.recipes[i].level = "Easy",
                                this.recipes[i].likes = items.aggregateLikes,
                                this.recipes[i].ingredients = "NA",
                                this.recipes[i].instructions = "NA"
                        }
                    )
                    .catch(
                        error => console.log(error)
                    );
            }
        },*/
        onClickLike(index) {
            // console.log("btn - click");
            //this.likes += 1;
            //console.log("INDEX ->" + index);
            this.recipes[index].likes += 1;
        },
        onClickViewRecipe(index) {
            //console.log(index);

            //this.selectedIndex = index;
            //get recipe details
            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + index
            })
                .then(
                    (response) => {

                        let items = response.data.meals[0];
                        console.log(items);
                        this.recipe.id = index;
                        this.recipe.image = items.strMealThumb;
                        this.recipe.name = items.strMeal;
                        this.recipe.category = items.strCategory;

                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        onClickPrev() {
            this.selectedIndex--;
            if (this.selectedIndex < 0) {
                this.selectedIndex = this.recipes.length - 1;
            }
        },
        onClickNext() {
            this.selectedIndex++;
            if (this.selectedIndex >= this.recipes.length) {
                this.selectedIndex = 0;
            }
        }
    },
});

//init custom events for components
const emitter = mitt();
//global propety for custom events
app.config.globalProperties.$test = emitter;