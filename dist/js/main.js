const app = Vue.createApp({
    data() {
        return {
            selectedIndex: 0,
            recipes: [
                {
                    id: 0, image: "./imgs/recipes/Arepas con miel.jpg", name: "Arepas", category: "Desayuno", ocasions: "Semana Santa", level: "Medio", likes: 0
                },
                {
                    id: 1, image: "./imgs/recipes/Arroz con camarones.jpg", name: "Arroz con camarones", category: "Almuerzo", ocasions: "Semana Santa", level: "Medio", likes: 0
                },
                {
                    id: 2, image: "./imgs/recipes/Arroz con Carne.jpg", name: "Arroz con carne", category: "Almuerzo", ocasions: "Semana Santa", level: "Medio", likes: 0
                },
                {
                    id: 3, image: "./imgs/recipes/Arroz con pollo frito.jpg", name: "Arroz con pollo frito", category: "Almuerzo", ocasions: "Semana Santa", level: "Medio", likes: 0
                },
                {
                    id: 4, image: "./imgs/recipes/Huevo revuelto de alta gama.jpg", name: "Huevo de alta gama", category: "Desayuno", ocasions: "Semana Santa", level: "Medio", likes: 0
                },
                {
                    id: 5, image: "./imgs/recipes/Maruchan.jpg", name: "Ramen", category: "Sopa", ocasions: "Semana Santa", level: "Medio", likes: 0
                },
                {
                    id: 6, image: "./imgs/recipes/Papa rellena de papa.jpg", name: "Papa horneada", category: "Cena", ocasions: "Semana Santa", level: "Medio", likes: 0
                },
                {
                    id: 7, image: "./imgs/recipes/Perfect Bacon.jpg", name: "Bacon", category: "Cena", ocasions: "Semana Santa", level: "Medio", likes: 0
                },
            ],
            recipe: {}
        }
    },
    mounted: function () {
        axios({
            method: 'get',
            url: 'https://api.spoonacular.com/recipes/complexSearch?type=maincourse&apiKey=8ae291d830ac4956b5d7b4c433c5ab4f'
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
            );
    },
    methods: {
        fillDataDetails() {
            for (let i = 0; i < this.recipes.length; i++) {
                axios({
                    method: 'get',
                    url: 'https://api.spoonacular.com/recipes/' + this.recipes[i].id + '/information?includeNutrition=false&apiKey=e7676fb679264a9b8c98d36a25c724fa'
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
        },
        onClickLike(index) {
            // console.log("btn - click");
            //this.likes += 1;
            //console.log("INDEX ->" + index);
            this.recipes[index].likes += 1;
        },
        onClickViewRecipe(index) {
            console.log(index);
            this.selectedIndex = index;
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