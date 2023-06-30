const app = Vue.createApp({
    data() {
        return {
            selectedIndex: 0,
            recipe: {},
            recipes: [
                {
                    id: 0, image: "./imgs/recipes/Arepas con miel.jpg", name: "Arepas", category: "", occasion: "", level: "",
                    likes: 0
                },
            ],
            topRecipes: [
                {
                    id: 0, image: "./imgs/recipes/Arepas con miel.jpg", name: "Arepas", category: "", occasion: "", level: "",
                    likes: 0
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
            categories: [],
        }
    },
    mounted: function () {
        //Connect to API
        //Connect to categories
        axios({
            method: 'get',
            url: 'http://localhost/prueba01/public/api/recipes/categories'
        })
            .then(
                (response) => {
                    console.log(response.data);
                    let items = response;
                    items.forEach((element, index) => {
                        this.categories.push({ id: index, name: element.category });
                    });
                }
            )
            .catch(
                error => console.log(error)
            );

        //connect to API get a default recipes list
        axios({
            method: 'get',
            url: 'http://localhost/prueba01/public/api/recipes/all'
        })
            .then(
                (response) => {

                    let items = response.data;
                    console.log(items);

                    this.recipes = [];

                    const route = "http://localhost/prueba01/public/storage/imgs/";
                    items.forEach(element => {
                        this.recipes.push({
                            id: element.id,
                            name: element.name,
                            category: element.category,
                            image: route + element.image,
                            occasion: element.occasion,
                            level: element.level,
                            likes: element.likes
                        })
                    })
                }
            )
            .catch(
                error => console.log(error)
            );

            //Connect api with top 10 recipes
            
            axios({
                method: 'get',
                url: 'http://localhost/prueba01/public/api/recipes/top10'
            })
                .then(
                    (response) => {
    
                        let items = response.data;
                        console.log(items);
    
                        this.topRecipes = [];
    
                        const route = "http://localhost/prueba01/public/storage/imgs/";
                        items.forEach(element => {
                            this.recipes.push({
                                id: element.id,
                                name: element.name,
                                category: element.category,
                                image: route + element.image,
                                occasion: element.occasion,
                                level: element.level,
                                likes: element.likes
                            })
                        })
                    }
                )
                .catch(
                    error => console.log(error)
                );
                
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
            const recipe = this.recipes[index - 1];
            if (recipe.liked) {
                recipe.likes -= 1;
                recipe.liked = false;
            } else {
                recipe.likes += 1;
                recipe.liked = true;
            }
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